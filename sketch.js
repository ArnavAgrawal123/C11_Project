var runner, road, edges, invisible_right, invisible_left, bomb, game_over, coin;

var runner_Animation, road_Animation, coin_Image, bomb_Image, energyDrink_Image, Power_Image, game_over_image, coin_Image;

function preload(){

  //pre-load images
  runner_Animation = loadAnimation("Runner-1.png","Runner-2.png");
  road_Animation = loadImage("path.png");
  bomb_Image = loadImage("bomb.png");
  game_over_image = loadImage("game_over_PNG58.png");
  coin_Image = loadImage("coin.png");
}

function setup(){
  createCanvas(400,400);

  //code for road
  road = createSprite(200, 200);
  road.addAnimation("path",road_Animation);
  road.scale = 1;

  //code for runner
  runner = createSprite(200, 300, 20, 50);
  runner.addAnimation("run",runner_Animation);
  runner.scale = 0.1;

  //code to make coin
  coin = createSprite(300, 50);
  coin.addAnimation("A_coin",coin_Image)
  coin.scale = 0.5;
  coin.velocityY = 3;

  //code for invisible wall
  invisible_right = createSprite(400, 300, 20, 100);
  invisible_right.visible = false;
  invisible_left = createSprite(0, 300, 20, 100);
  invisible_left.visible = false;

  //code to create bomb
  bomb = createSprite(100, 100);
  bomb.addAnimation("bomb",bomb_Image);
  bomb.scale = 0.09;
  bomb.velocityY = 3;

  //code to make game over 
  game_over = createSprite(200, 200);
  game_over.addAnimation("over", game_over_image);
  game_over.scale = 0.1;
  game_over.visible = false;

  //to apply function preload
  preload();
}

function draw() {

  background("black");


  //code to move background
  road.velocityY = 3;


    //Code to reset background
    if(road.y > 400){
      road.y = height/2;
    }

    if(bomb.y > 400){

      bomb.y = 100;
      bomb.x = 250;
  
    }

    if (coin.y > 400) {

      coin.y = 90;
      coin.x = 190;
      coin.visible = true;
      
    }

    if (runner.isTouching(bomb)) {
      game_over.visible = true;
      bomb.velocity = 0;
      road.velocity = 0;      
    }

    if (runner.isTouching(coin)) {
      coin.visible = false;
    }

    // code to make edges
    edges = createEdgeSprites();


    //code to make runner move using mouse cursor
    runner.x = World.mouseX;

    runner.collide(invisible_right);
    runner.collide(invisible_left);


    drawSprites();

}
