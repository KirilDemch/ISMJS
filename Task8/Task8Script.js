function extractCurrencyValue(str) {
   return +str.slice(1);
}

let str = prompt('Введите стоимость (в виде $120)', '');
alert(extractCurrencyValue(str));