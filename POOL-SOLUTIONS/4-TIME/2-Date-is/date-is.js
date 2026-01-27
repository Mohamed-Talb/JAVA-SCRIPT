function isValid(date)
{
    return date instanceof Date && !isNaN(date.getTime())
}

function isAfter(date, cmpDate)
{
    return isValid(date) && isValid(cmpDate) && date > cmpDate;
}
function isBefore(date, cmpDate)
{
    return isValid(date) && isValid(cmpDate) && date < cmpDate;
}
function isFuter(date)
{
    const now = new Date();
    return isValid(date) && date > now; 
}
function isPast(date)
{
    const now = new Date();
    return isValid(date) && date < now; 
}

console.log("isValid")
console.log(isValid(new Date()));                   // valid → current date produces a valid timestamp
console.log(isValid(new Date("2026-02-30")));      // valid → JS auto-normalizes "Feb 30" to a real date (e.g., March 1), so timestamp is valid
console.log(isValid(new Date("2024-02-29")));     // valid → 2024 is a leap year, Feb 29 exists, timestamp valid
console.log(isValid(new Date("")));              // invalid → empty string becomes "Invalid Date", timestamp is NaN
console.log(isValid(new Date("2026/01/10")));   // valid → non-ISO format but still parsed successfully in many JS engines, timestamp valid
console.log(isValid(new Date(1488370835081))); // valid → numeric timestamp in milliseconds since epoch, always valid when finite
console.log(isValid(new Date(NaN)));          // invalid → timestamp = NaN, resulting Date is "Invalid Date"

console.log("\nisAfter")
console.log(isAfter(new Date("2026-01-01"), new Date("2025-01-01"))); // true  (future > past)
console.log(isAfter(new Date("2025-01-01"), new Date("2026-01-01"))); // false (past > future is false)
console.log(isAfter(new Date("invalid"), new Date()));                 // false (invalid date → fail)

console.log("\nisBefore")
console.log(isBefore(new Date("2025-01-01"), new Date("2026-01-01"))); // true  (past < future)
console.log(isBefore(new Date("2026-01-01"), new Date("2025-01-01"))); // false (future < past is false)
console.log(isBefore(new Date("invalid"), new Date()));                // false (invalid date → fail)

console.log("\nisFuter") // (uses current time, "now")
console.log(isFuter(new Date(Date.now() + 5000)));   // true  (5s in the future)
console.log(isFuter(new Date(Date.now() - 5000)));   // false (5s in the past)
console.log(isFuter(new Date(NaN)));                 // false (invalid date → fail)

console.log("\nisPast") // (uses current time, "now")
console.log(isPast(new Date(Date.now() - 5000)));    // true  (5s in the past)
console.log(isPast(new Date(Date.now() + 5000)));    // false (5s in the future)
console.log(isPast(new Date("invalid")));            // false (invalid date → fail)
