console.log('\n',"My solution", '\n');

var number_of_calls = 7;

for (var i = 1; i <= number_of_calls; i++) {
  var line = "";
  for (var j = 0; j < i; j++) {
    line = line + '#';
  }
  console.log(line);
}

console.log('\n',"Book's solution", '\n');

for (var line = '#'; line.length <= 7; line += '#')
  console.log(line)
