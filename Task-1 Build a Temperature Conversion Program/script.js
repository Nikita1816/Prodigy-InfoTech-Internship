function convertTemp() {
    let temp = parseFloat(document.getElementById("tempInput").value);
    let unit = document.getElementById("unit").value;
    let celsius, fahrenheit, kelvin;

    if (isNaN(temp)) {
        document.getElementById("result").innerHTML = "❌ Please enter a valid number.";
        return;
    }

    if (unit === "C") {
        celsius = temp;
        fahrenheit = (temp * 9/5) + 32;
        kelvin = temp + 273.15;
    } else if (unit === "F") {
        celsius = (temp - 32) * 5/9;
        fahrenheit = temp;
        kelvin = (temp - 32) * 5/9 + 273.15;
    } else {
        celsius = temp - 273.15;
        fahrenheit = (temp - 273.15) * 9/5 + 32;
        kelvin = temp;
    }

    document.getElementById("result").innerHTML =
        `🌡️ Celsius: ${celsius.toFixed(2)} °C<br>
         🔥 Fahrenheit: ${fahrenheit.toFixed(2)} °F<br>
         ❄️ Kelvin: ${kelvin.toFixed(2)} K`;
}
