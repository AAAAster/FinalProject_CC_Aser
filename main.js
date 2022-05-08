locY = [];
playY = 680;

function setup() {
	createCanvas(300, 700);
	background(250);
	creatMap();	//生成地图,locY储存了每个地图点上的Y值
	print('setup finish');
	print(locY);
}


function creatMap(){
	//生成随机Y地址
	for(let poss = 650; poss >= 0 ; poss -= random(45,60) ){
		append(locY, poss);	//生成坐标点，储存在locY中
		drawPlatform(random(100,200),poss);//绘制地图
		}
	textSize(10);
	text('you start here➡️', 30, 690);
		
}
function drawPlatform(x,y){
	wide = random(200,300)/2;
	hight = random(15,20)/2;
	fill(random(100,255),random(0,200),random(100,255));
	noStroke();
	quad(x-wide,y+hight,x+wide,y+hight,x+wide,y-hight,x-wide,y-hight);
}


function draw(){
	fill(255, 204, 0);
	game();
}
function game(){
	circle(150, playY, 25);	//x,y,w 显示角色位置
}


