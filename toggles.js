var button = document.getElementsByClassName('review-toggle__item');
var activebutton = document.getElementsByClassName('review-toggle__item-active');

button[0].addEventListener('click', function() {
	button[0].classList.add('review-toggle__item-active');
	button[1].classList.remove('review-toggle__item-active');
	button[2].classList.remove('review-toggle__item-active');
})


button[1].addEventListener('click', function() {
	button[0].classList.remove('review-toggle__item-active');
	button[1].classList.add('review-toggle__item-active');
	button[2].classList.remove('review-toggle__item-active');
})


button[2].addEventListener('click', function() {
	button[0].classList.remove('review-toggle__item-active');
	button[1].classList.remove('review-toggle__item-active');
	button[2].classList.add('review-toggle__item-active');
})



















var button2 = document.getElementsByClassName('toggle__item');
var activebutton2 = document.getElementsByClassName('toggle__item-active');
var table = document.getElementsByClassName('app-purchase-option');

	button2[0].addEventListener('click', function() {
		button2[0].classList.add('toggle__item-active');
		button2[1].classList.remove('toggle__item-active');
		button2[2].classList.remove('toggle__item-active');
		table[0].style.left="20";
		table[1].style.left="300";
		table[2].style.left="580";
})


	button2[1].addEventListener('click', function() {
		button2[0].classList.remove('toggle__item-active');
		button2[1].classList.add('toggle__item-active');
		button2[2].classList.remove('toggle__item-active');
		table[0].style.left="-260";
		table[1].style.left="20";
		table[2].style.left="300";
	})


	button2[2].addEventListener('click', function() {
		button2[0].classList.remove('toggle__item-active');
		button2[1].classList.remove('toggle__item-active');
		button2[2].classList.add('toggle__item-active');
		table[0].style.left="-540";
		table[1].style.left="-260";
		table[2].style.left="20";
	})




