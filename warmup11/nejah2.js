$('document').ready(function(){
	$('#left').on('click', function(){
		$('#create').toggleClass('1')
	})
	$('#right').on('click', function(){
		$('#create').toggleClass('2')
	})
	if ($('#create')hasClass('1')){
		$('#create').on('click', function(){
		$('ul#1').append('<li> <li>')
	})}
		else if($('#create')hasClass('2')){
		$('#create').on('click', function(){
		$('ul#2').append('<li> <li>')
	})

	}

});


