var V = prompt("Enter Virus Composition : ");
var B = prompt("Enter Blood Composition : ");

m = V.length;
n = B.length;

i = 0;
j = 0;

while (i < m && j < n) {
  if (V[i] === B[j]) {
    j++;
  }
  i++;
}
if (j == m) {
  document.write("POSITIVE \n");
} else {
  document.write("NEGATIVE \n");
}
