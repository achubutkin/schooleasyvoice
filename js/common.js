
/***************** LOADING SCREEN ******************/

$(window).load(function() {
	$('.loading').delay(250).fadeOut(250);
})



$(document).ready(function(){

/***************** SETTING COOKIES ******************/


	$('#lessons-submit').click(function(){
		
		var userEmail = $('#user-email').val();
		Cookies.set('easyvoice_user_email', userEmail, { expires: 7 , domain: 'easyvoice5.ru' });
		
	});
	
    if(Cookies.get('easyvoice_user_email')){
	  var cookedEmail = Cookies.get('easyvoice_user_email');
	  $('#user-email').val(cookedEmail);
    }

	
});