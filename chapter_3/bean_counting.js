console.log('\n',"My solution", '\n');
function my_countBs(word) {
  var amount = 0;
  for (var i = 0; i < word.length; i++) {
    amount += (word.charAt(i) == 'B') ? 1 : 0;
  }

  return amount;
}

function my_countChar(word, character) {
  var amount = 0;
  for (var i = 0; i < word.length; i++) {
    amount += (word.charAt(i) == character) ? 1 : 0;
  }

  return amount;
}

console.log(my_countBs('Brasil'));
console.log(my_countBs('Babaca'));
console.log(my_countBs('Babaca no Brasil'));

console.log(my_countChar('Brasil', 'B'));
console.log(my_countChar('Babaca', 'B'));
console.log(my_countChar('Babaca no Brasil', 'B'));

function my_countBs2(word) {
  return my_countChar(word, 'B');
}

console.log('\n',"Book's solution", '\n');
function countChar(string, ch) {
  var counted = 0;
  for (var i = 0; i < string.length; i++)
    if (string.charAt(i) == ch)
      counted += 1;
  return counted;
}

function countBs(string) {
  return countChar(string, "B");
}

console.log(countBs('Brasil'));
console.log(countBs('Babaca'));
console.log(countBs('Babaca no Brasil'));

console.log(countChar('Brasil', 'B'));
console.log(countChar('Babaca', 'B'));
console.log(countChar('Babaca no Brasil', 'B'));
