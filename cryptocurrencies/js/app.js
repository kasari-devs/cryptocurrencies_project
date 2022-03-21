// instanciate the classes
const cryptoAPI = new CryptoAPI ();
const ui = new UI ();

// create the variables
const form = document.getElementById('form');

// add event listner
form.addEventListener('submit', (e) => {
    e.preventDefault();

    // read the values from the form
    //read currency
    const currencySelect = document.getElementById('currency').value;
    //read cryptocurrency
    const cryptocurrencySelect= document.getElementById('cryptocurrency').value;
    
    if (currencySelect === '' || cryptocurrencySelect === '') {
        ui.printMessage('All fields are mandetory', 'deep-orange');
    } else {
        // query the rest API
        //console.log(data.result.data[cryptoCurrencySelector]["name"]);
        cryptoAPI.queryAPI(currencySelect, cryptocurrencySelect)
            .then(data => {
                const price = data.result.data[cryptocurrencySelect].quotes[currencySelect]["price"];
                const name = data.result.data[cryptocurrencySelect]["name"];
                ui.displayResult(name, price, currencySelect);
            })
    }


})
