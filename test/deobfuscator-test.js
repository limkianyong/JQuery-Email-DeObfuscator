(function() {

	function arrangeAnchorLinkForEmailWith(obfuscatedEmail, emailLinkId) {
		$('#qunit-fixture').append(
			$('<a>' + obfuscatedEmail + '</a>').attr('id', emailLinkId)
						.attr('href', 'mailto:' + obfuscatedEmail)
		);
	}

	module("Show the correct symbols to be replaced");
	
	test("Replace '[at]' with '@' and '[dot]' with '.' in the href and text", function(){
		// arrange
		var obfuscatedEmail = "myemail [at] mydomain [dot] com [dot] my";
		var emailLinkId = 'emailLink';
		arrangeAnchorLinkForEmailWith(obfuscatedEmail, emailLinkId);
		
		var expectedEmail = "myemail@mydomain.com.my";
		
		// act
		$('#' + emailLinkId).deobsfucate();
		
		// assert
		assertHrefAndTextEquals(emailLinkId, expectedEmail);
	});
	
	test("Given custom config settings for at, deobfuscate should replace custom at with '@'", function() {
		// arrange 
		var obfuscatedEmail = "customEmail customAt mydomain customDot com customDot my";
		var emailLinkId = 'emailLink2';
		arrangeAnchorLinkForEmailWith(obfuscatedEmail, emailLinkId);
		
		var expectedEmail = "customEmail@mydomain.com.my";
		
		// act
		$('#' + emailLinkId).deobsfucate({
			at: 'customAt',
			dot: 'customDot'
		});
		
		// assert
		assertHrefAndTextEquals(emailLinkId, expectedEmail);
	});
	
	test("When anchor's href does not exist, deobfuscate the text should be successful", function() {
		// arrange
		var obfuscatedEmail = "customEmail customAt mydomain customDot com customDot my";
		var emailLinkId = 'emailLink3';
		$('#qunit-fixture').append(
			$('<a>' + obfuscatedEmail + '</a>').attr('id', emailLinkId)
		);
		var expectedEmail = "customEmail@mydomain.com.my";
		
		// act
		$('#' + emailLinkId).deobsfucate();
		
		// assert
		equal($('#' + emailLinkId).text(), expectedEmail);
	});
	
	test("When anchor's text is not the same as the href, deobfuscate the href should be successful", function() {
		// arrange
		var obfuscatedEmail = "customEmail customAt mydomain customDot com customDot my";
		var emailLinkId = 'emailLink3';
		$('#qunit-fixture').append(
			$('<a>' + 'random email text' + '</a>').attr('id', emailLinkId)
				.attr('href', obfuscatedEmail)
		);
		var expectedEmail = "customEmail@mydomain.com.my";
		
		// act
		$('#' + emailLinkId).deobsfucate();
		
		// assert
		equal($('#' + emailLinkId).attr('href'), expectedEmail);
		equal($('#' + emailLinkId).text(), 'random email text');
	});
	
	test("deobfuscate should return this", function() {
		// arrange
		var obfuscatedEmail = "customEmail customAt mydomain customDot com customDot my";
		var emailLinkId = 'emailLink3';
		$('#qunit-fixture').append(
			$('<a>' + 'random email text' + '</a>').attr('id', emailLinkId)
				.attr('href', obfuscatedEmail)
		);
		var expectedEmail = "customEmail@mydomain.com.my";
		
		// act
		var actual = $('#' + emailLinkId).deobsfucate();
		
		// assert
		equal(actual.attr('id'), emailLinkId);
	});
	
	function assertHrefAndTextEquals(emailLinkId, expectedEmail) {	
		equal($('#' + emailLinkId).attr('href'), 'mailto:' + expectedEmail);
		equal($('#' + emailLinkId).text(), expectedEmail);
	};
	
})();