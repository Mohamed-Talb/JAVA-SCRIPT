function flow(funcsArr)
{
    return function(...args) 
    {
        let acc = funcsArr[0](...args);
        for (let i = 1; i < funcsArr.length; i++) 
        {
            acc = funcsArr[i](acc);
        }
        return acc;
    }
}


const square = (nbr) => nbr * nbr
const add2Numbers = (nbr1, nbr2) => nbr1 + nbr2

const flowedFunctions = flow([add2Numbers, square])
console.log(flowedFunctions(2, 3)) // -> 25