{
    console.log("Hello World,blah blah")

const integers = [2, 4, 0, 100, 4, 11, 2602, 36]; 


function findOutlier(integers: any){
  for (let i = 0; i < integers.length;  i++){
if (integers[i] % 2 === 0){
    console.log( integers[i], "is even"); 
}else {
    console.log(integers[i], "is odd"); 
}
  }

} 
findOutlier(integers); 
}