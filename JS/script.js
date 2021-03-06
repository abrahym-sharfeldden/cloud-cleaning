$(document).ready(function(){
	$("#fadeIn").fadeIn(2500, function(){

	})
	$('ul.tabs-a li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs-a li').removeClass('current1');
		$('.tab-content').removeClass('current1');

		$(this).addClass('current1');
		$("#"+tab_id).addClass('current1');
	})
	$('ul.tabs-b li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs-b li').removeClass('current2');
		$('.tab-content').removeClass('current2');

		$(this).addClass('current2');
		$("#"+tab_id).addClass('current2');
	})
})
var cbpHorizontalMenu = (function() {

	var $listItems = $( '#cbp-hrmenu > ul > li' ),
		$menuItems = $listItems.children( 'a' ),
		$body = $( 'body' ),
		current = -1;

	function init() {
		$menuItems.on( 'click', open );
		$listItems.on( 'click', function( event ) { event.stopPropagation(); } );
	}

	function open( event ) {

		if( current !== -1 ) {
			$listItems.eq( current ).removeClass( 'cbp-hropen' );
		}

		var $item = $( event.currentTarget ).parent( 'li' ),
			idx = $item.index();

		if( current === idx ) {
			$item.removeClass( 'cbp-hropen' );
			current = -1;
		}
		else {
			$item.addClass( 'cbp-hropen' );
			current = idx;
			$body.off( 'click' ).on( 'click', close );
		}

		return false;

	}

	function close( event ) {
		$listItems.eq( current ).removeClass( 'cbp-hropen' );
		current = -1;
	}

	return { init : init };

})();

$(function() {
	var header = $('#header').height(); /* Used because the header is fixed */

	$('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
	  		var target = $(this.hash);
	  		
	  		target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
	  		if (target.length) {
				$('html, body').animate({
	      			scrollTop: target.offset().top-header /* Replace .top-header with .top if header is not fixed */
	    		}, 1000);
	    		
	    		return false;
	  		}
		}
  	});
});