import http from 'k6/http';

export function getBanner(input) {
    //https://mephar-sit-api.acdtech.asia/mp/api/banner
    const res = http.get(`${__ENV.BASE_URL}/mp/api/banner`, {
            headers: {
                Authorization: `Bearer ${input.token}`,
            },
        });

    return res; // return token from response
}