(function( $ ){ 

	var settings = {
		at: '\\[at\\]',
		dot: '\\[dot\\]'
	};
	
	var emailDomElement;

	var methods = {	
	
		init : function( options ) { 
			if (options) {
				$.extend( settings, options );
			}			
		},
		deobsfucate : function( ) { 
			var obsfucatedEmail = emailDomElement.attr('href');
			
			var configRegExp = {
				at: new RegExp('\\s*' + settings.at + '\\s*', 'gi'),
				dot: new RegExp('\\s*' + settings.dot + '\\s*', 'gi')
			};
			
			var replacedAtInEmail = obsfucatedEmail.replace(configRegExp.at, '@');
			var replacedDotAndAtInEmail = replacedAtInEmail.replace(configRegExp.dot, '.');
					
			emailDomElement.attr('href', replacedDotAndAtInEmail);
		}
	};

	$.fn.deobsfucate = function( method ) { 

		emailDomElement = $(this);
		methods.init.apply( this, arguments );
		methods.deobsfucate();
		
	};

})( jQuery );