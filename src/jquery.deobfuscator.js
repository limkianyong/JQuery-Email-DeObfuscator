/*!
 * JQuery Email Deobfuscator
 *
 * Copyright 2011, Lim Kian Yong
 * Dual licensed under the MIT or GPL Version 2 licenses.
 *
 */
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
			var configRegExp = {
				at: new RegExp('\\s*' + settings.at + '\\s*', 'gi'),
				dot: new RegExp('\\s*' + settings.dot + '\\s*', 'gi')
			};
			
			var obfuscatedEmail = emailDomElement.attr('href');			
			if (obfuscatedEmail) {
				var replacedAtInEmail = obfuscatedEmail.replace(configRegExp.at, '@');
				var replacedDotAndAtInEmail = replacedAtInEmail.replace(configRegExp.dot, '.');
						
				emailDomElement.attr('href', replacedDotAndAtInEmail);
			}
			
			var obfuscatedEmailText = emailDomElement.text();
			
			var replacedAtInEmailText = obfuscatedEmailText.replace(configRegExp.at, '@');
			var replacedDotAndAtInEmailText = replacedAtInEmailText.replace(configRegExp.dot, '.');
					
			emailDomElement.text(replacedDotAndAtInEmailText);
		}
	};

	$.fn.deobsfucate = function() { 

		emailDomElement = $(this);
		methods.init.apply( this, arguments );
		methods.deobsfucate();
		
		return $(this);
	};

})( jQuery );