/* eslint-disable no-unused-vars */
/* eslint-disable no-console */
export default function getCity() {
  const cityHere = document.getElementById('search').value;
  const newCity = cityHere.toLowerCase();
  return newCity;
}
