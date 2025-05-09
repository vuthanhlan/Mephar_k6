import http from 'k6/http';

export function getStatus(input) {
    //https://mephar-sit-api.acdtech.asia/mp/api/point/check/status
    const res = http.get(`${__ENV.BASE_URL}/mp/api/point/check/status`, {
            headers: {
                Authorization: `Bearer ${input.token}`,
            },
        });

    return res; // return token from response
}