/**
 * Ryu.js
 */

// Init function
(function() {
    // Add Ryu onto DOM
    $('#ryu-div').append('<img src="http://i.imgur.com/90Mmdcm.png">');
    
    // Hover functions
    $('#ryu-div img').hover(function() {
	    // Ryu in fighting stance
	    this.src = 'http://i.imgur.com/nTj3Fxx.gif';
    }, function() {
	    // Ryu in stand still
	    this.src = 'http://i.imgur.com/90Mmdcm.png';
    });

    // Hadouken pose - requires 3 mousedown events
    $('#ryu-div img').mousedown(function() {
	    this.src = 'http://i.imgur.com/Rfj0a80.png';
    });

    $('#ryu-div img').mousedown(function() {
	    $('.hadouken').remove();
    });

    $('#ryu-div img').mousedown(function() {
            $('#ryu-div').append('<img class="hadouken" src="http://i.imgur.com/oTyQRvX.gif">');
    });

    $('#ryu-div img').mousedown(function() {
	    $('.hadouken').animate({
		    "margin-left": "600px"
	    }, 1000, 'swing', function() {
		    this.remove();
	    });
     });

    // Return Ryu back to stand still after Hadouken
    $('#ryu-div img').mouseup(function() {
	    this.src = 'http://i.imgur.com/90Mmdcm.png'
    });

})();