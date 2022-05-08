lst = [];
ac = 0;
sta = 1;
t = 0;
playerY = 0;
function setup() {
	createCanvas(300, 800);
	background(250);
	for(let n = 40; n <= 700; n = n + random(60,100)){
		append(lst,n);
		ac = ac + 1;
	}
	for(let i=0; i<= ac; i = i+1) {
		platform(150,lst[i]);
	}
}

function platform(x,y){
	wide = random(300,400)/2;
	hight = random(20,30)/2;
	fill(random(100,255),random(0,200),random(100,255));
	noStroke();
	quad(x-wide,y+hight,x+wide,y+hight,x+wide,y-hight,x-wide,y-hight);
	
}

function game(){
	while(sta == 1){
		while(keyIsPressed === true){
			t = t + 1;
			sleep(600);
			role(playerY,t);
			if (t > 30){
				break;
			}
		}
		playerY = playerY +t;
		role(playerY,0);
		for(let i=0; i<= ac; i = i+1) {
			if(playerY != i){
				sta = 0;
			}
	}
		
	}
}

function role(playerY,t){
	fill(0);
	rect(150,playerY,10,35-t);
}

game();
