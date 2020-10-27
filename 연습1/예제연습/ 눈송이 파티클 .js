let snowflackes = [];
//따로 호출하지읺아도 실행이 되는 함수
function setup(){
  createCanvas(400,600);// 가로 4000 세로 600 의 캠버스 생성
  fill(240); //전경색 셋팅fill(240) - 밝은 회색
  noStroke(); // 스트로크를 안하고 
}
//자동호출
function draw(){
  background('brown'); //배경색 
  let t = frameCount / 60 //시간 업데이트
  

  // 매 프레인마다 무작위 개수의 눈송이 생성
  for(let i =0;i<random(5);i++){
    snowflackes.push(new snowflackes())//눈송이 객체 
  }
  for(let flake of snowflakes){
    flake.update(t);
    flake.display();// 눈송이 그리기

  }
}
function snowflake(){//생성자 함수
  this.posX = 0;
  this.posY = random(-50 ,0); // -50에서 0까지의 숫자
  this.initalangle = random(0, 2*PI); //초기 각도 2*PI는 360도
  //0 도 부터 360도
  this.size = random(2,5); //눈송이의 크기가 2 - 5까지의 크기

  //방사형 눈송이의 반지름
  //눈송이를 화면에 고루 퍼뜨리기 위해 선택
  this.radius = sqrt(random(pow(width/ 2, 2)));
 //width 는 캔보스의 크기 , 눈송이 움직임의 크기 radius
  this.update = function(time){
    let w = 0.6; //각 속도 고정된 값
    let angle = w * time + this.initalangle;
    this.posX = width / 2 + this.radius * sin(angle);
    
    //크기가 다른 눈송이가 미묘하게 다른 y 속도로 떨어지는 속도
    this.posY += pow(this.size,0.5); // 눈송이의 제곱근 만큼 늘어남 /

    //화면 하단을 지나친 눈송이는 삭제 
    if(this.posY > height){
      let index = snowflackes.indexOf(this); //해당하는애를 가져와서 
      snowflackes.splice(index,1);// 해당하는에 제거
    }
  };
  this.display = function(){
    ellipse(this.posX,this.posY,this.size);
    //ellipse 타원형 그리는 메소드
  }
}