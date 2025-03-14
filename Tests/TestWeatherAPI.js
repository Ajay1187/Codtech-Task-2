import { fetchWeatherData } from "../app.js";

test("fetchWeatherData returns valid data for a city", async () => {
  const data = await fetchWeatherData("Mumbai", "YOUR_API_KEY_HERE");
  expect(data).toHaveProperty("name", "Mumbai");
  expect(data).toHaveProperty("main.temp");
});
