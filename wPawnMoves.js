function wPawnMoves(posGrid, newGrid, wpPos) {

	//Checking each face of the grid to set boundaries for the piece
	//White only needs upper boundaries since white cannot move down
	
	var is_up_able = true;
	var is_fwd_able = true;
	var is_x_able = 0; //This check should be set to -1, 0, 1 

	//Setting all boundaries for how the pawn can move
	
	if (wpPos[2] + 1 >= 5)
		is_fwd_able = false;
	
	if (wpPos[1] + 1 >= 5)
		is_up_able = false;
		
	if (wpPos[0] - 1 < 0)
		is_x_able = -1; //Pawn cannot move left on x axis
	else if (wpPos[0] + 1 >= 5)
		is_x_able = 1; //Pawn cannot move right on x axis
		
	//Checking for possible locations on the plane
	
	if (is_fwd_able)
	{
		if (posGrid[wpPos[0]][wpPos[1]][wpPos[2] + 1] = "0")
			newGrid[wpPos[0]][wpPos[1]][wpPos[2] + 1] = 1;
			
		if (is_x_able > 0)
			if (posGrid[wpPos[0] - 1][wpPos[1]][wpPos[2] + 1].charAt(0) = 'b')
				newGrid[wpPos[0] - 1][wpPos[1]][wpPos[2] + 1] = 1;
		
		if (is_x_able < 0)
			if (posGrid[wpPos[0] + 1][wpPos[1]][wpPos[2] + 1].charAt(0) = 'b')
				newGrid[wpPos[0] + 1][wpPos[1]][wpPos[2] + 1] = 1;
	}
	
	//Checking for possible locations above the plane
	
	if (is_up_able)
	{
		if (posGrid[wpPos[0]][wpPos[1] + 1][wpPos[2]] = "0")
			newGrid[wpPos[0]][wpPos[1] + 1][wpPos[2]] = 1;
		
		if (is_fwd_able)
		{
			if (is_x_able > 0)
				if (posGrid[wpPos[0] - 1][wpPos[1] + 1][wpPos[2]].charAt(0) = 'b')
					newGrid[wpPos[0] - 1][wpPos[1] + 1][wpPos[2]] = 1;
			
			if (is_x_able < 0)
				if (posGrid[wpPos[0] + 1][wpPos[1] + 1][wpPos[2]].charAt(0) = 'b')
					newGrid[wpPos[0] + 1][wpPos[1] + 1][wpPos[2]] = 1;
		}
	}
	
}