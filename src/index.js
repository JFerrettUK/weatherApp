/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import _ from 'lodash';
import './style.css';
import getCity from './getCity.js';
import fetchWeather from './fetchWeather.js';

async function getWeather() {
  const relevantCity = getCity();
  const theData = await fetchWeather(relevantCity);
  console.log(theData);
  console.log(`${typeof theData} typeof theData`);
}

const searchButton = document.getElementById('findWeather');
searchButton.addEventListener('click', () => {
  getWeather();
});
