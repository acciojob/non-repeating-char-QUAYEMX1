function firstNonRepeatedChar(str) {
 // Write your code here

	const arr={}
	for(let i=0;i<str.length;i++){
		if(arr[str[i]]){
			arr[str[i]]++;
		}else{
			arr[str[i]]=1
		}
	}

	for(let x in arr){
		if(arr[x]==1){
			return x;
		}
	}
	
	return null;
}
// const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
