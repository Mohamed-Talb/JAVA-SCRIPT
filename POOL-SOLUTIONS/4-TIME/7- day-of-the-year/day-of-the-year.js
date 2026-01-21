const yearMap = new Map([
    ["0", 31],
    ["1", 28],
    ["2", 31],
    ["3", 30],
    ["4", 31],
    ["5", 30],
    ["6", 31],
    ["7", 31],
    ["8", 30],
    ["9", 31],
    ["10", 30],
    ["11", 31]])

const isLeapYear = (year) => (year % 4 == 0 && (year % 100 !== 0 || year % 400 == 0));

function dayOfTheYear(date)
{
    if (!(date instanceof Date) || isNaN(date.getTime()))
        return NaN;
    const monthIndex = date.getMonth();
    let daysCount = date.getDate();
    let year = date.getFullYear();
    for (let i = 0; i < monthIndex; i++)
    {
        daysCount += yearMap.get(String(i));
    }
    if (isLeapYear(year) && monthIndex >= 1)
        daysCount++;
    return daysCount;
}

console.log(dayOfTheYear(new Date("2026-01-01"))) // → 1
console.log(dayOfTheYear(new Date("2026-02-01"))) // → 32
console.log(dayOfTheYear(new Date("2026-12-31"))) // → 365
console.log(dayOfTheYear(new Date("2024-03-01"))) // → 61
console.log(dayOfTheYear(new Date("2024-12-31"))) // → 366
console.log(dayOfTheYear(new Date("invalid"))) // → NaN