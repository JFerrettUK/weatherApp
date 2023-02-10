/* eslint-disable no-console */
// URL (required), options (optional)
export default async function fetchWeather(cityHere) {
  await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityHere}&APPID=f7a06b158bbd6d0b78572bed7d66abf2`)
    .then((response) => response.json())
    .catch((err) => {
      console.log(err);
    });
}
