function bPawnMoves(posGrid, newGrid, bpPos) {

	//Checking each face of the grid to set boundaries for the piece
	//Black only needs lower boundaries since black cannot move up
	
	var is_down_able = true;
	var is_fwd_able = true;
	var is_x_able = 0; //This check should be set to -1, 0, 1 

	//Setting all boundaries for how the pawn can move
	
	if (bpPos[2] - 1 < 0)
		is_fwd_able = false;
	
	if (bpPos[1] - 1 < 0)
		is_down_able = false;
		
	if (bpPos[0] - 1 < 0)
		is_x_able = -1; //Pawn cannot move right on x axis
	else if (bpPos[0] + 1 >= 5)
		is_x_able = 1; //Pawn cannot move left on x axis
		
	//Checking for possible locations on the plane
	
	if (is_fwd_able)
	{
		if (posGrid[bpPos[0]][bpPos[1]][bpPos[2] - 1] = "0")
			newGrid[bpPos[0]][bpPos[1]][bpPos[2] - 1] = 1;
			
		if (is_x_able > 0)
			if (posGrid[bpPos[0] - 1][bpPos[1]][bpPos[2] - 1].charAt(0) = 'w')
				newGrid[bpPos[0] - 1][bpPos[1]][bpPos[2] - 1] = 1;
		
		if (is_x_able < 0)
			if (posGrid[bpPos[0] + 1][bpPos[1]][bpPos[2] - 1].charAt(0) = 'w')
				newGrid[bpPos[0] + 1][bpPos[1]][bpPos[2] - 1] = 1;
	}
	
	//Checking for possible locations below the plane
	
	if (is_down_able)
	{
		if (posGrid[bpPos[0]][bpPos[1] - 1][bpPos[2]] = "0")
			newGrid[bpPos[0]][bpPos[1] - 1][bpPos[2]] = 1;
		
		if (is_fwd_able)
		{
			if (is_x_able > 0)
				if (posGrid[bpPos[0] - 1][bpPos[1] - 1][bpPos[2]].charAt(0) = 'w')
					newGrid[bpPos[0] - 1][bpPos[1] - 1][bpPos[2]] = 1;
			
			if (is_x_able < 0)
				if (posGrid[bpPos[0] + 1][bpPos[1] - 1][bpPos[2]].charAt(0) = 'w')
					newGrid[bpPos[0] + 1][bpPos[1] - 1][bpPos[2]] = 1;
		}
	}
	
}


/*
//Creating the 3-D grid
	
	var grid = new Array();
	for (var i = 0; i < 5; i++)
	{
		grid[i] = new Array();
		for (var j = 0; j < 5; j++)
		{
			grid[i][j] = new Array();
			for (var k = 0; k < 5; k++)
				grid[i][j][k] = [0,0,0,0,0];
		}
	}
*/