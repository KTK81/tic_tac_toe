// 5 parts 





//anonymous function 
window.onload = function() {
	//1. Initial states 
	var num;
	var box;
	var ctx;
	var turn = 1;
	var filled;
	var symbol;
	var winner;
	var gameOver = false;
	filled = [false, false, false, false, false, false, false, false, false];
	symbol = ['', '', '', '', '', '', '', '', ''];
	winner = [[0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]];
	
	//2. NewGame - event + function 
	//Create a new game click event
	var n = document.getElementById("new");
	n.addEventListener("click", newGame);
	
	//newGame function
	function newGame() {
		document.location.reload();
	}
	
	//3. Canvas click + retrieving the box's number 
	//canvas click event 
	document.getElementById("tic").addEventListener("click", function(e) {
		boxClick(e.target.id);
	});
	
//	function boxClick(numId) {
//		box = document.getElementById(numId);
//		ctx = box.getContext("2d");
//		
//		switch(numId) {
//			case "canvas1": num = 1;
//						    break;
//			case "canvas2": num = 2;
//							break;
//			case "canvas3": num = 3;
//							break;
//			case "canvas4": num = 4;
//							break;
//			case "canvas5": num = 5;
//							break;
//			case "canvas6": num = 6;
//							break;
//			case "canvas7": num = 7;
//							break;
//			case "canvas8": num = 8;
//							break;
//			case "canvas9": num = 9;
//							break;
//		}
//		//Drawing the shapes on the canvases 
//
//		else {
//			alert("This box was already filled. Please click on another one.")
//		}
//	}
}
