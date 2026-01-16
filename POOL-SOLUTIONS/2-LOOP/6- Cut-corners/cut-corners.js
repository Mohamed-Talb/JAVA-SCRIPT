function trunc(Nb)
{
    let step = 1;
    if (Object.is(Nb, 0)) {return 0};
    if (Object.is(Nb, -0)) {return -0};
    if (Nb < 0)
        step = -1;
    if (Nb == Infinity || Nb == -Infinity)
        return Infinity * step;
    let i = 0;
    if (step == 1)
    {
        while (i <= Nb) {i += step;};
    }
    if (step == -1)
    {
        while (i >= Nb) {i += step;};
        if ((i - step) == 0)
            return -0;
    }
    return (i - step);
}

function ceil(Nb)
{
    let res = trunc(Nb);
    if (Object.is(res, -0))
        return -0;
    if (res == Nb || res < 0)
        return res;
    return res + 1;
}

function floor(Nb)
{
    let res = trunc(Nb);
    if (Object.is(res, -0))
        return -0;
    if (res == 0)
        return 0;
    if (res == Nb || res > 0)
        return res;
    return res - 1;
}


function round(Nb)
{
    let res = trunc(Nb);
    if (Object.is(res, -0))
        return -0;
    let fraction = Nb - res;
    if (Nb < 0)
    {
        if (fraction >= -0.5)
            return res;
        else 
            return res - 1;
    }
    else 
    {
        if (fraction < 0.5)
            return res;
        else
            return res + 1;     
    }
}



console.log(trunc(-Infinity)); // -Infinity
console.log(trunc("-1.123")); // -1
console.log(trunc(-0.123)); // -0
console.log(trunc(-0)); // -0
console.log(trunc(0)); // 0
console.log(trunc(0.123)); // 0
console.log(trunc(13.37)); // 13
console.log(trunc(42.84)); // 42
console.log(trunc(Infinity)); // Infinity


console.log(ceil(-Infinity)); // -Infinity
console.log(ceil(-7.004)); // -7
console.log(ceil(-4)); // -4
console.log(ceil(-0.95)); // -0
console.log(ceil(-0)); // -0
console.log(ceil(0)); // 0
console.log(ceil(0.95)); // 1
console.log(ceil(4)); // 4
console.log(ceil(7.004)); // 8
console.log(ceil(Infinity)); // Infinity


console.log(floor(-Infinity)); // -Infinity
console.log(floor(-45.95)); // -46
console.log(floor(-45.05)); // -46
console.log(floor(-0)); // -0
console.log(floor(-0.1337)); // -0
console.log(floor(0)); // 0
console.log(floor(0.555)); // 0
console.log(floor(4)); // 4
console.log(floor(45.05)); // 45
console.log(floor(45.95)); // 45
console.log(floor(Infinity)); // Infinity


console.log(round(-Infinity)); // -Infinity
console.log(round(-20.51)); // -21
console.log(round(-20.5)); // -20
console.log(round(-0.1)); // -0
console.log(round(0)); // 0
console.log(round(20.49)); // 20
console.log(round(20.5)); // 21
console.log(round(42)); // 42
console.log(round(Infinity)); // Infinity


Math.round = Math.ceil = Math.floor = Math.trunc = undefined