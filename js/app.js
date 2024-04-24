// dark mode icon
let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/assets/sun.png";
    document.getElementById("therm").src = "/assets/thermdark.png";
  } else {
    icon.src = "/assets/moon.png";
    document.getElementById("therm").src = "/assets/thermlight.png";
  }
};

// tangkap elemen HTML
const celciusInput = document.getElementById("celcius-input");
const fahrenheitInput = document.getElementById("fahrenheit-input");
const celciusOutput = document.getElementById("celcius-output");
const fahrenheitOutput = document.getElementById("fahrenheit-output");

const viewInputCelcius = document.getElementById("start-celcius");
const viewInputFahrenheit = document.getElementById("start-fahrenheit");
const viewOutputCelcius = document.getElementById("point-celcius");
const viewOutputFahrenheit = document.getElementById("point-fahrenheit");

const alert = document.getElementById("alert");

const btnReset = document.getElementById("btn-reset");
const btnConversion = document.getElementById("btn-conversion");
const btnReverse = document.getElementById("btn-reverse");

const conversion = document.getElementById("conversion");
const viewFunctionCelcius = document.getElementById("view-function-celcius");
const viewFunctionFahrenheit = document.getElementById(
  "view-function-fahrenheit"
);

// fungsi tombol konversi
btnConversion.onclick = function () {
  if (celciusInput.value != "" || fahrenheitInput.value != "") {
    let f = (parseFloat(celciusInput.value) * 9) / 5 + 32;
    let c = (parseFloat(fahrenheitInput.value - 32) * 5) / 9;
    fahrenheitOutput.value = parseFloat(f.toFixed(2));
    celciusOutput.value = parseFloat(c.toFixed(2));
    alert.classList.add("display-off");
    if (celciusInput.value != "") {
      conversion.value =
        celciusInput.value +
        "°C * (9/5) + 32 = " +
        parseFloat(f.toFixed(2)) +
        "°F";
      viewFunctionCelcius.classList.remove("display-off");
    } else if (fahrenheitInput.value != "") {
      conversion.value =
        "(" +
        fahrenheitInput.value +
        "°F - 32) * 5/9 = " +
        parseFloat(c.toFixed(2)) +
        "°C";
      viewFunctionFahrenheit.classList.remove("display-off");
    }
  } else {
    alert.classList.remove("display-off");
  }
};

// fungsi tombol reset
btnReset.onclick = function () {
  celciusInput.value = null;
  celciusOutput.value = null;
  fahrenheitInput.value = null;
  fahrenheitOutput.value = null;
  conversion.value = null;
  alert.classList.add("display-off");
};

// fungsi tombol reverse
btnReverse.onclick = function () {
  viewInputCelcius.classList.toggle("display-off");
  viewInputFahrenheit.classList.toggle("display-off");
  viewOutputCelcius.classList.toggle("display-off");
  viewOutputFahrenheit.classList.toggle("display-off");

  celciusInput.value = null;
  celciusOutput.value = null;
  fahrenheitInput.value = null;
  fahrenheitOutput.value = null;
  conversion.value = null;
  viewFunctionCelcius.classList.add("display-off");
  viewFunctionFahrenheit.classList.add("display-off");
};
