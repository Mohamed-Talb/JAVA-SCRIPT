function pyramid(str, depth) 
{
    let result = "";
    const baseWidth = (2 * depth - 1) * str.length;

    for (let i = 1; i <= depth; i++) 
    {
        const blocks = 2 * i - 1;
        const lineWidth = blocks * str.length;
        const spaces = (baseWidth - lineWidth) / 2;
        result += " ".repeat(spaces);
        result += str.repeat(blocks);
        if (i !== depth) result += "\n";
    }

    return result;
}
