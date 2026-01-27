function get(src, path)
{
    if (Object.keys(src).length === 0 || path === "" || !src)
        return undefined;
    const Props = path.split(".");
    const PropLen = Props.length;
    let PValue = src;
    for (let i = 0; i < PropLen; i++)
    {
        if (PValue == null) return undefined;
        PValue = PValue[Props[i]];
    }
    return PValue;
}

// const src = {
//   user: {
//     name: "Mohamed",
//     address: {
//       city: "Casablanca",
//       zip: 20000,
//     },
//     hobbies: ["code", "music", "sports"],
//   },
//   active: true,
//   scores: [10, 20, { math: 18 }],
// };

// // Basic
// console.log(get(src, "active"));// true
// console.log(get(src, "user.name"));// "Mohamed"
// console.log(get(src, "user.address.city"));// "Casablanca"
// console.log(get(src, "user.address.zip"));// 20000

// // Arrays in path (common style)
// console.log(get(src, "user.hobbies.0"));// "code"
// console.log(get(src, "scores.1"));// 20
// console.log(get(src, "scores.2.math"));// 18

// // Missing path (choose your behavior)
// // If you decide missing returns undefined:
// console.log(get(src, "user.age"));// undefined
// console.log(get(src, "user.address.country"));// undefined
// console.log(get(src, "scores.3"));// undefined
// console.log(get(src, "scores.2.english"));// undefined

// // Edge cases
// console.log(get(src, ""));// src   (or undefined, depending on your rule)
// console.log(get({}, "a.b.c"));// undefined
