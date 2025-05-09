import http from 'k6/http';

export function getManufature(input) {
    //https://mephar-sit-api.acdtech.asia/mp/api/manufacture?page=1&limit=20
    const res = http.get(`${__ENV.BASE_URL}/mp/api/manufacture?page=1&limit=20`, {
            headers: {
                Authorization: `Bearer ${input.token}`,
            },
        });

    return res; // return token from response
}