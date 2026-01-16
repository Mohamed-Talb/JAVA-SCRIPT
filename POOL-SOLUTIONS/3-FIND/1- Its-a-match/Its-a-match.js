// const text = "The fat cat sat on the mat.";

// let matchresult = text.match(/cat/);
// console.log(matchresult);

// let testresult = /dog/.test(text);
// console.log(testresult)

// const regex = new RegExp("cat");
// console.log(regex.test(text));
// console.log(text.match(regex));

// let reg = /.at/;
// console.log(text.match(reg));
// console.log(reg.test(text));

// reg = /[Tt]he/;
// console.log(text.match(reg));
// console.log(reg.test(text));


// reg = /at[.]/;
// console.log(text.match(reg));
// console.log(reg.test(text));

// // reg = /on[.]/;
// // console.log(text.match(reg));
// // console.log(reg.test(text));
// let str3 = "The car parked in the garage.";
// reg = /[^c]ar/;
// console.log(str3.match(reg));
// console.log(reg.test(str3));

// str3 = "aaaaae car parked in the garage #21";
// reg = /a*/;
// console.log(str3.match(reg));
// console.log(reg.test(str3));

// str3 = "The fat   cat sat on the concatenation.";
// reg = /\s*cat\s*/;
// console.log(str3.match(reg));
// console.log(reg.test(str3));

// str3 = "The fat cat sat on the mat.";
// reg = /c.+t/;
// console.log(str3.match(reg));

// str3 = "The car parked in the garage #21";
// reg = /[T]he/;
// console.log(str3.match(reg));
// reg = /[C]he/;
// console.log(str3.match(reg));
// reg = /[c][he]?/;
// console.log(str3.match(reg));


// str3 = "The number was 9.9997 but we rounded it off to 10.0.";
// reg = /[0-9]{2,3}/;
// console.log(str3.match(reg));
// reg = /[0-9]{2,}/;
// console.log(str3.match(reg));
// reg = /[0-9]{3}/;
// console.log(str3.match(reg));


// str3 = "The car is parked in the garage.";
// reg = /[T|t]he|car/;
// reg = console.log(str3.match(reg));

// reg = /(c|p|g)ar/;
// reg = console.log(str3.match(reg));

// reg = /(?:c|p|g)ar/;
// reg = console.log(str3.match(reg));

// str3 = "The fat cat sat on the mat."
// reg = /(f|c|m)at\.?/;
// reg = console.log(str3.match(reg));




// // ANOCHORS
// let rege = /^a/;
// let str = "abc";
// console.log(rege.test(str));
// console.log(str.match(rege));
// console.log("bac".match(rege));

// rege = /^(T|t)he/;
// str = "The car is parked";
// console.log(str.match(rege));
// str = "the car is parked";
// console.log(str.match(rege));
// str = "A car is parked";
// console.log(str.match(rege));


// rege = /(at\.)$/;
// str = "The fat cat.";
// console.log(str.match(rege));
// str = "The fat cat sat.";
// console.log(str.match(rege));
// str = "The fat cat sat on the mat";
// console.log(str.match(rege));



const normal = /hi/;
const begin = /^hi/;
const end = /hi$/;
const beginEnd = /^hi$/;
// ---------- Tests ----------

// normal: matches 'hi' anywhere
console.log("NORMAL\n")
console.log(normal.test("hi"));// true
console.log(normal.test("oh hi there"));// true
console.log(normal.test("high"));// true   (contains "hi")
console.log(normal.test("hello"));// false

// begin: matches 'hi' only at the start
console.log("BEGIN\n")
console.log(begin.test("hi"));// true
console.log(begin.test("hi there"));// true
console.log(begin.test("oh hi"));// false
console.log(begin.test("high"));// true    (starts with "hi")
console.log(begin.test("hello hi"));// false

// end: matches 'hi' only at the end
console.log("END\n")
console.log(end.test("hi"));// true
console.log(end.test("say hi"));// true
console.log(end.test("hi there"));// false
console.log(end.test("high"));// false     ("hi" not at the end)
console.log(end.test("oh hi!"));// false   ("!" after hi)

// beginEnd: matches exactly "hi"
console.log("BEGINEND\n")
console.log(beginEnd.test("hi"));// true
console.log(beginEnd.test("hi there"));// false
console.log(beginEnd.test("oh hi"));// false
console.log(beginEnd.test("high"));// false
console.log(beginEnd.test(" hi"));// false
console.log(beginEnd.test("hi "));// false
