console.log('\n',"My solution", '\n');
function min(arg1, arg2) {
  if(arg1 < arg2) return arg1;
  return arg2;
}

console.log(min(0, 10));
console.log(min(0, -10));

console.log('\n',"Book's solution", '\n');
function min(a, b) {
  if (a < b)
    return a;
  else
    return b;
}

console.log(min(0, 10));
console.log(min(0, -10));
