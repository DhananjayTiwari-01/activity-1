

function setup() {
  createCanvas(800,400);
  
  fixedRect = createSprite(200, 200, 50, 80);
  fixedRect.shapeColor = "green" 
   movingRect = createSprite(400,200,80,80) 
   movingRect.shapeColor = "green"
   

   object1 = createSprite(200, 50, 50, 80);
   object2 = createSprite(100, 80, 50, 80);
   object3 = createSprite(300, 100, 50, 80);
   object4 = createSprite(40, 400, 50, 80);
   
   object1.shapeColor = "green"
   object2.shapeColor = "green"
   object3.shapeColor = "green"
   object4.shapeColor = "green"

   
}

function draw(){
  
  background(255,255,255); 
  if(isTouching()){

  fixedRect.shapeColor = "red" 
  movingRect.shapeColor = "red" 



}

else{
  fixedRect.shapeColor = "green" 
  movingRect.shapeColor = "green" 

}

      drawSprites(); 
    
    }


function isTouching(){

  
 if(object1.x - object2.x < object2.width/2 + object1.width/2 && object2.x - object1.x < object2.width/2 + object1.width/2 && object1.y - object2.y < object2.height/2 + object1.height/2 && object2.y - object1.y < object2.height/2 + object1.height/2){     

    return true
  }

  else{

    return false

  }

 

}