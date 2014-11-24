//Moves for the bishop
//Takes in current position on the board (a,b,c) and str to see if black or white
//White: 'b', Black: 'B'
function bishop(a,b,c,str)
{
	var directions = [[1,1,0],[1,0,1],[0,1,1],[1,-1,0],[1,0,-1],[0,1,-1]];
	var x, y, z;
	//Starting at its curent location, add each of the chosen vector
	//Break when hits edge of board, piece of same color, piece of different color
	//If piece of different color, then highlight that board as well
	//Then go in reverse direction of vector
	if (upper(str))//White bishop
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x += directions[i][0];
				y += directions[i][1];
				z += directions[i][2];
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x -= directions[i][0];
				y -= directions[i][1];
				z -= directions[i][2];
			}
		}
	}
	else//Black bishop
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x += directions[i][0];
				y += directions[i][1];
				z += directions[i][2];
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x -= directions[i][0];
				y -= directions[i][1];
				z -= directions[i][2];
			}
		}
	}
}

function rook(a,b,c,str)
{
	var directions = [[1,0,0],[0,1,0],[0,0,1]];
	var x, y, z;
	//Starting at its curent location, add each of the chosen vector
	//Break when hits edge of board, piece of same color, piece of different color
	//If piece of different color, then highlight that board as well
	//Then go in reverse direction of vector
	if (upper(str))//White rook
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x += directions[i][0];
				y += directions[i][1];
				z += directions[i][2];
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x -= directions[i][0];
				y -= directions[i][1];
				z -= directions[i][2];
			}
		}
	}
	else//Black rook
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x += directions[i][0];
				y += directions[i][1];
				z += directions[i][2];
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x -= directions[i][0];
				y -= directions[i][1];
				z -= directions[i][2];
			}
		}
	}
}

function unicorn(a,b,c,str)
{
	var directions = [[1,1,1],[1,1,-1],[-1,1,1],[-1,1,-1]];
	var x, y, z;
	//Starting at its curent location, add each of the chosen vector
	//Break when hits edge of board, piece of same color, piece of different color
	//If piece of different color, then highlight that board as well
	//Then go in reverse direction of vector
	if (upper(str))//White unicorn
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x += directions[i][0];
				y += directions[i][1];
				z += directions[i][2];
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x -= directions[i][0];
				y -= directions[i][1];
				z -= directions[i][2];
			}
		}
	}
	else//Black unicorn
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x += directions[i][0];
				y += directions[i][1];
				z += directions[i][2];
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x -= directions[i][0];
				y -= directions[i][1];
				z -= directions[i][2];
			}
		}
	}
}

function queen(a,b,c,str)
{
	var directions = [[1,1,0],[1,0,1],[0,1,1],[1,-1,0],[1,0,-1],[0,1,-1],[1,1,1],[1,1,-1],[-1,1,1],[-1,1,-1],[1,0,0],[0,1,0],[0,0,1]];
	var x, y, z;
	//Starting at its curent location, add each of the chosen vector
	//Break when hits edge of board, piece of same color, piece of different color
	//If piece of different color, then highlight that board as well
	//Then go in reverse direction of vector
	if (upper(str))//White queen
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x += directions[i][0];
				y += directions[i][1];
				z += directions[i][2];
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x -= directions[i][0];
				y -= directions[i][1];
				z -= directions[i][2];
			}
		}
	}
	else//Black queen
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x += directions[i][0];
				y += directions[i][1];
				z += directions[i][2];
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				x -= directions[i][0];
				y -= directions[i][1];
				z -= directions[i][2];
			}
		}
	}
}

function knight(a,b,c,str)
{
	var directions = [[2,1,0],[2,0,1],[0,2,1],[0,1,2],[1,0,2],[1,2,0],[-2,1,0],[-2,0,1],[0,-2,1],[0,1,-2],[1,0,-2],[1,-2,0]];
	var x, y, z;
	//Starting at its curent location, add each of the chosen vector
	//Break when hits edge of board, piece of same color, piece of different color
	//If piece of different color, then highlight that board as well
	//Then go in reverse direction of vector
	if (upper(str))//White knight
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				break;
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				break;
			}
		}
	}
	else//Black knight
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				break;
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				break;
			}
		}
	}
}

function king(a,b,c,str)
{
	var directions = [[1,0,0],[0,1,0],[0,0,1],[1,1,0],[1,0,1],[0,1,1],[1,1,1],[1,-1,0],[1,0,-1],[0,1,-1],[-1,1,1],[1,-1,1],[1,1,-1]];
	console.log(directions.length);
	var x, y, z;
	//Starting at its curent location, add each of the chosen vector
	//Break when hits edge of board, piece of same color, piece of different color
	//If piece of different color, then highlight that board as well
	//Then go in reverse direction of vector
	if (upper(str))//White king
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				break;
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]))
					break;
				if (lower(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				break;
			}
		}
	}
	else//Black king
	{
		for (var i = 0; i < directions.length; i++)
		{
			x = a+directions[i][0];
			y = b+directions[i][1];
			z = c+directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				break;
			}
			x = a-directions[i][0];
			y = b-directions[i][1];
			z = c-directions[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (lower(arr[x][y][z]))
					break;
				if (upper(arr[x][y][z]))
				{
					highl[x][y][z] = 1;//Highlight the region for possible movement
					break;
				}
				highl[x][y][z] = 1;//Highlight the region for possible movement
				break;
			}
		}
	}
}

function pawn(a,b,c,str)
{
	var wdirections = [[-1,0,0],[0,-1,0]];
	var bdirections = [[1,0,0],[0,1,0]];
	var wCapture = [[-1,0,-1],[-1,0,1],[0,-1,1],[0,-1,-1]];
	var bCapture = [[1,0,-1],[1,0,1],[0,1,1],[0,1,-1]];
	var x, y, z;
	//Starting at its curent location, add each of the chosen vector
	//Break when hits edge of board, piece of same color, piece of different color
	//If piece of different color, then highlight that board as well
	//Then go in reverse direction of vector
	if (upper(str))//White pawn
	{
		for (var i = 0; i < wdirections.length; i++)
		{
			x = a+wdirections[i][0];
			y = b+wdirections[i][1];
			z = c+wdirections[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]) || lower(arr[x][y][z]))//Can't capture using regular movement
					break;
				highl[x][y][z] = 1;//Highlight the region for possible movement
				break;
			}
		}
		for (var i = 0; i < wCapture.length; i++)
		{
			x = a+wCapture[i][0];
			y = b+wCapture[i][1];
			z = c+wCapture[i][2];
			if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
				continue;
			if (lower(arr[x][y][z]))
				highl[x][y][z] = 1;//Highlight the region for possible movement
		}
	}
	else//Black king
	{
		for (var i = 0; i < bdirections.length; i++)
		{
			x = a+bdirections[i][0];
			y = b+bdirections[i][1];
			z = c+bdirections[i][2];
			while (true)
			{
				if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
					break;
				if (upper(arr[x][y][z]) || lower(arr[x][y][z]))//Can't capture using regular movement
					break;
				highl[x][y][z] = 1;//Highlight the region for possible movement
				break;
			}
		}
		for (var i = 0; i < bCapture.length; i++)
		{
			x = a+bCapture[i][0];
			y = b+bCapture[i][1];
			z = c+bCapture[i][2];
			if (x > 4 || y > 4 || z > 4 || x < 0 || y < 0 || z < 0)
				continue;
			if (upper(arr[x][y][z]))
				highl[x][y][z] = 1;//Highlight the region for possible movement
		}
	}
}

function upper(str)
{
	if (str >= 'A' && str <= 'Z')
		return true;
	return false;
}

function lower(str)
{
	if (str >= 'a' && str <= 'z')
		return true;
	return false;
}

