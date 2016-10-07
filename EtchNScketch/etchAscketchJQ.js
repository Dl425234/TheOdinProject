$(document).ready(function(){
	var divString= "<div class='square'></div>"
	var numSquares = 16;//initial number of squares
	
	//create all the squares
	function create(amount){
		var containerWidth = $("#container").width();//width of div holding all the squares
		var containerHeight = $("#container").height();// height of div holding all squares
	
		var squareWidth = containerWidth/(amount); //dimesions of each square
		var squareHeight = containerHeight/(amount); 

		for (var i = 0; i < amount*amount; i++) {
			$("#container").append(divString);
		}
		//set the dimension of the squares
		$(".square").css("width",squareWidth);
		$(".square").css("height",squareHeight);


	//handle mouse over
		$(".square").mouseover(function(){
			var clas = $(this).attr("class");
			if(clas == "square"){
				$(this).attr("class","squarePass");
				var color = $(this).css("background-color");
				color = '#'+ ('000000' + Math.floor(Math.random()*16777215).toString(16)).slice(-6);
				$(this).css("background-color",color);
			}
			
		});

	}
	create(numSquares);
	
	//Reset button
	$("#clear").click(function(){
		var amount = prompt("Please enter the amount of squares", 0);
		$(".square").remove();
		$(".squarePass").remove();
		create(amount);
	});
		
	
});