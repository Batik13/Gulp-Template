$(function() {

	// Custom JS

	$("#menu").mmenu({
		extensions: ['widescreen', 'pagedim-black', 'effect-menu-slide'],
		navbar: {
			title: 'Франшиза'
		}
	});

	var api = $("#menu").data( "mmenu" );

	api.bind( "open:finish", function( $panel ) {
        $('.hamburger').addClass('is-active');
    });
    api.bind( "close:finish", function( $panel ) {
        $('.hamburger').removeClass('is-active');
    });


    /* Fetch */


    function ftch()
    {
    	var miInit = {
    		method: 'GET',
    		mode: 'cors',
    		cache: 'default'
    	};

    	fetch('fetch.php?a')
    }

	

});
