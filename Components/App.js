import { showSpinner, hideSpinner } from "./Components/Spinner.js";
import { showError, hideError } from "./Components/errorHandling.js";

searchButton.addEventListener("click", async () => {
  const cityName = cityInput.value.trim();
  hideError();

  if (cityName) {
    showSpinner();
    try {
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=YOUR_API_KEY_HERE&units=metric`
      );
      const data = await response.json();

      hideSpinner();

      if (data.cod === 200) {
        displayWeather(data);
      } else {
        showError("City not found!");
      }
    } catch (error) {
      hideSpinner();
      showError("Unable to fetch weather data. Please try again later.");
    }
  } else {
    showError("Please enter a city name!");
  }
});
