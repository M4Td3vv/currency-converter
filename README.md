# Currency Converter

A simple web-based currency converter that allows you to convert amounts between different currencies. The project includes a light and dark mode switch for a better user experience.

## Features

- Convert amounts between various currencies.
- Real-time exchange rates using the ExchangeRate-API.
- Toggle between light and dark mode.
- User-friendly interface.

## Screenshots

![Currency Converter Light Mode](https://media.discordapp.net/attachments/1230246598353616918/1248713369951670362/image.png?ex=6664aa73&is=666358f3&hm=887a5d50f05414947493d70fe0ca75d4bebf5d8cc23376a173febcc759285547&=&format=webp&quality=lossless&width=1436&height=671)
![Currency Converter Dark Mode](https://media.discordapp.net/attachments/1230246598353616918/1248713320006156299/image.png?ex=6664aa67&is=666358e7&hm=c93fab89d23065460480b7371df0ded33fdb4140c313a03e85d82d3d4c4789d8&=&format=webp&quality=lossless&width=1367&height=671)

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yaed3v/currency-converter.git
    cd currency-converter
    ```

2. Open `index.html` in your web browser to use the Currency Converter.

## Usage

1. Enter the amount you wish to convert.
2. Select the currency you are converting from and the currency you are converting to.
3. Click the "Convert" button to see the converted amount.
4. Use the "Toggle Dark Mode" button to switch between light and dark mode.

## API Key

This project uses the ExchangeRate-API for real-time exchange rates. You need to get an API key from [ExchangeRate-API](https://www.exchangerate-api.com/) and replace `YOUR_API_KEY` in the `script.js` file with your actual API key.

```javascript
const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
