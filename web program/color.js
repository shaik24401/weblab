var c = prompt("enter colour code[R,B,G,O,Y,W]");
switch (c) {
  case "R":
    document.write("red");
    break;
  case "B":
    document.write("blue");
    break;
  case "G":
    document.write("green");
    break;
  case "o":
    document.write("orange");
    break;
  case "Y":
    document.write("yellow");
    break;
  case "W":
    document.write("white");
    break;
  default:
    document.write("other invaild");
    break;
}
