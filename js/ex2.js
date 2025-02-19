function fahrenheitToCelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5 / 9);
}

function convertTemperature() {
    let fahrenheit = Number(document.getElementById("fahrenheit").value);
    let celsius = fahrenheitToCelsius(fahrenheit);

    let formattedCelsius = celsius.toFixed(2);

    document.getElementById("result").innerText =
        `${fahrenheit} Fahrenheit is ${formattedCelsius} Celsius`;
}

let deg212 = 212;
let converted212 = fahrenheitToCelsius(deg212);
console.log(`Water's boiling temperature is ${deg212} Fahrenheit or ${converted212.toFixed(2)} Celsius`);

console.log(`32 degrees Fahrenheit = ${fahrenheitToCelsius(32).toFixed(2)} degrees Celsius`);

let deg98pt7 = 98.7;
console.log(`Temperature of ${deg98pt7} Fahrenheit is ${fahrenheitToCelsius(deg98pt7).toFixed(2)} degrees Celsius`);
