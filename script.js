const apiKey = 'YOUR_API_KEY'; // Take your api key here
const apiUrl = `https://v6.exchangerate-api.com/v6/${apiKey}/latest/USD`;

const amountInput = document.getElementById('amount');
const fromCurrency = document.getElementById('fromCurrency');
const toCurrency = document.getElementById('toCurrency');
const convertButton = document.getElementById('convertButton');
const resultDiv = document.getElementById('result');
const toggleModeButton = document.getElementById('toggleModeButton');

fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
        const currencies = Object.keys(data.conversion_rates);
        currencies.forEach(currency => {
            const option1 = document.createElement('option');
            option1.value = currency;
            option1.textContent = currency;
            fromCurrency.appendChild(option1);

            const option2 = document.createElement('option');
            option2.value = currency;
            option2.textContent = currency;
            toCurrency.appendChild(option2);
        });

        fromCurrency.value = 'USD';
        toCurrency.value = 'EUR';
    })
    .catch(error => console.error('Error fetching currency data:', error));

convertButton.addEventListener('click', () => {
    const amount = amountInput.value;
    const from = fromCurrency.value;
    const to = toCurrency.value;

    if (amount === '' || from === '' || to === '') {
        alert('Please fill in all fields.');
        return;
    }

    fetch(`https://v6.exchangerate-api.com/v6/${apiKey}/pair/${from}/${to}/${amount}`)
        .then(response => response.json())
        .then(data => {
            const convertedAmount = data.conversion_result;
            resultDiv.textContent = `${amount} ${from} = ${convertedAmount.toFixed(2)} ${to}`;
        })
        .catch(error => console.error('Error converting currency:', error));
});

toggleModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});
