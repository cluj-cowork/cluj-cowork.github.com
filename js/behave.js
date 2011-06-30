/*jslint white:false */
/*global document, window, setTimeout, clearTimeout, console, log, require, define */
(function ($) {
	
	var MIEZ = {
		
		onReady: function () {
			
			$('.contact').children().click(function(e){ 
				e.preventDefault();
				$(this).addClass('opened')
				$('#ss-form').show(); 
			});
			
			//$('h1 a').click(function(e){ e.preventDefault(); });
			$("body").delegate("a[rel~='external']", "click", function () { this.target = "_blank"; });
			
		}
		
	};
	
	$(document).ready(MIEZ.onReady);
	
}(window.jQuery));
