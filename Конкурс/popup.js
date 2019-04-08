


var fio = document.getElementsByClassName('js_fio');
var radioOS = document.getElementsByName('OS');
var phone = document.getElementsByName('phone');
var email = document.getElementsByName('mail');
var achivments = document.getElementsByClassName('achivments_js');
var textarea = document.getElementsByName('comment');

var submit = document.getElementById('submit');

newObj = new Object();


function popup() {
	$('.page-header').css('filter', 'blur(3px)');
	$('.main-field-for-form').css('filter', 'blur(3px)');
	$('.page-footer').css('filter', 'blur(3px)');
	$('.js-overlay-campaign').fadeIn();
	$('.js-overlay-campaign').addClass('disabled');


	$('.js-close').click(function() {
	$('.js-overlay-campaign').fadeOut();
	$('.main-field-for-form').css('filter', 'none')
	$('.page-header').css('filter', 'none');
	$('.page-footer').css('filter', 'none');
	$('.js-overlay-campaign').fadeOut();
	return;
})}

function formSubmission() {
	for (var i = 0; i < radioOS.length; i++) {
		if (radioOS[i].checked) {
			newObj.system = radioOS[i].value;
		}
	}

	for (var i = 0; i < fio.length; i++) {
		if (fio[i].value.length <= 2) {
			alert('Имя Фамилия Или Отчество должны содержать более двух символов')
			return
		}
		else {
			newObj.surname = fio[0].value;
			newObj.name = fio[1].value;
			newObj.patronymic = fio[2].value;

		}
	}
			
	if (phone[0].value.length <= 5) {
		alert('Телефонный номер должен быть больше 5 символов');
		return
	}
	else {
		newObj.numberphone = phone[0].value;
	}

	if (email[0].value.length <= 5) {
		alert('Email должен быть больше 5 символов');
		return
	}
	else {
		newObj.email = email[0].value;
	}

	newObj.achivments = '';

	for (var i = 0; i < achivments.length; i++) {
		if (achivments[i].checked) {
			newObj.achivments +=  achivments[i].value;
		}
	}

	if (textarea[0].value.length < 15) {
		alert('Комментарий должен быть больше 15 символов')
		return
	}

	else {
		newObj.comment = textarea[0].value;
	}
	
	console.log(newObj);

	return popup();

}

var campaign = document.getElementsByClassName('js-overlay-campaign');


