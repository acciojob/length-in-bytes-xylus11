const byteSize = (str) => {
  // write your code here
	const encoder=new TextEncoder();
	const encodeBytes=encoder.encode(str);
	return encodeBytes.byteLength;
	
};

// Do not change the code below
const str = prompt("Enter some string.");
alert(byteSize(str));