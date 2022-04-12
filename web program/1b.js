var num1 = parseInt(prompt("enter first number:"));
var num2 = parseInt(prompt("enter second number:"));

var sum = num1+num2;

console.log("the sum of" +num1 + "and" + num2 + "is" + sum)
if(sum%2 == 0){
    console.log("sum is even");
}
else{
    console.log("sum is odd")
}