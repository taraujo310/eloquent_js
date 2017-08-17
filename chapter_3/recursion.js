console.log('\n',"My solution", '\n');
function my_isEven(number) {
  if(Math.abs(number) == 0) return true;
  else if(Math.abs(number) == 1) return false;
  else return my_isEven(Math.abs(number) - 2);
}

console.log(my_isEven(50));
console.log(my_isEven(75));
console.log(my_isEven(-1));

console.log('\n',"Book's solution", '\n');

function isEven(n) {
  if (n == 0)
    return true;
  else if (n == 1)
    return false;
  else if (n < 0)
    return isEven(-n);
  else
    return isEven(n - 2);
}

console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));
