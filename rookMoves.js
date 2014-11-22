function rookMoves(posGrid, newGrid, rName, rPos) {
	
	var i = 0;
	
	//This variable tells the loops when stop checking a direction  
	
	var is_dir_not_done = true;
	
	//Checking for possible moves "in front" (relative to white) of the rook
	
	for (i = rPos[2] - 1; i >= 0 && is_dir_not_done; i--)
	{
		if (posGrid[rPos[0]][rPos[1]][i] = "0")
			newGrid[rPos[0]][rPos[1]][i] = 1;
		else
		{
			if (posGrid[rPos[0]][rPos[1]][i].charAt(0) != rName.charAt(0))
				newGrid[rPos[0]][rPos[1]][i] = 1;
			
			is_dir_not_done = false;
		}
	}
	
	//Checking for possible moves "behind" (relative to white) the rook
	
	is_dir_not_done = true;
	
	for (i = rPos[2] + 1; i < 5 && is_dir_not_done; i++)
	{
		if (posGrid[rPos[0]][rPos[1]][i] = "0")
			newGrid[rPos[0]][rPos[1]][i] = 1;
		else
		{
			if (posGrid[rPos[0]][rPos[1]][i].charAt(0) != rName.charAt(0))
				newGrid[rPos[0]][rPos[1]][i] = 1;
				
			is_dir_not_done = false;
		}
	}
	
	//Checking for possible moves "left" (relative to white) of the rook
	
	is_dir_not_done = true;
	
	for (i = rPos[0] - 1; i >= 0 && is_dir_not_done; i--)
	{
		if (posGrid[i][rPos[1]][rPos[2]] = "0")
			newGrid[i][rPos[1]][rPos[2]] = 1;
		else
		{
			if (posGrid[i][rPos[1]][rPos[2]].charAt(0) != rName.charAt(0))
				newGrid[i][rPos[1]][rPos[2]] = 1;
			
			is_dir_not_done = false;
		}
	}
	
	//Checking for possible moves "right" (relative to white) of the rook
	
	is_dir_not_done = true;
	
	for (i = rPos[0] + 1; i < 5 && is_dir_not_done; i++)
	{
		if (posGrid[i][rPos[1]][rPos[2]] = "0")
			newGrid[i][rPos[1]][rPos[2]] = 1;
		else
		{
			if (posGrid[i][rPos[1]][rPos[2]].charAt(0) != rName.charAt(0))
				newGrid[i][rPos[1]][rPos[2]] = 1;
				
			is_dir_not_done = false;
		}
	}
	
	//Checking for possible moves below the rook
	
	is_dir_not_done = true;
	
	for (i = rPos[0] - 1; i >= 0 && is_dir_not_done; i--)
	{
		if (posGrid[rPos[0]][i][rPos[2]] = "0")
			newGrid[rPos[0]][i][rPos[2]] = 1;
		else
		{
			if (posGrid[rPos[0]][rPos[1]][rPos[2]].charAt(0) != rName.charAt(0))
				newGrid[rPos[0]][i][rPos[2]] = 1;
			
			is_dir_not_done = false;
		}
	}
	
	//Checking for possible moves above the rook
	
	is_dir_not_done = true;
	
	for (i = rPos[0] + 1; i < 5 && is_dir_not_done; i++)
	{
		if (posGrid[rPos[0]][i][rPos[2]] = "0")
			newGrid[rPos[0]][i][rPos[2]] = 1;
		else
		{
			if (posGrid[rPos[0]][i][rPos[2]].charAt(0) != rName.charAt(0))
				newGrid[rPos[0]][i][rPos[2]] = 1;
				
			is_dir_not_done = false;
		}
	}
	
}