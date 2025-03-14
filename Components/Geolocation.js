// geolocation.js
export async function getWeatherByGeolocation(apiKey, displayWeather, showError) {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const lat = position.coords.latitude;
        const lon = position.coords.longitude;

        try {
          const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=YOUR_API_KEY_HERE&units=metric`
          );
          const data = await response.json();
          if (data.cod === 200) {
            displayWeather(data);
          } else {
            showError("Unable to fetch weather data for your location!");
          }
        } catch (error) {
          showError("Error fetching geolocation weather data.");
        }
      },
      () => showError("Geolocation access denied. Please enter a city manually.")
    );
  } else {
    showError("Geolocation is not supported by your browser.");
  }
}
