let icon = document.getElementById("icon");

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "/15-apr-24-rkurniaw/assets/sun.png";
  } else {
    icon.src = "/15-apr-24-rkurniaw/assets/moon.png";
  }
};

let celcius = document.getElementById("celcius");
let fahrenheit = document.getElementById("fahrenheit");
let reset = document.getElementById("reset");
let konversi = document.getElementById("konversi");
let conversion = document.getElementById("conversion");

konversi.onclick = function () {
  let f = (parseFloat(celcius.value) * 9) / 5 + 32;
  fahrenheit.value = parseFloat(f.toFixed(2));
  conversion.value =
    celcius.value + "°C * (9/5) + 32 = " + parseFloat(f.toFixed(2)) + "°F";
};

reset.onclick = function () {
  celcius.value = null;
  fahrenheit.value = null;
  conversion.value = null;
};
