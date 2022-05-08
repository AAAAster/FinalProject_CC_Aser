locY = [];
randX = [];
randH = [];
pressure =0;
playY = 650;
playsat = 1;

function setup() {
	createCanvas(300, 700);
	background(250);
	//-------
	for (let i = 1;i <= 11; i++){
		append(locY,660 - random(50,60)*i);	//Y的位置
		append(randX,random(50,150));		//方块的x
		append(randH,random(6,15));		//方块的高度
	}
	
	//print(locY);	// 在地图中Y的不同位置
	//print(randX);	// 在地图中W的不同宽度
	//print(randH);	// 在地图中W的不同高度
	
	//--

	
}

//------
function mymap(x, h, y){
	for(let i=0;i<=10;i++){
		noStroke();
		fill(0,0,0);
		quad(x[i]-80,y[i]-h[i],x[i]+80,y[i]-h[i],x[i]+80,y[i]+h[i],x[i]-80,y[i]+h[i]);
	}
}
//--

function game(){
	if (keyIsPressed){
		pressure += 1/2;
		print(pressure);
		if (pressure > 40){
			playY -= pressure;
			circle(150, playY, 25-pressure/5);// 释放
			pressure = 0;
				print('把手拿开');
		}
		//动画
		circle(150, playY, 25-pressure/8);
	}else{
		
		playY -= pressure;
		circle(150, playY, 25-pressure/5);//释放
		pressure = 0;
	}
	
}

function jug(playY,locY){
	for(let j=0;j<=10;j++){
		if (locY[j]-10 < playY && playY< locY[j]+10){
			playsat = 0;
		}
	}
}


function draw(){
	background(250);
	mymap(randX,randH,locY);
	textSize(10);
	text('you start here➡️', 30, 690);
	fill(91,66,200);
	game();
	
	jug(playY,locY);
	if(playsat == 0){
		createCanvas(300, 700);
		background(250);
		textSize(50);
		fill(0, 102, 153, 51)
		text('You lose', 0, 300);
		}
}


	
