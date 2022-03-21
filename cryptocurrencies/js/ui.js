class UI {
    constructor () {
        this.init();
    }

    init () {
        this.printCryptoCurrencies();
    }
    printCryptoCurrencies () {
        cryptoAPI.getCryptoCurrenciesList()
            .then(data => {
            const cryptoCurrencies = data.cryptoCurrencies.data;
            const select = document.getElementById('cryptocurrency');
            for (let currency in cryptoCurrencies) {
                const cryptoName = cryptoCurrencies[currency]["name"];
                const cryptoId = cryptoCurrencies[currency]["id"];
                
                // add the option
                const option = document.createElement('option');
                option.value = cryptoId;
                option.appendChild(document.createTextNode(cryptoName));
                select.appendChild(option);
                
            }
            
            })
    
      
    }
    // prints the error message
    printMessage (message, className) {
        const errordiv = document.createElement('div');
        errordiv.className = className;
        errordiv.appendChild(document.createTextNode(message));
        const messagesDiv = document.querySelector('.messages');
        messagesDiv.appendChild(errordiv);

        // remove the message
        setTimeout(() => {
            document.querySelector('.messages div').remove();
        }, 1000);
    }

    // show user select result
    displayResult (name, price, currencySelector) {
        let htmlTemplete = '';
        htmlTemplete += `
            <div class ="card cyan darken-3">
                <divclass="card-content white-text">
                    <span class="card-title">Result</span>
                    <p>The price of ${name} is ${currencySelector} ${price}</p>
                </div>
            </div>
        
        `;
        const divResult = document.querySelector('#result');
        divResult.innerHTML = htmlTemplete;
    }


}