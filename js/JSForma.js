$(document).ready(function(){
	var el='#a1';
	var dtfrm=[];
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

	function formPrevSend(){
		var a = $('.listActiv').attr('id');
		var b = $('#b1').val();
		var c = $('#b2').val();
		var d = $('#b3').val();
		var e = $('.TEXAR').val();	
		dtfrm.push(a,b,c,d,e);
	};	

	function fin(){
		dtfrm=[];
		$('.PreLoCont').fadeOut(10);
		$('.TulTp').fadeIn(10).delay(1000).fadeOut(10);
		$('.listActiv').removeClass('listActiv');
		$('#followers').addClass('listActiv');
		$("#b1 :first").attr("selected", "selected");
		$("#b2 :first").attr("selected", "selected");
		$("#b3 :first").attr("selected", "selected");
		$('.TEXAR').val("");
		$('#btnn1').attr('disabled','disabled').removeClass('BUTACT');
	};

	function err(){
		$('.TulTp1').fadeIn(10).delay(1000).fadeOut(10);
		$('.PreLoCont').fadeOut(10);
	};

	$('.BUT').click(function(){
		$('.PreLoCont').fadeIn(10);
		formPrevSend();
		dtfrm = JSON.stringify(dtfrm);
		console.log(dtfrm);
		$.ajax({url:"http://www.mocky.io/v2/56eb0b871300007201737857", data:{dtfrm}, success: function(data){fin()/*err()*/}, error: function(){err()}})

	});


});

var t = $.ajax({url:"http://www.mocky.io/v2/56eb0b871300007201737857", data:{}, success: function(data){console.log(data)}, error: function(){}})
