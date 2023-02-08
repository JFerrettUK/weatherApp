/* eslint-disable no-console */
import _ from 'lodash';
import './style.css';
import cloudBackground from './cloudBackground.jpg';

function component() {
  const element = document.createElement('div');

  // Lodash, now imported by this script
  element.innerHTML = _.join(['Hello', 'webpack'], ' ');
  element.classList.add('hello');
  console.log(cloudBackground);
}

component();
