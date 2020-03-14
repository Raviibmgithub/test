$( function() {
    $( "#slider-range" ).slider({
      range: true,
      min: 0,
      max: 1000,
      values: [ 0, 1000 ],
      slide: function( event, ui ) {
        $( "#minval" ).val( "$" + ui.values[ 0 ] );
        $( "#maxval" ).val( "$" + ui.values[ 1 ] );
      }
    });
    $( "#minval" ).val( "$" + $( "#slider-range" ).slider( "values", 0 ));
    $( "#maxval" ).val( "$" + $( "#slider-range" ).slider( "values", 1 ) );
  } );

  $(window).load(function () {
  $(".trigger_popup_fricc").click(function(){
     $('.hover_bkgr_fricc').show();
  });
  $('.hover_bkgr_fricc').click(function(){
      $('.hover_bkgr_fricc').hide();
  });
  $('.popupCloseButton').click(function(){
      $('.hover_bkgr_fricc').hide();
  });
});