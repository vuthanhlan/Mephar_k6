import http from 'k6/http';

export function getAllProducts(input) {
    //https://mephar-sit-api.acdtech.asia/mp/api/product?page=1&limit=20&keyword=&branchId=258
    const res = http.get(`${__ENV.BASE_URL}/mp/api/product?page=1&limit=20&keyword=&branchId=${input.branchId}`, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${input.token}`,
            },
        });

    return res; // return token from response
}