
$(function(){

  window.FakeLoader.init();
});


$("body").niceScroll({
        cursorcolor: "#2ab5e7",
        cursorwidth: "12px",
        cursorborder: "1px solid #2ab5e7",
        cursorborderradius: "30px",
        scrollspeed:80,
        mousescrollstep:40,
        background: "#ffa132",
      });

       AOS.init({
        duration: 1000,
        animatedClassName: 'aos-animate',
        easing: 'ease', 

       });


       // $fn.parallax( resistance, mouse )
$( document ).mousemove( function( e ) {
  $( '.carousel-item img' ).parallax(-20, e );
  $( '.bangla , .english , .order' ).parallax( -20, e );


});