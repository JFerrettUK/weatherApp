/* eslint-disable no-param-reassign */
export default function kelvinToC(valNum) {
  valNum = parseFloat(valNum);
  const finalC = (valNum - 273.15);
  return finalC;
}
