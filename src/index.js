/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import _ from 'lodash';
import './style.css';
import getCity from './getCity.js';
import fetchWeather from './fetchWeather.js';
import processWeather from './processWeather.js';

async function getWeather() {
  const relevantCity = getCity();
  const theData = await fetchWeather(relevantCity);
  processWeather(theData);
}

const searchButton = document.getElementById('findWeather');
searchButton.addEventListener('click', () => {
  const weatherData = getWeather();
  console.log(weatherData);
  // processWeather(weatherData);
});
