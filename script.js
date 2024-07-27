function firstNonRepeatedChar(str) {
 // Write your code here

	const arr={}
	for(let i=0;i<str.length;i++){
		if(arr[str[i]]){
			arr[str[i]]++;
		}
	}
	for(int i=0;i<arr.length;i++){
		if(arr[i]==1){
			return i;
		}
	}
	return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
