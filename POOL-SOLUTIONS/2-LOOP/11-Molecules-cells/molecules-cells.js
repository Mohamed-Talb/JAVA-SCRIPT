const RNAmap = new Map([["G","C"],["C","G"],["T","A"],["A","U"]]);
const DNAmap = new Map([["C","G"],["G","C"],["A","T"],["U","A"]]);

function RNA(DNA)
{
    let RNA = "";
    let DnaLen = DNA.length;
    for (let i = 0; i < DnaLen; i++)
    {
        if (RNAmap.has(DNA[i]))
            RNA += RNAmap.get(DNA[i]);
        else 
            return NaN;
    } 
    return RNA;  
}

function DNA(RNA)
{
    let DNA = "";
    let RnaLen = RNA.length;
    for (let i = 0; i < RnaLen; i++)
    {
        if (DNAmap.has(RNA[i]))
            DNA += DNAmap.get(RNA[i]);
        else 
            return NaN;
    } 
    return DNA;
}

// // ----- RNA (DNA -> RNA) -----
// console.log(RNA("G"));// "C"
// console.log(RNA("C"));// "G"
// console.log(RNA("T"));// "A"
// console.log(RNA("A"));// "U"
// console.log(RNA("ATCG"));// "UAGC"
// console.log(RNA("GGTTCCAA"));// "CCAAGGUU"
// console.log(RNA(""));// ""

// // ----- DNA (RNA -> DNA) -----
// console.log(DNA("C"));// "G"
// console.log(DNA("G"));// "C"
// console.log(DNA("A"));// "T"
// console.log(DNA("U"));// "A"
// console.log(DNA("UAGC"));// "ATCG"
// console.log(DNA("CCAAGGUU"));// "GGTTCCAA"
// console.log(DNA(""));// ""

// // ----- Edge cases (choose your behavior) -----
// // If you decide invalid input returns NaN:
// console.log(RNA("atcg"));// NaN
// console.log(RNA("A T C G"));// NaN
// console.log(RNA("ATBX"));// NaN
// console.log(DNA("uაგc"));// NaN
// console.log(DNA("U T C G"));// NaN
// console.log(DNA("UABX"));// NaN
