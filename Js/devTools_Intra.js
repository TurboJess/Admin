$( document ).ready(function() {
    console.log( "ready!" );

    $(".titledUl").on("click", function(){
    	// show sub List Items
  //   		var parentUl= $("titleUl")
  //   		var childUl= $("subUl")
  //  I will need to change the current funtion to only apply to the child element soon
  
		$(".subUl").show(); 
		// $( ".titledUl" ).children().css( "display", "red" );

});

});