import http from 'k6/http';

export function getProfile(input) {

    const res = http.get(`${__ENV.BASE_URL}/mp/api/auth/profile`, {
            headers: {
                Authorization: `Bearer ${input.token}`,
            },
        });

    return res; // return token from response
}