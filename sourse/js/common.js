const $ = jQuery;

function eventHandler() {
	$('.headerBlock__email-form').submit(function () {
		let mailVal = this.email.value;
		if (mailVal === ''){
			//Пожалуйста, заполните все обязательные поля
			ShowWarning('Please, fill all required input fields')
		}
		event.preventDefault();
	});
	function ShowWarning(message){
		console.log(message);
	}
};



if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
