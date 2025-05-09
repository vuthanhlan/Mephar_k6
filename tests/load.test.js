import { htmlReport } from "https://raw.githubusercontent.com/benc-uk/k6-reporter/main/dist/bundle.js";
import { textSummary } from "https://jslib.k6.io/k6-summary/0.0.1/index.js";
import { check, sleep} from "k6";
import { login } from "../scenarios/login.js";
import { getProfile } from "../scenarios/get-profile.js";
import { getBranch } from "../scenarios/get-branch.js";
import { getAllProducts } from "../scenarios/get-all-products.js";
import { getDogase } from "../scenarios/get-dosage.js";
import { getPositon } from "../scenarios/get-position.js";
import { getGroupProduct } from "../scenarios/get-group-product.js";
import { getMedicationCategory } from "../scenarios/get-medication-category.js";
import { getManufature } from "../scenarios/grt-manufacture.js";
import { getCountryProduct } from "../scenarios/get-country-produce.js";
import { createProduct } from "../scenarios/post-product.js";
import { getBanner } from "../scenarios/get-banner.js";
import { getMarketProduct } from "../scenarios/get-market-product.js";
import { getMarketCart } from "../scenarios/get-market-cart.js";

export const options = {
    scenarios: {
        openProductList: {
            executor: 'constant-vus',
            exec: 'openProductList',
            vus: 1,
            duration: '2s',
        },
        openInsertMedicine: {
            executor: 'constant-vus',
            exec: 'openInsertMedicine',
            vus: 1,
            duration: '2s',
        },
        CreateProducts: {
            executor: 'constant-vus',
            exec: 'CreateProducts',
            vus: 1,
            duration: '2s',
        },
        goToMarket: {
            executor: 'constant-vus',
            exec: 'goToMarket',
            vus: 1,
            duration: '2s',
        },
        goToCart: {
            executor: 'constant-vus',
            exec: 'goToCart',
            vus: 1,
            duration: '2s',
        },
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
        username: 'test30',
        password: '12345678'
    });
    return {
        token: token,
        branchId: 262,
        toStoreId: 169
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
        branchId: data.branchId
    });

    check(res2, {
        'status getAllProducts is 200': (r) => r.status === 200,
        'response time getAllProducts < 300ms': (r) => r.timings.duration < 300,
    });
    

    sleep(1);
}

export function openInsertMedicine(data) {
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
        'response time getBranch < 300ms': (r) => r.timings.duration < 300,
    });

    const res2 = getDogase({
        token: data.token,
    })
    check(res2, {
        'status getDogase is 200': (r) => r.status === 200,
        'response time getDogase < 300ms': (r) => r.timings.duration < 300,
    });

    const res3 = getPositon({
        token: data.token,
    })
    check(res3, {
        'status getPositon is 200': (r) => r.status === 200,
        'response time getPositon < 300ms': (r) => r.timings.duration < 300,
    });

    const res4 = getGroupProduct({
        token: data.token
    })
    check(res4, {
        'status getGroupProduct is 200': (r) => r.status === 200,
        'response time getGroupProduct < 300ms': (r) => r.timings.duration < 300,
    });

    const res5 = getMedicationCategory({
        token: data.token,
    })

    check(res5, {
        'status getMedicationCategory is 200': (r) => r.status === 200,
        'response time getMedicationCategory < 300ms': (r) => r.timings.duration < 300,
    });

    const res6 = getManufature({
        token: data.token,
    })
    check(res6, {
        'status getManufature is 200': (r) => r.status === 200,
        'response time getManufature < 300ms': (r) => r.timings.duration < 300,
    });

    const res7 = getCountryProduct({
        token: data.token,
    })
    check(res7, {
        'status getCountryProduct is 200': (r) => r.status === 200,
        'response time getCountryProduct < 300ms': (r) => r.timings.duration < 300,
    });

    sleep(1);
}

export function CreateProducts(data) {
    const res = createProduct({
        token: data.token,
    })
    check(res, {
        'status CreateProducts is 200': (r) => r.status === 200,
        'response time CreateProducts < 300ms': (r) => r.timings.duration < 300,
    });
    sleep(1);
}

export function goToMarket(data) {
    const res = getBanner({
        token: data.token,
    })
    check(res, {
        'status getBanner is 200': (r) => r.status === 200,
        'response time getBanner < 300ms': (r) => r.timings.duration < 300,
    });

    const res1 = getMarketProduct({
        token: data.token,
    }) 
    check(res1, {
        'status getMarketProduct is 200': (r) => r.status === 200,
        'response time getMarketProduct < 300ms': (r) => r.timings.duration < 300,
    });

    const res2 = getMarketCart({
        token: data.token,
    }) 
    check(res2, {
        'status getMarketCart is 200': (r) => r.status === 200,
        'response time getMarketCart < 300ms': (r) => r.timings.duration < 300,
    });

    const res3 = getProfile({
        token: data.token,
    }) 
    check(res3, {
        'status getProfile is 200': (r) => r.status === 200,
        'response time getProfile < 300ms': (r) => r.timings.duration < 300,
    });

    sleep(1);
}

export function goToCart(data) {
    const res = getProfile({
        token: data.token,
    })
    check(res, {
        'status getProfile is 200': (r) => r.status === 200,
        'response time getProfile < 300ms': (r) => r.timings.duration < 300,
    });

    const res1 = getMarketCart({
        token: data.token,
    }) 
    check(res1, {
        'status getMarketCart is 200': (r) => r.status === 200,
        'response time getMarketCart < 300ms': (r) => r.timings.duration < 300,
    });

    const res2 = getMarketCart({
        token: data.token,
    }) 
    check(res2, {
        'status getMarketCart is 200': (r) => r.status === 200,
        'response time getMarketCart < 300ms': (r) => r.timings.duration < 300,
    });
    sleep(1);
}
