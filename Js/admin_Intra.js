$( document ).ready(function() {
    console.log( "ready!" );

    $('.titledUl').on("click", function(){
    	var subUl =$(".subUl")
    	var titledUl =$(".titledUl")
		titledUl.closest.subUl.show();
    })
    // working code- fail safe
    // $('.titledUl').on("click", function(){
    // 	$(".subUl").show();
    // }

});

