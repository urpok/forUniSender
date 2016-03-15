$("#contactForm").submit(function(event){
    event.preventDefault();
});	

$('#btn-preview').click(function(){
	$('body').append('<div class="row"><div class="col-sm-6 col-sm-offset-3 form-preview"><h3 id="headForm">Prev See:</h3><div class="row"><div class="col-sm-6"><h4>'+$("#name").val()+'</h4></div><div class="col-sm-6"><h4>'+$("#email").val()+'</h4></div></div></div></div>');
	$('body').append('<div class="row"><div class="col-sm-6 col-sm-offset-3 form-preview1"><div class="row"><div class="col-sm-12"><p>'+$("#message").val()+'</p></div></div></div>');
}
);
