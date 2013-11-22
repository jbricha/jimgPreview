/**
 * jQuery Plugin
 * @author Jalal Bricha
 *
 * Display an image preview when cursor is over html elements (links for example).
 * Previews are always displayed in the window and not truncated if the link is in the bottom of the window.
 *
 * Options :
 * 	- srcAttr : the attribute when the image source url is stored in the HTML object.
 *
 * Example of use :
 * 	- $('a.specialClass').jimgPreview({ srcAttr: 'imgSrc' }) : init links with 'specialClass' class to display image preview
 * 		when the mouse cursor is over it. The src of the image is fetched from 'imgSrc' attribute.
 */
(function ($) {

	// static overlay image object
	var jimg = $('<img id="jimg">');
	
	$(document).ready(function() {
		$('body').append(jimg);
	});
	
	
	jQuery.fn.jimgPreview = function(options) 
	{
		
		var settings = { 
	        srcAttr: 'href'
		} 
		if(options) { 
	        jQuery.extend(settings, options); 
	    };
	
		$(this).mousemove(function(e) {
			var src = $(this).attr(settings.srcAttr);
			$('#jimg').attr('src', src);
			
			var delta = 0;
			var distanceFromWindowBottom = $(window).height() - e.pageY;
			if(distanceFromWindowBottom < jimg.height()) {
				delta = jimg.height() - distanceFromWindowBottom;
			}
			jimg.offset({
				top: e.pageY - delta,
				left: e.pageX + 20
			});
			jimg.show();
		}).mouseleave(function() {
			jimg.hide();
		});	
	}
	
	
})(jQuery);