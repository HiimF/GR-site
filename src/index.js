import $ from 'jquery';
import anime from 'animejs'

import './scss/style.scss';



;(function() {
  $( '#header .menu li a' ).on( 'click', function( e ) {
    e.preventDefault();
    console.log(1);

    var selector = $( e.currentTarget ).attr( 'href' );
    var position = $( selector ).offset().top;

    var scroll = anime({
      targets: 'html, body',
      scrollTop: position,
      duration: 1000,
      easing: 'easeOutExpo'
    });
  });

})();