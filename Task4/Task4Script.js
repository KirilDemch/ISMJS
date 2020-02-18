function randomInteger(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}


let min = +prompt('Введите минимальное значение','');
let max = +prompt('Введите максимальное значение','');
alert(randomInteger(min, max));