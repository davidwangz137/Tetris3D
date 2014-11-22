//TODO

/*Create an encoding of the pieces into the 3D array

Create a function that takes a piece and the grid
outputs the possible positions to move
take into account the other pieces on the board
returns a 3d array with 1 as places it can go and 0 as places cannot go
*/
var arr = new Array();
		for (var i = 0; i < 5; i++)
		{
			arr[i] = new Array();
			for (var j = 0; j < 5; j++)
			{
				arr[i][j] = new Array();
				for (var k = 0; k < 5; k++)
				{
					arr[i][j][k] = 1;
				}
			}
		};
		
//possibleMoves String, Position, list of own Positions
//It will create a list of postions the piece can move and then compare list
// with the list of postions for the other pieces and return a list of positions where 
// there are no other pieces
// var kpos = [3] [0] [5];
// var qpos = [4] [0] [5];
//ie (PossibleMoves ("King", kpos, qpos));
possibleMoves (pieceName, piecePos, grid) {
	var newGrid = new Array();
	for (var i = 0; i < 5; i++)
	{
		newGrid[i] = new Array();
		for (var j = 0; j < 5; j++)
		{
			newGrid[i][j] = new Array();
			for (var k = 0; k < 5; k++)
				newGrid[i][j][k] = [0,0,0,0,0];
		}
	}
					
	
	if (pieceName.slice(1,5) == "King")
		kingMoves(pieceName, piecePos, grid, newGrid);
	
	else if (pieceName.slice(1,6) == "Queen")
		ueenMoves(pieceName, piecePos, grid, newGrid);
	
	else if (pieceName.slice(1,5) == "Rook")
		rookMoves(pieceName, piecePos, grid, newGrid);
	
	else if (pieceName.slice(1,7) == "Bishop")
		bishopMoves(pieceName, piecePos, grid, newGrid);
	
	else if (pieceName.slice(1,7) == "Knight")
		knightMoves(pieceName, piecePos, grid, newGrid);
	
	else if (pieceName.slice(1,8) == "Unicorn")
		unicornMoves(pieceName, piecePos, grid, newGrid);
	
	else if (pieceName.slice(1,5) == "Pawn")
		pawnMoves(pieceName, piecePos, grid, newGrid);
	
}

	























