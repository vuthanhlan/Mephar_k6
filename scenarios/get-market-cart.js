import http from 'k6/http';

export function getMarketCart(input) {
    //https://mephar-sit-api.acdtech.asia/mp/api/market/sell/cart
    const res = http.get(`${__ENV.BASE_URL}/mp/api/market/sell/cart`, {
            headers: {
                Authorization: `Bearer ${input.token}`,
            },
        });

    return res; // return token from response
}