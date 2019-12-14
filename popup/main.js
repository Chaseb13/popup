'use strict';

let popupButton = document.querySelector('.popup-button');
let popup = document.querySelector('.popup');

popupButton.onclick = function() {
	popup.classList.toggle('selected');
	
	if (popup.classList.contains('selected')) {
		popupButton.innerHTML = 'Убрать окно';
	} else {
		popupButton.innerHTML = 'Показать окно';
	}
};