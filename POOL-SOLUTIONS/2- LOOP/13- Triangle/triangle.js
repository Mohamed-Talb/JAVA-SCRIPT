function triangle(str, Depth)
{
    let tmp; 
    for (let i = 1; i <= Depth; i++)
    {
        for (let j = 0; j < i; j++)
        {
            process.stdout.write(str);
        }
        if (i != Depth)
           process.stdout.write("\n"); 
    }
}

triangle("*", 5);