//finds the value of bottom right 
//corner of a ring with given depth
function calcBR(depth)
{
    return 4 * depth ** 2 - 2 * depth;
}

//finds the value of upper right 
//corner of a ring with given depth
function calcUR(depth)
{
    b = 0.5 + 2 * depth;
    if(b < 0)
        return 4 * depth ** 2;
    else	
        return 4 * depth ** 2 + 2 * b;
}	

//finds the value of upper left 
//corner of a ring with given depth
function calcUL(depth)
{
    return 4 * depth ** 2 + 2 * depth;
}

//finds the value of bottom left 
//corner of a ring with given depth
function calcBL(depth)
{
    b = 0.5 - 2 * depth;
    if(b < 0)
		return 4 * depth ** 2;
    else
        return 4 * depth ** 2 + 2 * b;
}

//calculates coordinate position of 
//a given value in the grid spiral
function calcPos(value)
{
	i = 0; //depth of the ring, or distance from the center
	if(value > 1)
		i = Math.floor((1 + Math.sqrt(1 + 4 * value)) / 4) - 1;
	
	ul = calcUL(i + 1); //upper left corner of given depth
	if(value > ul) 
		i += 1;
	
	ul  = calcUL(i);
    ur  = calcUR(i);
    br  = calcBR(i + 1);
    bl  = calcBL(i + 1);
    ul2 = calcUL(i + 1);
	
	x = 0;
	y = 0;
	
	
	//This checks the 8 possible positions of the value 
	//and assigns coordinate position accordingly
	
	//upper left corner
	if(value == ul || value == ul2)
	{
        if(value == 0)
		{
            x = 0;
            y = 0;
		}
        else
		{
            x = -(i + 1);
            y =  (i + 1);
		}
	}
	//upper right corner
    else if(value == ur)
	{
        x = i + 1;
        y = i;
	}
	//bottom right corner
    else if(value == br)
	{
        x = i + 1;
        y = -(i + 1);
	}
	//bottom left corner
    else if(value == bl)
	{
        x = -i - 1;
        y = -(i + 1);
	}
	//top
    else if(value < ur)
	{
        x = value - ul - i;
        y = i;
	}
	//right
    else if(value < br)
	{
        x = i + 1;
        y = (br - value) - (i + 1);
	}
	//bottom
	else if(value < bl)
	{
        x = ((i + 1) - (value - br));
        y = -(i + 1);
	}
	//left
    else
	{
        x = -(i + 1);
        y = (i + 1) - (ul2 - value);
	}
    return {x, y};
}