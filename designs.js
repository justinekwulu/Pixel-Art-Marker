// Select color input
// Select size input

// When size is submitted by the user, call makeGrid()

var table = document.getElementById("pixelCanvas");
var gridHeight = document.getElementById("inputHeight");
var gridWidth = document.getElementById("inputWeight");
var colorPicker = document.getElementById("colorPicker");
var color = colorPicker.value;

function makeGrid() {
	
	clearTable();

	var x = gridWidth.value;
	var y = gridHeight.value;

	for(i=0; i<y; i++){
		var tr = document.createElement("tr");
		for(j=0; j<x; j++){
			var td = document.createElement("td");
			td.addEventListener("click",colorColumn);
			tr.appendChild(td);
		}
		table.appendChild(tr);
	}
}

function getColor(){
	color = colorPicker.value;
}

function colorColumn(evt){

	var td = evt.target;
	
	if(td.style.backgroundColor.length == 0){
		td.style.backgroundColor = color;
	}else{
		td.style.backgroundColor = "";
	}
	console.log(color);
}

function clearTable(){

	while(table.firstChild){
		table.removeChild(table.firstChild);
	}
}
