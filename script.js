function stringChop(str, size) {
		
	
  // your code here
	let i=0, ans=[];
	if(str.length==0)
	{return ans[]}
	else{
	while(i<=str.length-1)
		{displayError:"TypeError: The following error originated from your application code, not from Cypress. > Cannot read properties of null (reading 'length') When Cypress detects uncaught errors originating from your application it will automatically fail the current test. This behavior is configurable, and you can choose to turn this off by listening to the `uncaught:exception` event. https://on.cypress.io/uncaught-exception-from-application at stringChop (http://localhost:3000/script.js:4:15) at http://localhost:3000/script.js:16:7"
			ans.push(str.slice(i,i+size));
			i=i+size;
		}
	return ans;}
	
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
