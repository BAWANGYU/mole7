var str = "";
for (var i = 0;i < 16;i++) {
	str = str + "<div><img id='mole"+i+"' src='img/vendor_people00.png'/></div>";
}
main.innerHTML = str;

//获取所要用到的元素
var startbtn = document.querySelector(".startGame");
var timespan = document.querySelector(".time span");
var randomNum;
var score = 0;
var orClick = false;

var endGame=function(){
		var endImg = document.createElement("div");
		endImg.id = "endImg";
		endImg.innerHTML = '<img src="img/pop_score_bg.png" />'+
										'<h3>'+score+'分</h3>'+
										'<h2 id="again">再来一次</h2>';
		document.body.appendChild(endImg);
		
		document.querySelector("#again").onclick = function(){
			location.reload();
		}
	}

var startEvent = function(){
	startbtn.style.display = "none";
	var num = 10;
	
	var  clearTime = setInterval(function(){
		orClick = false;
		for (var i = 0;i < 16;i++) {
				document.querySelector("#mole"+ i).src ="img/vendor_people00.png";
		}
		timespan.innerHTML = num +"s";
		num--;
		if(num<0){
			clearInterval(clearTime);
			endGame();
		}
		
		randomNum = parseInt(Math.random()*16);
		document.querySelector("#mole"+randomNum).src = "img/vendor_hole01.png";
	
	},900);
	
	
	var clickMole = function(event){
		var str = "mole" + randomNum;
		if(event.target.id == str&&!orClick){
			event.target.src = "img/vendor_hole02.png";
			score+=100;
			orClick = true;
		}
	}
	
	main.addEventListener("click",clickMole);
}

startbtn.addEventListener("click",startEvent);
			
			
			
