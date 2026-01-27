function triangle(str, Depth)
{
    let triang = "";
    for (let i = 1; i <= Depth; i++)
    {
        for (let j = 0; j < i; j++)
            triang += str
        if (i != Depth)
            triang += "\n"; 
    }
    return triang;
}   

// triangle("*", 5);
triangle('#', 4)