console.log('\n',"My solution", '\n');
var size = 8, line = "";

for (var i = 0; i < size; i++) {
  for (var j = 0; j < size; j++) {
    if(i%2 == 0) {
      if(j%2 == 0) line += '#';
      else line += ' ';
    } else {
      if(j%2 != 0) line += '#';
      else line += ' ';
    }
  }
  line += "\n"
}

console.log(line);

console.log('\n',"Book's solution", '\n');

var size = 8;

var board = "";

for (var y = 0; y < size; y++) {
  for (var x = 0; x < size; x++) {
    if ((x + y) % 2 == 0)
      board += " ";
    else
      board += "#";
  }
  board += "\n";
}

console.log(board);
