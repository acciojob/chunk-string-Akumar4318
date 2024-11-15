function stringChop(str, size) {
	 if(str<str.length || str==null){
    return []
  }
  if(str==""){
    return ""
  }


  let ans=[];
let temp=""
  for(let i=0;i<str.length;i++){
    temp+=(str[i])
    if(temp.length==size){
      ans.push(temp)
      temp=""
    }
  }
  if(temp!=" "){
    ans.push(temp)
  }
  return ans;
  // your code here
}

// Do not change the code below
const str = prompt("Enter String.");
const size = prompt("Enter Chunk Size.");
alert(stringChop(str, size));
