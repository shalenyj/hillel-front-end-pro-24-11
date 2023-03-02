"use-strict"

$( "button" ).click(function() {
  $( "div" ).each(function( index, element ) {
    // element === this
    $(element).css("backgroundColor", "yellow" );
    if ( $( this ).is("#stop") ) {
      $("span").text("Stopped at div index #" + index );
      return false;
    }
  });
});