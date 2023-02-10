/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import _ from 'lodash';
import './style.css';
import getCity from './getCity.js';
import fetchWeather from './fetchWeather.js';

function getWeather() {
  const relevantCity = getCity();
  console.log(relevantCity);
  const theJSON = fetchWeather(relevantCity);
  console.log(theJSON);
  const theData = JSON.parse(theJSON);
  console.log(theData);
}

const searchButton = document.getElementById('findWeather');
searchButton.addEventListener('click', () => {
  getWeather();
});
