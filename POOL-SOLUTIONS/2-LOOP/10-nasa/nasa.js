function nasa(N)
{
    let str = "1 ";
    for(let i = 2; i <= N; i++)
    {
        if (i % 3 == 0 && i % 5 == 0)
            str += "NASA";
        else if (i % 3 == 0)
            str += "NA";
        else if (i % 5 == 0)
            str +=  "SA";
        else 
            str += i;
        if (i < N)
            str+= " "
    }
    return str;
}

// console.log(nasa(15));