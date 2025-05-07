import http from 'k6/http';

export function getBranch(input) {

    const res = http.get(`${__ENV.BASE_URL}/mp/api/branch`, {
            headers: {
                Authorization: `Bearer ${input.token}`,
            },
        });

    return res; // return token from response
}