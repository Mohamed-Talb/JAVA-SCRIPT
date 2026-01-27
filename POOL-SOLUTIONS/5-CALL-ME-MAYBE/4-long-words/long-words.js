function longWords(Arr)
{
    return Arr.every((Arg) => (typeof Arg === "string" && Arg.length >= 5))
}

function oneLongWord(Arr)
{
    return Arr.some((Arg) => (typeof Arg === "string" && Arg.length >= 10))
}

function noLongWords(Arr)
{
    return Arr.every((Arg) => (typeof Arg === "string" && Arg.length < 7))
}


const A = ["apple", "lemon", "grape"];        // all ≥ 5 chars
const B = ["hi", "cat", "dog"];               // all < 5 chars
const C = ["short", "tiny", "incredible"];    // contains 10+
const D = ["alpha", "beta", "gam"];           // mix
const E = ["go", "to", "moon"];               // no ≥ 7 char
const F = ["verylongwordhere", "ok"];         // 10+ char


console.log("A:", longWords(A), oneLongWord(A), noLongWords(A));
console.log("B:", longWords(B), oneLongWord(B), noLongWords(B));
console.log("C:", longWords(C), oneLongWord(C), noLongWords(C));
console.log("D:", longWords(D), oneLongWord(D), noLongWords(D));
console.log("E:", longWords(E), oneLongWord(E), noLongWords(E));
console.log("F:", longWords(F), oneLongWord(F), noLongWords(F));
 
// A: true false true
// B: false false true
// C: false true false
// D: false false true
// E: false false true
// F: false true false
