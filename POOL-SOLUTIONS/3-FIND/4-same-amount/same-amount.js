function sameAmount(str, reg1, reg2) 
{
  const matches1 = str.match(reg1);
  const matches2 = str.match(reg2);

  const count1 = matches1 ? matches1.length : 0;
  const count2 = matches2 ? matches2.length : 0;

  return count1 === count2;
}

console.log(sameAmount("aaabbb", /a/g, /b/g)); 
// true → 3 a's and 3 b's
console.log(sameAmount("hello123", /[a-z]/g, /\d/g)); 
// false → letters ≠ digits
console.log(sameAmount("test", /x/g, /y/g)); 
// true → both match 0 times
