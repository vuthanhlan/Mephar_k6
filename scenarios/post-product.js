import http from 'k6/http';

export function createProduct(input) {
    const payload = JSON.stringify({ 
        "status": 1, 
        "type": 2, 
        "isLoyaltyPoint": false, 
        "isBatchExpireControl": false, 
        "expiryPeriod": 180, 
        "productUnits": [{ 
            "unitName": "vỉ", 
            "code": "", 
            "price": 3444, "barCode": "", 
            "exchangeValue": 1, 
            "isDirectSale": false, 
            "isBaseUnit": true }], 
            "name": "gfgg", 
            "price": 3444, 
            "inventory": 444, 
            "baseUnit": "vỉ", 
            "branchId": 262 
        });
    //https://mephar-sit-api.acdtech.asia/mp/api/product
    const res = http.post(`${__ENV.BASE_URL}/mp/api/product`, payload, {
        headers: { 
            'Authorization' : `Bearer ${input.token}`,
            'Content-Type': 'application/json' 
        }
    });
    return res;
}
