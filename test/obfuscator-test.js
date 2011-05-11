(function() {
	module("Show the correct symbols to be replaced");

	test("Replace 'config.at' with '@'", function(){
		// arrange
		var obsfucatedEmail = "mailto:myemail [at] mydomain [dot] com [dot] my";
		var emailLinkId = 'emailLink';
		$('#qunit-fixture').append(
			$('<a></a>').attr('id', emailLinkId)
						.attr('href', obsfucatedEmail)
		);
		
		var expectedEmail = "mailto:myemail@mydomain.com.my";
		
		// act
		$('#' + emailLinkId).deobsfucate();
		
		// assert
		equal($('#' + emailLinkId).attr('href'), expectedEmail);
	});
})();