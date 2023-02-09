/* eslint-disable no-unused-vars */
/* eslint-disable import/extensions */
/* eslint-disable no-console */
import _ from 'lodash';
import './style.css';
import getCity from './getCity.js';
import cloudBackground from './cloudBackground.jpg';

const searchButton = document.getElementById('findWeather');
searchButton.addEventListener('click', () => {
  getCity();
});
