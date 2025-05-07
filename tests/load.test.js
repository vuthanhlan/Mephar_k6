import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { check, sleep} from "k6";
import { login } from "../scenarios/login.js";
import { getProfile } from "../scenarios/get-profile.js";
import { getBranch } from "../scenarios/get-branch.js";
import { getAllProducts } from "../scenarios/get-all-products.js";

export const options = {
    scenarios: {
        openProductList: {
            executor: 'constant-vus',
            exec: 'openProductList',
            vus: 1,
            duration: '2s',
        }
    }
}


export function handleSummary(data) {
    return {
      "reports/loadTestResult.html": htmlReport(data),
      stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
  }

export function setup() {
    const token = login({
        username: 'test25',
        password: '12345678'
    });
    return {
        token: token,
        branchId: 258,
    }
}

export function openProductList(data){
    const res = getProfile({
        token: data.token,
    })
    
    check(res, {
        'status getProfile is 200': (r) => r.status === 200,
        'response time getProfile < 300ms': (r) => r.timings.duration < 300,
    });

    const res1 = getBranch({
        token: data.token,
    })
    check(res1, {
        'status getBranch is 200': (r) => r.status === 200,
        'response time getBranch< 300ms': (r) => r.timings.duration < 300,
    });

    const res2 = getAllProducts({
        token: data.token,
        branchId: data.branchId,
    })
    check(res2, {
        'status getAllProducts is 200': (r) => r.status === 200,
        'response time getAllProducts < 300ms': (r) => r.timings.duration < 300,
    });
    console.log(`getAllProducts: ${res2.status}`)

    sleep(1);
}