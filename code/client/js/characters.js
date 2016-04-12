/**
 * Created by Skyler DeGrote on 4/2/16.
 */
/**
 * Created by Skyler DeGrote on 3/17/16.
 */
$( document ).ready(function() {
    console.log( "ready!" );


    // character boxes at top. click on them and show only that kind of character
    $("#mainCharacter").click(function(){
        $(".visible").removeClass("visible");
        $(this).addClass("visible");
    });



});




