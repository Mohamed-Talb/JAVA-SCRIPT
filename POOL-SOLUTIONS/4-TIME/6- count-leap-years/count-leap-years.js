function countLeapYears(date)
{
    let year = date.getFullYear();
    let count = 0;
    for (let i = 1; i <= year; i++)
    {
        if (i % 4 == 0 && (i % 100 !== 0 || i % 400 == 0))
            count++;
    }
    // if you need to avoid a loop you can calculat it using 
    // count = year/4 - year/100 + year/400
    return count;
}

const date = new Date("2026-01-01");
console.log(countLeapYears(date));