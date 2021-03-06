const $ = jQuery;

function eventHandler() {
	$('.headerBlock__email-form').submit(function () {
		let mailVal = this.email.value;

		if (mailVal === ''){
			ShowWarning('Please, fill all required input fields');
			event.preventDefault();
			return
		}

		if (!validateEmail(mailVal)){
			ShowWarning('Please, input correct email address');
			event.preventDefault();
			return
		}

	});

	function validateEmail(email){
		var re = /\S+@\S+\.\S+/;
		return re.test(email);
	}

	let selfCloseTimeOut;
	function ShowWarning(message){
		//remove prev interval
		clearTimeout(selfCloseTimeOut);
		//close block
		$('.headerBlock__error-bl').fadeOut(function () {
			let self = this;
			$(this).removeClass('active');
			//change its message
			let innerTxt = this.querySelector('.headerBlock__error-txt');

			if (message){
				innerTxt.innerHTML = message;
			}
			else{
				innerTxt.innerHTML = 'Something went wrong...';
			}

			//make cross btn work and show block
			$(this).fadeIn(function () {
				$(this).addClass('active');

				selfCloseTimeOut = window.setTimeout(function () {
					$(self).fadeOut(function () {
						$(self).removeClass('active');
					});
				}, 3000);

			});


			let crossBtn = this.querySelector('.headerBlock__cross-btn');
			$(crossBtn).click(function () {
				clearTimeout(selfCloseTimeOut);
				$(self).fadeOut(function () {
					$(this).removeClass('active');
				})
			});

		});
	}
};



if (document.readyState !== 'loading') {
	eventHandler();
} else {
	document.addEventListener('DOMContentLoaded', eventHandler);
}
