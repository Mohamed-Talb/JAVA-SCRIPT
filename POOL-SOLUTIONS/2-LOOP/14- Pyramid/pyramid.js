// function pyramid(str, Depth)
// {
//     let tmp;
//     let pyramidBase = (Depth * 2) - 1;
//     let lineBlocks = 1;
//     let Spaces;
//     for (let i = 1; i <= Depth; i++)
//     {   
//         Spaces = (pyramidBase - lineBlocks) / 2; 
//         for(let l = 0; l < Spaces; l++)
//             process.stdout.write("-"); 
//         for (let j = 0; j < lineBlocks; j++)
//         {
//             process.stdout.write(str);
//         }
//         lineBlocks += 2;
//         for(let r = 0; r < Spaces; r++)
//             process.stdout.write("-"); 
//         if (i != Depth)
//            process.stdout.write("\n"); 
//     }
// }

function pyramid(str, Depth)
{
    if (typeof str !== "string" || str.length == 0)
        return NaN;
    if (!Number.isInteger(Depth) || Depth <= 0)
        return NaN;
    let pyramidBase = (Depth * 2) - 1;
    let lineBlocks = 1;
    let out = "";
    for (let i = 1; i <= Depth; i++)
    {   
        const NSpaces = (pyramidBase - lineBlocks) / 2; 
        out += " ".repeat(NSpaces);
        out += str.repeat(lineBlocks);
        out += " ".repeat(NSpaces);
        if (i != Depth) out += "\n";
        lineBlocks +=  2 
    }
    console.log(out);
    return out;
}

pyramid("*", 6);