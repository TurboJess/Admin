$( document ).ready(function() {
    console.log( "ready!" );

    $(".titleUl").on("click", function(){
		var buttons= $(this).closest(".titleUl");
			$(this).children().show();



});


});