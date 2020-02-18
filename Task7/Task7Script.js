function truncate(str, maxlength) {
  return (str.length > maxlength) ?
    str.slice(0, maxlength - 1) + '…' : str;
}

let str = prompt('Введите строку', '');
let length = +prompt('Введите длину строки','');
alert(truncate(str, length));