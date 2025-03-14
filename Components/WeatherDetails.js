// weatherDetails.js
export function displayExtendedWeather(data) {
  const extendedInfo = document.createElement("div");
  extendedInfo.className = "extended-info";

  const wind = document.createElement("p");
  wind.textContent = `Wind Speed: ${data.wind.speed} m/s`;

  const sunrise = document.createElement("p");
  const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
  sunrise.textContent = `Sunrise: ${sunriseTime}`;

  const sunset = document.createElement("p");
  const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
  sunset.textContent = `Sunset: ${sunsetTime}`;

  extendedInfo.appendChild(wind);
  extendedInfo.appendChild(sunrise);
  extendedInfo.appendChild(sunset);

  const weatherInfo = document.querySelector(".weather-info");
  weatherInfo.appendChild(extendedInfo);
}
