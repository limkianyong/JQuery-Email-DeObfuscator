JQuery Email Deobfuscator allows you to write your email as "myemail [at] mydomain [dot] com [dot] tld" but display it as "myemail@mydomain.com.tld" to the user. 

It's an wishful effort to fight spam while enhancing usability.

Quickstart
1. Given that you have an email link:
	<a id="myEmailID" href="mailto:myemail [at] mydomain [dot] com [dot] tld">myemail [at] mydomain [dot] com [dot] tld</a>

2.  Add the call to $().deobsfucate()
	<script type="text/javascript">
		$('#myEmailID').deobsfucate();
	</script>
	
3. That's all. Try it now!