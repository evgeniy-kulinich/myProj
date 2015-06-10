jQuery(function($){
// Plugin activation (basic - with all default values)
// $('.to-top').toTop();

// Plugin activation with options
$('.to-top').toTop({
//options with default values
    autohide: true,  //boolean 'true' or 'false'
    offset: 500,     //numeric value (as pixels) for scrolling length from top to hide automatically
    speed: 500,      //numeric value (as mili-seconds) for duration
    position:true,   //boolean 'true' or 'false'. Set this 'false' if you want to add custom position with your own css
    right: 15,       //numeric value (as pixels) for position from right. It will work only if the 'position' is set 'true'
    bottom: 350      //numeric value (as pixels) for position from bottom. It will work only if the 'position' is set 'true'
    });
});


(function( $ ){
    'use strict';
    
    $.fn.toTop = function(opt){
        
        //variables
        var elem = this;
        var win = $(window);
        var doc = $('html, body');
        
        //Extended Options
        var options = $.extend({
            autohide: true,
            offset: 420,
            speed: 500,
            position: true,
            right: 15,
            bottom: 30
        }, opt);
        
        elem.css({
            'cursor': 'pointer'
        });
        
        if(options.autohide){
            elem.css('display', 'none');
        }
        
        if(options.position){
            elem.css({
                'position': 'fixed',
                'right': options.right,
                'bottom': options.bottom,
            });
        }
        
        elem.click(function(){
            doc.animate({scrollTop: 0}, options.speed);
        });
        
        win.scroll(function(){
            var scrolling = win.scrollTop();
            
            if(options.autohide){
                if(scrolling > options.offset){
                    elem.fadeIn(options.speed);
                }
                else elem.fadeOut(options.speed);
            }
            
        });
        
    };
    
}( jQuery ));


$(document).ready(function() {
	$('.fade').hover(
		function(){
			$(this).find('.caption').fadeIn(250);
		},
		function(){
			$(this).find('.caption').fadeOut(250);
		}
	);
});