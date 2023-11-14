function stringChop(str, size) {
  // your code here
	let i=0, ans=[];
	while(i<str.length-1)
		{
			ans.push(str.slice(i,i+size));
			i=i+size;
		}
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
