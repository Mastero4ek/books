'use strict'

const books = document.querySelector('.books'),
	bookItems = books.querySelectorAll('.book'),
	book2List = bookItems[0].querySelector('ul'),
	book2Items = book2List.querySelectorAll('li'),
	book3Title = bookItems[4].querySelector('h2 a'),
	book5List = bookItems[5].querySelector('ul'),
	book5Items = book5List.querySelectorAll('li'),
	book6List = bookItems[2].querySelector('ul'),
	book6Items = book6List.querySelectorAll('li'),
	body = document.querySelector('body'),
	adv = document.querySelector('.adv');

books.prepend(bookItems[1]);
books.append(bookItems[2]);

bookItems[0].insertAdjacentElement('afterend', bookItems[4]);

book2Items[1].insertAdjacentElement('afterend', book2Items[3]);
book2Items[3].insertAdjacentElement('afterend', book2Items[6]);
book2Items[6].insertAdjacentElement('afterend', book2Items[8]);
book2Items[8].insertAdjacentElement('afterend', book2Items[4]);
book2Items[4].insertAdjacentElement('afterend', book2Items[5]);
book2Items[5].insertAdjacentElement('afterend', book2Items[7]);
book2Items[7].insertAdjacentElement('afterend', book2Items[9]);

book5Items[1].insertAdjacentElement('afterend', book5Items[9]);
book5Items[9].insertAdjacentElement('afterend', book5Items[3]);
book5Items[3].insertAdjacentElement('afterend', book5Items[4]);
book5Items[2].insertAdjacentElement('afterend', book5Items[6]);
book5Items[6].insertAdjacentElement('afterend', book5Items[7]);

book6Items[8].insertAdjacentHTML('afterend',
	`<li>Глава 8: За пределами ES6</li>`);

book3Title.innerHTML = 'Книга 3. this и <strong>Прототипы</strong> Объектов';

body.style.backgroundImage = 'url(./image/adv.jpg)';

adv.remove();