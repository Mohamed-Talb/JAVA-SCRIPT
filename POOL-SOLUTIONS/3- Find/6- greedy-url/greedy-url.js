function getURL(dataSet)
{
    regEx = /(http|https):\/\/\S*/g;
    return dataSet.match(regEx);
}

function greedyQuery(dataSet)
{   
    regEx = /(https?:\/\/\S+\?\w+=\w+(?:&\w+=\w+){2,})/g
    return dataSet.match(regEx);
}
function notSoGreedy(dataSet)
{
    regEx = /(https?:\/\/\S+\?\w+=\w+(?:&\w+=\w+){1,2})/g
    return dataSet.match(regEx);
}

// Test 1: mix of URLs (0, 1, 2, 3 params)
// const dataSet1 =
//   "Visit https://a.com and https://b.com?p=1 plus https://c.com?a=1&b=2 and https://d.com?a=1&b=2&c=3";

// console.log(getURL(dataSet1));
// // ["https://a.com", "https://b.com?p=1", "https://c.com?a=1&b=2", "https://d.com?a=1&b=2&c=3"]

// console.log(greedyQuery(dataSet1));
// // ["https://d.com?a=1&b=2&c=3"]

// console.log(notSoGreedy(dataSet1));
// // ["https://c.com?a=1&b=2", "https://d.com?a=1&b=2&c=3"]


// Test 2: includes 4 params (should be excluded from notSoGreedy)
const dataSet2 =
  "Links: https://x.com?a=1&b=2&c=3&d=4 and https://y.com?a=1&b=2&c=3 and https://z.com?a=1&b=2";

console.log(getURL(dataSet2));
// ["https://x.com?a=1&b=2&c=3&d=4", "https://y.com?a=1&b=2&c=3", "https://z.com?a=1&b=2"]

console.log(greedyQuery(dataSet2));
// ["https://x.com?a=1&b=2&c=3&d=4", "https://y.com?a=1&b=2&c=3"]

console.log(notSoGreedy(dataSet2));
// ['https://x.com?a=1&b=2&c=3', "https://y.com?a=1&b=2&c=3", "https://z.com?a=1&b=2"]


// Test 3: repeated URLs + punctuation
const dataSet3 =
  "Wow (https://t.com?a=1&b=2&c=3), and again https://t.com?a=1&b=2&c=3! Also https://n.com?a=1&b=2.";

console.log(getURL(dataSet3));
// ["https://t.com?a=1&b=2&c=3", "https://t.com?a=1&b=2&c=3", "https://n.com?a=1&b=2"]

console.log(greedyQuery(dataSet3));
// ["https://t.com?a=1&b=2&c=3", "https://t.com?a=1&b=2&c=3"]

console.log(notSoGreedy(dataSet3));
// ["https://t.com?a=1&b=2&c=3", "https://t.com?a=1&b=2&c=3", "https://n.com?a=1&b=2"]


// Test 4: no URLs
const dataSet4 =
  "No links here, just text and numbers 12345.";

console.log(getURL(dataSet4));
// []

console.log(greedyQuery(dataSet4));
// []

console.log(notSoGreedy(dataSet4));
// []
