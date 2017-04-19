console.log('hello');

var gridTopLeftX = 50;
var gridTopLeftY = 15;

var squareSize = 80;
var gridSize = 5;

var pageCenter = new Point(view.center.x, view.center.y);
var gridTopLeft  = new Point(gridTopLeftX, gridTopLeftY);

function gridBuilder(scale, size){
  
  renderMainFrame(scale*size);
  renderGrid(size);
}

function renderMainFrame(size){
  var rect = new Rectangle(gridTopLeft, size);
	var path = new Path.Rectangle(rect);
  path.strokeColor = 'black';
}

function renderGrid(size){
  var squarePointX = gridTopLeftX;
  var squarePointY = gridTopLeftY;
  var row = col = size;
  while(row > 0){
    renderRow(col, squarePointX, squarePointY);
    squarePointY += squareSize;
    row --;
  }
}

function renderRow(col, rowX, rowY){
  while(col > 0){
    var squarePoint  = new Point(rowX, rowY);
    console.log(squarePoint);
    var rect = new Rectangle(squarePoint, squareSize);
	  var path = new Path.Rectangle(rect);
    path.fillColor = 'white';
    path.strokeColor = '#808080';
    path.onClick = function(event) {
      this.fillColor = 'red';
    }
    rowX += squareSize;
    col --;
  }
}


gridBuilder(squareSize, gridSize);





/*
** rules:
** Any live cell with fewer than two live neighbours dies, as if caused by under-population.
** Any live cell with two or three live neighbours lives on to the next generation.
** Any live cell with more than three live neighbours dies, as if by over-population.
** Any dead cell with exactly three live neighbours becomes a live cell, as if by reproduction.
**


if (worldGrid == undefined){
  var worldGrid = [];
}
var worldSize = 40;

var scale = 15;
var sizeScale = worldSize * scale;

var size = new Size(sizeScale);
var pageCenter = new Point(view.center.x, view.center.y); 

var mainFrame = new Rectangle(size);
var path2 = new Path.Rectangle(mainFrame);
path2.strokeColor = 'black';
path2.position = pageCenter;
var mainPoint = new Point(path2.bounds.topLeft);
// console.log(pageCenter);


function seedTheWorld(){
	for(j = 0; j < worldSize; j++){
		worldGrid.push(getRow(j));
	}
}

function getRandomeSeed(currenctRow, currenctCol){
	var num = Math.random() * -2 + 2;
	num = num > 1;
	var cell = {path: getPath(num, currenctRow, currenctCol), state: num};
	return cell;
}

function getRow(currenctRow){
	var row = new Array();
	for (i = 0; i < worldSize;i++){
		row.push(getRandomeSeed(currenctRow, i));
	}
	return row;
}

function getPath(state, currenctRow, currenctCol){
	var size = new Size(scale); 
	var point = new Point(mainPoint);
	point.x += currenctRow * scale;
	point.y += currenctCol * scale;
	var rect = new Rectangle(point, size);
	var path = new Path.Rectangle(rect);
	path.strokeColor = 'black';
	// path.bounds.topLeft = mainFrameTopLeftPoint;
	return path;
}

function circleOneTurn(){
	var i = 0;
	var j = 0;
	while(i < worldSize){
		while(j < worldSize){
			var currenctCellState = whatIsTheStateOfCell(i,j);
			if (currenctCellState < 2 || currenctCellState > 3) {
				worldGrid[i][j].state = false;		
			}

			if (worldGrid[i][j].state == false && currenctCellState == 3){
				worldGrid[i][j].state = true;
			}
		    
		    // console.log(worldGrid[i][j].path);

			j++;
		}
		j = 0;
		i++;
	}	
}



seedTheWorld();

function whatIsTheStateOfCell(x, y){
	aliveNeighbor = 0;
	currentNeighborX = setRow(x);
	currentNeighborY = setRow(y);
	maxX = setMax(x);
	maxY = setMax(y);
	// Bascially check all srounding!
	for (ix = 0; ix < maxX; ix++){
		if (currentNeighborX < worldSize){
			for (iy = 0; iy < maxY; iy++){
				var cell = worldGrid[currentNeighborX][currentNeighborY];
				if (cell != undefined && cell.state){
					aliveNeighbor++;
				}
				currentNeighborY++;
			}
			currentNeighborY = setRow(y);
			currentNeighborX++;
	 }
    }
    var cell = worldGrid[x][y];
	if (cell.state){
		// Shoudn't count itself
		aliveNeighbor--;
	}
	return aliveNeighbor;
 }

function setRow(val){
	if (val == 0){
		val = 0;
	} else {
		val = val - 1;
	}
	return val;
}

function setMax(val){
	if (val == 0 || val >= worldSize){
		val = 2;
	} else {
		val = 3;
	}
	return val;
}

whatIsTheStateOfCell(4,4);


function onMouseDown(event){
	//on mouse down
	console.log(worldGrid);
	console.log(whatIsTheStateOfCell(5,5));
}

function onFrame(event){

}


*/