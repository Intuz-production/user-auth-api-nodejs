**<h1>Introduction - User Authentication</h1>**

This component is used to check if requested user(s) are active in current application or not. For example, I have logged in with User A in mobile app at 10:00 AM, and Admin user would deactivate the User A from backend panel at 10:15 AM, at that time I was still logged in. After that when I would try to perform any action (which interact with server/API), using this component, we could identify the user's latest status and logged him out from the application.


<br/><br/>
**<h1>Example Usage</h1>**

```
var auth_service  = require('user-auth'); // on the top of your file

app.post('/your-action', function(req, res, next) {
	var user_array = ['1','2','3'];	// or you can pass single id in an array
	
	auth_service.auth().user_auth(req, user_array, function(auth_result) {
		console.log(auth_result.status);

		// your code goes here...
	});	
});
```
<br/><br/>
**<h1>Bugs and Feedback</h1>**
For bugs, questions and discussions please use the Github Issues.

<br/><br/>

**<h1>Acknowledgments</h1>**

<br/>
* <a href="https://www.npmjs.com/package/async" target="_blank">Async</a>

<br/><br/>
**<h1>License</h1>**
The MIT License (MIT)
<br/><br/>
Copyright (c) 2018 INTUZ
<br/><br/>
Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions: 
<br/><br/>
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.

<br/>
<h1></h1>
<a href="https://www.intuz.com/" target="_blank"><img src="Screenshots/logo.jpg"></a>
