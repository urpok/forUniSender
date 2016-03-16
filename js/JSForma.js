$(document).ready(function(){
	var el='#a1';
	$('.list1').click(function(event){
		el='#'+event.target.id;
		$('.list1').removeClass('listActiv');
		$(el).addClass('listActiv');
		console.log(el);
	});
		$('.Sel').click(function(){
			$('.Sel').change( function(){
				check1();
				check()
			});
		});

	function check(){
		if($("select#b1").val()!=1 && $("select#b2").val()!=1 && $("select#b3").val()!=1){
			$('#btnn1').removeAttr('disabled').addClass('BUTACT');
			
		}
	};
	function check1(){
		if ($("select#b1").val() || $("select#b2").val() || $("select#b3").val() == 1){
			$('#btnn1').attr('disabled','disabled').removeClass('BUTACT');
		}
	};

	$('.BUT').click(function(){
		$('.PreLoCont').fadeIn(10).delay(300).fadeOut(10);
		$('.TulTp').delay(300).fadeIn(10);
		setTimeout(function() {window.location.reload();}, 1200);
	});


});
