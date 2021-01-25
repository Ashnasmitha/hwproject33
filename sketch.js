var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particle;
var plinkos = [];
var divisions =[];
var divisionHeight=300;
var score =0;
var count=0;
var gameState="start";
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;


  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 60; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));
    }

    for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 60; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 30; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }



    
}
 

function draw() {
  background("black");

  textSize(20)
  fill("white");
  text("Score : "+score,20,30);
  Engine.update(engine);

  ground.display();

   for (var i = 0; i < plinkos.length; i++) {
    
     plinkos[i].display();
     
   }
 
   for (var k = 0; k < divisions.length; k++) {

     fill("white");
     divisions[k].display();

   }

   fill("white");
   for(var a=50;a<=320;a=a+80){
     text("500",a,550,50,50)
   }
   for(var b=365;b<=560;b=b+80){
    text("100",b,550,50,50)
  }
  for(var c=610;c<=800;c=c+80){
    text("200",c,550,50,50)
  }


   if(particle!=null){

     particle.display();

    if(particle.body.position.y>760){

      if(particle.body.position.x<320){
        score=score+500;
        particle=null;
        if(count>=5){
          gameState="end";
        }
      }
      else if(particle.body.position.x>320 && particle.body.position.x<560){
        score=score+100;
        particle=null;
        if(count>=5){
          gameState="end";
        }
      }
      else if(particle.body.position.x<560){
        score=score+200;
        particle=null;
        if(count>=5){
          gameState="end";
        }
      }

     }
   }
   
   if(gameState=="end"){
    textSize(50);
    fill("yellow");
    text("GAMEOVER",250,450);

  }

}

function mousePressed(){
  if(gameState !=="end"){
    count++;
  particle=new Particle(mouseX,10,10,10);

  }
}

