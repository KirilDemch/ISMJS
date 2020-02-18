let div = document.createElement('div');
div.innerText = 
	"Цикл будет бесконечным, так как условие i != 10 никогда не выполнится i никогда не будет равна 10 \
	\n let i = 0; \n while (i != 10) \n { \n i += 0.2; \n} \n \
	Это происходит из-за потери точности, при добавлении дробей 0.2 \
	\n Для просмотра реальных значчений і нажмите на кнопку "
let button = document.createElement('button');
button.innerText = 'Запустить скрипт';


document.body.append(div);
div.append(button);


button.addEventListener('click', () => {
	let i = 0;
	while (i < 11) {
	  i += 0.2;
	  if (i > 9.8 && i < 10.2) alert( i );
	}
});

