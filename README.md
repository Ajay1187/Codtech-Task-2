# Weather App

## Overview
This is a simple weather application that fetches real-time weather data using the OpenWeather API. Users can search for weather by city name or use their current geolocation.

## Features
- Search weather by city name
- Fetch weather using geolocation
- Toggle between Celsius and Fahrenheit
- Dark and light theme support
- Error handling and loading spinner

## Setup Instructions

1. Clone the repository:
   ```bash
   git clone https://github.com/your-repo/weather-app.git
   ```

2. Navigate to the project folder:
   ```bash
   cd weather-app
   ```

3. Install dependencies (if using a package manager like npm or yarn):
   ```bash
   npm install
   ```

4. Update `YOUR_API_KEY_HERE` in `App.js` and `Geolocation.js` with a valid OpenWeather API key.

5. Open `index.html` in a browser or use a local server:
   ```bash
   npx http-server
   ```

## File Structure
```
/Weather-App
 ├── Assests/
 │   ├── Style.css
 │   ├── app.js
 ├── Components/
 │   ├── App.js
 │   ├── Geolocation.js
 │   ├── Spinner.js
 │   ├── WeatherDetails.js
 │   ├── errorHandling.js
 ├── Themes/
 │   ├── Dark.css
 │   ├── Light.css
 ├── Tests/
 │   ├── TestWeatherAPi.js
 ├── UnitConversion.js
 ├── utils.js
 ├── README.md
```

## License
This project is licensed under the MIT License.
