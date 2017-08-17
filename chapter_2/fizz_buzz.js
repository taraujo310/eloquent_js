console.log('\n',"My solution", '\n');
for (var i = 1; i <= 100; i++) {
  var to_print = "";
  if(i%3 == 0) to_print = 'fizz';
  if(i%5 == 0) to_print += 'buzz';
  if(i%3 != 0 && i%5 != 0) to_print = i;

  console.log(to_print);
}

console.log('\n',"Book's solution", '\n');

for (var i = 1; i <= 100; i++) {
  var to_print = "";
  if(i%3 == 0) to_print = 'fizz';
  if(i%5 == 0) to_print += 'buzz';

  console.log(to_print || i);
}
