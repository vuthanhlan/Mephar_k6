import http from 'k6/http';

export function getGroupProduct(input) {
    //https://mephar-sit-api.acdtech.asia/mp/api/group-product?page=1&limit=20
    const res = http.get(`${__ENV.BASE_URL}/mp/api/group-product?page=1&limit=20`, {
            headers: {
                Authorization: `Bearer ${input.token}`,
            },
        });

    return res; // return token from response
}