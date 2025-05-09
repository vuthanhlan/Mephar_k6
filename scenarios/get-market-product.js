import http from 'k6/http';

export function getMarketProduct(input) {
    //https://mephar-sit-api.acdtech.asia/mp/api/market/config/product?page=1&limit=16&keyword=&status=active&sortBy=quantitySold&type=common
    const res = http.get(`${__ENV.BASE_URL}/mp/api/market/config/product?page=1&limit=16&keyword=&status=active&sortBy=quantitySold&type=common`, {
            headers: {
                Authorization: `Bearer ${input.token}`,
            },
        });

    return res; // return token from response
}