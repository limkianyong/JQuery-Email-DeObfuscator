(function() {

	function arrangeAnchorLinkForEmailWith(obfuscatedEmail, emailLinkId) {
		$('#qunit-fixture').append(
			$('<a>' + obfuscatedEmail + '</a>').attr('id', emailLinkId)
						.attr('href', obfuscatedEmail)
		);
	}

	module("Show the correct symbols to be replaced");
	
	test("Replace '[at]' with '@' and '[dot]' with '.' in the href and text", function(){
		// arrange
		var obsfucatedEmail = "mailto:myemail [at] mydomain [dot] com [dot] my";
		var emailLinkId = 'emailLink';
		arrangeAnchorLinkForEmailWith(obsfucatedEmail, emailLinkId);
		
		var expectedEmail = "mailto:myemail@mydomain.com.my";
		
		// act
		$('#' + emailLinkId).deobsfucate();
		
		// assert
		assertHrefAndTextEquals(emailLinkId, expectedEmail);
	});
	
	test("Given custom config settings for at, deobfuscate should replace custom at with '@'", function() {
		// arrange 
		var obsfucatedEmail = "mailto:customEmail customAt mydomain customDot com customDot my";
		var emailLinkId = 'emailLink2';
		arrangeAnchorLinkForEmailWith(obsfucatedEmail, emailLinkId);
		
		var expectedEmail = "mailto:customEmail@mydomain.com.my";
		
		// act
		$('#' + emailLinkId).deobsfucate({
			at: 'customAt',
			dot: 'customDot'
		});
		
		// assert
		assertHrefAndTextEquals(emailLinkId, expectedEmail);
	});
	
	function assertHrefAndTextEquals(emailLinkId, expectedEmail) {	
		equal($('#' + emailLinkId).attr('href'), expectedEmail);
		equal($('#' + emailLinkId).text(), expectedEmail);
	};
	
})();