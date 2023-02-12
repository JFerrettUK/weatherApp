/* eslint-disable import/extensions */
/* eslint-disable no-console */
import capitalizeWord from './capitalizeWord.js';
import kelvinToC from './kelvinToC.js';

export default function processWeather(theData) {
  console.log(theData);
  const iconNo = theData.weather[0].icon;
  const weatherIcon = `http://openweathermap.org/img/wn/${iconNo}@2x.png`;
  const imageElement = document.getElementById('iconCont');
  imageElement.src = weatherIcon;

  const descripText = theData.weather[0].description;
  const capDescripText = capitalizeWord(descripText);
  console.log(capDescripText);
  const descripElement = document.getElementById('descripCont');
  descripElement.innerText = capDescripText;

  const cityName = capitalizeWord(theData.name);
  const nameElement = document.getElementById('nameCont');
  nameElement.innerText = cityName;

  const { temp } = theData.main;
  const tempElement = document.getElementById('tempCont');
  const cTemp = kelvinToC(temp);
  const decimal = Math.trunc(cTemp);
  const finalC = `${decimal}°C`;
  tempElement.innerText = finalC;
  tempElement.style.fontWeight = 'bold';
}
