import http from 'k6/http';

export function login(input) {
    const payload = JSON.stringify({
        username: input.username,
        password: input.password,
    });

    const res = http.post(`${__ENV.BASE_URL}/mp/api/auth/login`, payload, {
        headers: { 'Content-Type': 'application/json' }
    });
    const body = res.json();
    const token = body?.data?.accessToken?.token;
    return token;
}
