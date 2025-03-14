let isCelsius = true;

document.getElementById("unit-toggle").addEventListener("click", () => {
  isCelsius = !isCelsius;
  const tempElement = document.getElementById("temperature");
  const currentTemp = parseFloat(tempElement.dataset.temp);

  if (isCelsius) {
    tempElement.textContent = `Temperature: ${(currentTemp - 32) * (5 / 9)} °C`;
  } else {
    tempElement.textContent = `Temperature: ${currentTemp * (9 / 5) + 32} °F`;
  }
});
