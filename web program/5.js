var V = prompt("Enter Virus Composition:");
var B = prompt("Enter Blood Composition:");

a = V.length;
b = B.length;

i=0;
j=0;

while(i<a && j<b){
    if(V[i]= B[j]){
        j++;
    }
    i++;
}
if(j = a-1)
console.log("POSITIVE\n")
else console.log("Negative")