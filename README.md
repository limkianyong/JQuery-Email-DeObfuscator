<h1>JQuery Email Deobfuscator allows you to write your email as "myemail [at] mydomain [dot] com [dot] tld" but display it as "myemail@mydomain.com.tld" to the user. </h1>

<p>It's an wishful effort to fight spam while enhancing usability.</p>

<h3>Quickstart</h3>

<ol>
  <li>
    <p>Given that you have an email link:</p>
    <code>&lt;a id="myEmailID" href="mailto:myemail [at] mydomain [dot] com [dot] tld"&gt; myemail [at] mydomain [dot] com [dot] tld &lt;/a&gt;</code>
  </li>
  <li>
    <p>Add the call to $().deobsfucate()</p>
    <code>
	&lt;script type="text/javascript">
		$('#myEmailID').deobsfucate();
	&lt;/script>
    </code>
  </li>
  <li>
    <p>That's all. Try it now!</p>
  </li>
</ol>