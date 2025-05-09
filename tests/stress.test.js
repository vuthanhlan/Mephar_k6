import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { openProductList } from "./load.test.js";
import { openInsertMedicine } from "./load.test.js";
import { CreateProducts } from "./load.test.js";
import { goToMarket } from "./load.test.js";
import { goToCart } from "./load.test.js";
import { login } from "../scenarios/login.js";


export const options = {
    scenarios: {
        openProductList: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '2m', target: 50 },   // tăng đến 50 VUs
                { duration: '30s', target: 200 }, // tăng đột ngột đến 200 VUs (spike)
                { duration: '1m', target: 200 },  // giữ 1 phút ở mức cao
                { duration: '30s', target: 0 },   // giảm nhanh về 0
            ],
            exec: 'openProductList',
        },

        openInsertMedicine: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '2m', target: 50 },   // tăng đến 50 VUs
                { duration: '30s', target: 200 }, // tăng đột ngột đến 200 VUs (spike)
                { duration: '1m', target: 200 },  // giữ 1 phút ở mức cao
                { duration: '30s', target: 0 },   // giảm nhanh về 0
            ],
            exec: 'openInsertMedicine',
        },

        CreateProducts: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '2m', target: 50 },   // tăng đến 50 VUs
                { duration: '30s', target: 200 }, // tăng đột ngột đến 200 VUs (spike)
                { duration: '1m', target: 200 },  // giữ 1 phút ở mức cao
                { duration: '30s', target: 0 },   // giảm nhanh về 0
            ],
            exec: 'CreateProducts',
        },

        goToMarket: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '2m', target: 50 },   // tăng đến 50 VUs
                { duration: '30s', target: 200 }, // tăng đột ngột đến 200 VUs (spike)
                { duration: '1m', target: 200 },  // giữ 1 phút ở mức cao
                { duration: '30s', target: 0 },   // giảm nhanh về 0
            ],
            exec: 'goToMarket',
        },

        goToCart: {
            executor: 'ramping-vus',
            startVUs: 0,
            stages: [
                { duration: '2m', target: 50 },   // tăng đến 50 VUs
                { duration: '30s', target: 200 }, // tăng đột ngột đến 200 VUs (spike)
                { duration: '1m', target: 200 },  // giữ 1 phút ở mức cao
                { duration: '30s', target: 0 },   // giảm nhanh về 0
            ],
            exec: 'goToCart',
        }
       
    }
}


export function handleSummary(data) {
    return {
      "reports/stressTestResult.html": htmlReport(data),
      stdout: textSummary(data, { indent: " ", enableColors: true }),
    };
  }

export function setup() {
    const token = login({
        username: 'test30',
        password: '12345678'
    });
    return {
        token: token,
        branchId: 262,
        toStoreId: 169
    }
}

export {openProductList};
export { openInsertMedicine};
export { CreateProducts};
export { goToMarket};
export { goToCart};
