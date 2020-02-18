function checkSpam(str) {
  let lowerStr = str.toLowerCase();

  return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

let str = prompt('Введите набор слов', '');

alert(checkSpam(str));