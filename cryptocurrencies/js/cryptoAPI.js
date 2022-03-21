class CryptoAPI {
    // get all the crypto currencies
    async getCryptoCurrenciesList() {
        const response = await fetch ('https://api.alternative.me/v2/ticker/?limit=10');
        // return as a JSON
        const cryptoCurrencies = await response.json();
        //return the object
        return  {
            cryptoCurrencies
        }  
    }
    // querry the rest api with currency and cryptocurrency
    async queryAPI (currency, cryptocurrency) {
        const url = await fetch(`https://api.alternative.me/v2/ticker/${cryptocurrency}/?convert=${currency}`);
        const result = await url.json();
        return {
            result
        }
    }
}


