function displayWeather(data) {
  const weatherIcon = document.createElement("img");
  const iconMap = {
    Clear: "sunny.png",
    Rain: "rainy.png",
    Clouds: "cloudy.png",
    Snow: "snowy.png",
    Thunderstorm: "storm.png"
  };

  weatherIcon.src = `Assests/weather-icons/${iconMap[data.weather[0].main] || "default.png"}`;
  weatherIcon.alt = data.weather[0].description;

  document.getElementById("city-name").textContent = `City: ${data.name}`;
  document.getElementById("temperature").textContent = `Temperature: ${data.main.temp} °C`;
  document.getElementById("description").textContent = `Description: ${data.weather[0].description}`;
  document.getElementById("humidity").textContent = `Humidity: ${data.main.humidity}%`;

  const weatherInfo = document.querySelector(".weather-info");
  weatherInfo.appendChild(weatherIcon);
}
