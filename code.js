var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e9a4fc81-f391-4761-8265-16470629720f","bad13154-4bd3-4b32-af34-7777f38bfa14","dacf0796-1b4e-4ae6-8861-a505ee8384aa","ad03e227-13c6-440d-abde-388f7e53da96","97d502a6-01e7-4f77-8249-029f4b33da14","682159bb-19e8-4d06-b748-643ead3d1c93","b47a641f-e6ca-4c62-8f89-5dd8ef8fcc04","db644803-b1b6-4194-97f6-f6d39ca5e92d","024b0d50-f6a5-41c3-96b2-fedffe8845fb","85f64d2d-9dbf-4a58-8081-2b335cac0a0e","311bc4e2-c5b2-48fd-adca-526de9d8ced3","8e0d4c66-40aa-45ae-946a-a636dbb6d9f1","df8c9e82-f4c6-4f32-81e4-2e1ac10158db","cff35c9c-8d05-44f9-84b5-1a488c6e6787","356490d3-3475-4139-aa78-3a130d7adfb5"],"propsByKey":{"e9a4fc81-f391-4761-8265-16470629720f":{"name":"pastrychef","sourceUrl":null,"frameSize":{"x":100,"y":108},"frameCount":2,"looping":true,"frameDelay":12,"version":".R96Ip41hnmBqrDXnUGwp93zLX4_nwQy","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":216},"rootRelativePath":"assets/e9a4fc81-f391-4761-8265-16470629720f.png"},"bad13154-4bd3-4b32-af34-7777f38bfa14":{"name":"pastrychef end","sourceUrl":null,"frameSize":{"x":400,"y":432},"frameCount":1,"looping":true,"frameDelay":12,"version":"07KCgiVYlT7zfk1TUTkhplr8YZuutapN","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":432},"rootRelativePath":"assets/bad13154-4bd3-4b32-af34-7777f38bfa14.png"},"dacf0796-1b4e-4ae6-8861-a505ee8384aa":{"name":"life","sourceUrl":null,"frameSize":{"x":30,"y":29},"frameCount":2,"looping":true,"frameDelay":12,"version":"YOryVOaww4nRlyPrQPQi6dc9jbNUcqJw","loadedFromSource":true,"saved":true,"sourceSize":{"x":30,"y":58},"rootRelativePath":"assets/dacf0796-1b4e-4ae6-8861-a505ee8384aa.png"},"ad03e227-13c6-440d-abde-388f7e53da96":{"name":"sandymoo","sourceUrl":null,"frameSize":{"x":99,"y":89},"frameCount":2,"looping":true,"frameDelay":12,"version":"2fQVeRLJL5Me3cMa67o8dOrxsV._4D7C","loadedFromSource":true,"saved":true,"sourceSize":{"x":99,"y":178},"rootRelativePath":"assets/ad03e227-13c6-440d-abde-388f7e53da96.png"},"97d502a6-01e7-4f77-8249-029f4b33da14":{"name":"waterymoo","sourceUrl":null,"frameSize":{"x":100,"y":45},"frameCount":2,"looping":true,"frameDelay":12,"version":"8mNNqDUdw8mIGqlBkqIOhGW3uK.wt7wj","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":90},"rootRelativePath":"assets/97d502a6-01e7-4f77-8249-029f4b33da14.png"},"682159bb-19e8-4d06-b748-643ead3d1c93":{"name":"doggymoo","sourceUrl":null,"frameSize":{"x":100,"y":77},"frameCount":2,"looping":true,"frameDelay":12,"version":"FE.NokS2xFhM2lvK6g8K15hH9i3O6b1W","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":154},"rootRelativePath":"assets/682159bb-19e8-4d06-b748-643ead3d1c93.png"},"b47a641f-e6ca-4c62-8f89-5dd8ef8fcc04":{"name":"coconuttymoo","sourceUrl":null,"frameSize":{"x":100,"y":148},"frameCount":2,"looping":true,"frameDelay":12,"version":"zG891taatzKj0EYKAQVFJpuSmkeFOHaL","loadedFromSource":true,"saved":true,"sourceSize":{"x":200,"y":148},"rootRelativePath":"assets/b47a641f-e6ca-4c62-8f89-5dd8ef8fcc04.png"},"db644803-b1b6-4194-97f6-f6d39ca5e92d":{"name":"octymoo","sourceUrl":null,"frameSize":{"x":100,"y":92},"frameCount":2,"looping":true,"frameDelay":12,"version":"X5A_sAtylKXz.a.4pzpq63YioeylmfsR","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":184},"rootRelativePath":"assets/db644803-b1b6-4194-97f6-f6d39ca5e92d.png"},"024b0d50-f6a5-41c3-96b2-fedffe8845fb":{"name":"freddy","sourceUrl":null,"frameSize":{"x":28,"y":10},"frameCount":3,"looping":true,"frameDelay":10,"version":"N5nkt8OtefNpEPNGR5j6NeAIxpMUW.kd","loadedFromSource":true,"saved":true,"sourceSize":{"x":28,"y":30},"rootRelativePath":"assets/024b0d50-f6a5-41c3-96b2-fedffe8845fb.png"},"85f64d2d-9dbf-4a58-8081-2b335cac0a0e":{"name":"jake","sourceUrl":null,"frameSize":{"x":20,"y":10},"frameCount":2,"looping":true,"frameDelay":10,"version":"d3nqmGtPBRw8UPNLMR4W79_Nxh36MGFs","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/85f64d2d-9dbf-4a58-8081-2b335cac0a0e.png"},"311bc4e2-c5b2-48fd-adca-526de9d8ced3":{"name":"jack","sourceUrl":null,"frameSize":{"x":20,"y":10},"frameCount":2,"looping":true,"frameDelay":12,"version":"9LlVivU3KQWmEN_IybvfZzt9vjw.e25f","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/311bc4e2-c5b2-48fd-adca-526de9d8ced3.png"},"8e0d4c66-40aa-45ae-946a-a636dbb6d9f1":{"name":"john","sourceUrl":null,"frameSize":{"x":20,"y":10},"frameCount":2,"looping":true,"frameDelay":12,"version":"uwZWygJvMJBnGM6m2qEeV3JmR8WxlbSE","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/8e0d4c66-40aa-45ae-946a-a636dbb6d9f1.png"},"df8c9e82-f4c6-4f32-81e4-2e1ac10158db":{"name":"jane","sourceUrl":null,"frameSize":{"x":20,"y":10},"frameCount":2,"looping":true,"frameDelay":12,"version":"S5If3MZTw4mwkOb7k6nb7j9wUsmupqJl","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/df8c9e82-f4c6-4f32-81e4-2e1ac10158db.png"},"cff35c9c-8d05-44f9-84b5-1a488c6e6787":{"name":"jinn","sourceUrl":null,"frameSize":{"x":20,"y":10},"frameCount":2,"looping":true,"frameDelay":12,"version":"AdnawUUyjQ7zkl7k3pTDSrlLlSyu1PAr","loadedFromSource":true,"saved":true,"sourceSize":{"x":20,"y":20},"rootRelativePath":"assets/cff35c9c-8d05-44f9-84b5-1a488c6e6787.png"},"356490d3-3475-4139-aa78-3a130d7adfb5":{"name":"end scene","sourceUrl":null,"frameSize":{"x":400,"y":400},"frameCount":1,"looping":true,"frameDelay":12,"version":"3qOsOEsQX3szGbZgfqsUD18FHaDyvxdS","loadedFromSource":true,"saved":true,"sourceSize":{"x":400,"y":400},"rootRelativePath":"assets/356490d3-3475-4139-aa78-3a130d7adfb5.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

// Create your variables here
var wasButtonDown = false;
var inBossRoom = false;
var level = 1;
var lives = 3;
var sandHealth = 3;
var waterHealth = 5;
var bloodHealth = 7;
var coconutHealth = 10;
var bossHealth = 5;
var life1 = createSprite(125, 15, 10, 10);
var life2 = createSprite(175, 15, 10, 10);
var life3 = createSprite(225, 15, 10, 10);
var player = createSprite(50, 310);
player.depth = 10;
var sandEnemyZap = createSprite(325, 320);
var waterEnemyZap = createSprite(325, 320);
var bloodEnemyZap = createSprite(325, 320);
var coconutEnemyZap = createSprite(325, 320);
var thunderEnemyZap = createSprite(325, 320);
var playerAttack = createSprite((player.x + 30), (player.y - 25));
var sandRoomEnemy = createSprite(5000, 310);
sandRoomEnemy.depth = 5;
var waterRoomEnemy = createSprite(5000, 310);
waterRoomEnemy.depth = 5;
var bloodRoomEnemy = createSprite(5000, 310);
bloodRoomEnemy.depth = 5;
var coconutRoomEnemy = createSprite(5000, 310);
coconutRoomEnemy.depth = 5;
var thunderDomeEnemy = createSprite(5000, 310);
thunderDomeEnemy.depth = 5;
var endScene = createSprite(50000, 50000);
endScene.depth = 1;
//Assign sprites
life1.setAnimation("life");
life2.setAnimation("life");
life3.setAnimation("life");
sandEnemyZap.setAnimation("jake");
waterEnemyZap.setAnimation("jack");
bloodEnemyZap.setAnimation("john");
coconutEnemyZap.setAnimation("jane");
thunderEnemyZap.setAnimation("jinn");
player.setAnimation("pastrychef");
playerAttack.setAnimation("freddy");
sandRoomEnemy.setAnimation("sandymoo");
waterRoomEnemy.setAnimation("waterymoo");
bloodRoomEnemy.setAnimation("doggymoo");
coconutRoomEnemy.setAnimation("coconuttymoo");
thunderDomeEnemy.setAnimation("octymoo");
endScene.setAnimation("end scene");

function draw() {
  showMobileControls(true, true, true, true);
  if(keyWentDown("space")){
    wasButtonDown = true;
  }
  if(wasButtonDown === true){
    // draw background

    if(sandHealth > 0){
      sandRoom();
      sandDeath();
      sandEnemyAttack();
    }
    if(waterHealth > 0 && sandHealth <= 0){
      waterRoom();
      waterDeath();
      waterEnemyAttack();
    }
    if(bloodHealth > 0 && waterHealth <= 0 && sandHealth <= 0){
      bloodRoom();
      bloodDeath();
      bloodEnemyAttack();
    }
    if(coconutHealth > 0 && bloodHealth <= 0 && waterHealth <= 0 && sandHealth <= 0){
      coconutRoom();
      coconutDeath();
      coconutEnemyAttack();
    }
    if(bossHealth > 0 && coconutHealth <= 0 && bloodHealth <= 0 && waterHealth <= 0 && sandHealth <= 0){
      thunderDome();
      thunderDeath();
      thunderEnemyAttack();
    }
    if(bossHealth <= 0 && coconutHealth <= 0 && bloodHealth <= 0 && waterHealth <= 0 && sandHealth <= 0){
      win();
    }
    // update sprytz
    displayThings();
    drawSprites();
    life();
    if(inBossRoom === false){
      movePlayerNonBossRoom();
    } else if(inBossRoom === true){
      movePlayerBossRoom();
    }
    bulletStuff();
    wasHit();
    playerDie();
    } else {
    start();
  }
}

// Create your functions here
function start(){
  background("lightgreen");
  fill("red");
  textSize(48);
  text("BOAIFRED", 45, 75);
  textSize(24);
  text("A game by Me", 45, 125);
  text("Use the arrow keys to control", 45, 175);
  text("Press and hold SPACE to shoot.", 45, 225);
  text("Press SPACE to start.", 45, 275);
}
function sandRoom(){
  background(rgb(0, 0, 0));
  fill(rgb(246, 228, 149, 0.8));
  rect(-1, 175, 410, 275);
  fill(rgb(246, 228, 149, 1));
  rect(-1, 0, 410, 225);
  textSize(16);
  fill("green");
  text("Melk Health: " + sandHealth, 280, 375);
  if(sandHealth >= 0){
  sandRoomEnemy.x = 325; 
  }
}
function waterRoom(){
  background(rgb(0, 0, 0));
  fill(rgb(64, 224, 208, 0.8));
  rect(-1, 175, 410, 275);
  fill(rgb(64, 224, 208, 1));
  rect(-1, 0, 410, 225);
  textSize(16);
  fill("green");
  text("Fish Health: " + waterHealth, 280, 375);
  waterRoomEnemy.x = 325;
}
function bloodRoom(){
  background(rgb(0, 0, 0));
  fill(rgb(220, 20, 60, 0.8));
  rect(-1, 175, 410, 275);
  fill(rgb(220, 20, 60, 1));
  rect(-1, 0, 410, 225);
  textSize(16);
  fill("green");
  text("Dog Health: " + bloodHealth, 280, 375);
  bloodRoomEnemy.x = 325;
}
function coconutRoom(){
  background(rgb(0, 0, 0));
  fill( rgb(183, 114, 82, 0.8));
  rect(-1, 175, 410, 275);
  fill(rgb(183, 114, 82, 1));
  rect(-1, 0, 410, 225);
  textSize(16);
  fill("green");
  text("Tree Health: " + coconutHealth, 280, 375);
  coconutRoomEnemy.x = 325;
}
function thunderDome(){
  inBossRoom = true;
  background(rgb(0, 0, 0));
  fill(rgb(119, 159, 178, 0.8));
  ellipse(200, 200, 400, 400);
  textSize(16);
  fill("green");
  text("Octy Health: " + bossHealth, 280, 375);
  thunderDomeEnemy.x = 325;
}
function displayThings(){
  fill("white");
  textSize(24);
  text("Lives:", 25, 25);
  text("Level: " + level, 250, 25);
}
function win(){
  background("white");
  text("The End", 125, 35);
  player.x = 200;
  player.y = 250;
  player.setAnimation("pastrychef end");
  endScene.x = 200;
  endScene.y = 200;
  playerAttack.destroy();
  life1.destroy();
  life2.destroy();
  life3.destroy();
}
function life(){
  if(lives == 3){
    life1.visible = true;
    life2.visible = true;
    life3.visible = true;
  } else if(lives == 2) {
    life1.visible = true;
    life2.visible = true;
    life3.visible = false;
  } else if(lives == 1){
    life1.visible = true;
    life2.visible = false;
    life3.visible = false;
  } else if(lives == 0){
    life1.visible = false;
    life2.visible = false;
    life3.visible = false;
  }
}
function movePlayerNonBossRoom(){
  if(keyDown("right")&&(player.x < 220)){
    player.x += 5;
  }
  if(keyDown("left")&&(player.x > 10)){
    player.x -= 5;
  }
  if(keyDown("up")&&(player.y > 225)){
    player.y -= 5;
  }
  if(keyDown("down")&&(player.y < 390)){
    player.y += 5;
  }
}
function movePlayerBossRoom(){
  if(keyDown("right")&&(player.x < 215)){
    player.x += 5;
  }
  if(keyDown("left")&&(player.x > 10)){
    player.x -= 5;
  }
  if(keyDown("up")&&(player.y > 10)){
    player.y -= 5;
  }
  if(keyDown("down")&&(player.y < 390)){
    player.y += 5;
  }
}
function bulletStuff(){
  if(keyDown("space")){
    playerAttack.velocityX = 3;
  } else {  
  playerAttack.x = player.x + 30;
  playerAttack.y = player.y - 25;
  }
}
function playerDie(){
  if(lives <= 0){
    player.scale = 50000;
    background(rgb(204, 255, 0));
    textSize(36);
    text("YOO LOOSE!\nLevel Reached: " + level, 50, 200);
    playerAttack.destroy();
  }
}
function sandEnemyAttack(){
  sandEnemyZap.velocityX = -1;
  if(sandHealth <= 0){
    sandEnemyZap.velocityX = 0;
    sandEnemyZap.x = 50000;
  }
}
function waterEnemyAttack(){
  waterEnemyZap.velocityX = -3;
  if(waterHealth <= 0){
    waterEnemyZap.velocityX = 0;
    waterEnemyZap.x = 50000;
  }
}
function bloodEnemyAttack(){
  bloodEnemyZap.velocityX = -4;
  if(bloodHealth <= 0){
    bloodEnemyZap.velocityX = 0;
    bloodEnemyZap.x = 50000;
  }
}
function coconutEnemyAttack(){
  coconutEnemyZap.velocityX = -6;
  if(coconutHealth <= 0){
    coconutEnemyZap.velocityX = 0;
    coconutEnemyZap.x = 50000;
  }
}
function thunderEnemyAttack(){
  thunderEnemyZap.velocityX = -8;
  if(bossHealth <= 0){
    thunderEnemyZap.velocityX = 0;
    thunderEnemyZap.x = 50000;
  }
}
function sandDeath(){
  if(playerAttack.isTouching(sandRoomEnemy)){
    sandHealth -= 1;
    playerAttack.x = player.x + 30;
    playerAttack.y = player.y - 25;
  }
  if(sandHealth <= 0){
    sandRoomEnemy.x = 50000;
    level = 2;
  }
  if(sandEnemyZap.x < 0){
    sandEnemyZap.x = 325;
    sandEnemyZap.y = 320;
  }
}
function waterDeath(){
  if(playerAttack.isTouching(waterRoomEnemy)){
    waterHealth -= 1;
    playerAttack.x = player.x + 30;
    playerAttack.y = player.y - 25;
  }
  if(waterHealth <= 0){
    waterRoomEnemy.x = 50000;
    level = 3;
  }
  if(waterEnemyZap.x < 0){
    waterEnemyZap.x = 325;
    waterEnemyZap.y = 320;
  }
}
function bloodDeath(){
  if(playerAttack.isTouching(bloodRoomEnemy)){
    bloodHealth -= 1;
    playerAttack.x = player.x + 30;
    playerAttack.y = player.y - 25;
  }
  if(bloodHealth <= 0){
    bloodRoomEnemy.x = 50000;
    level = 4;
  }
  if(bloodEnemyZap.x < 0){
    bloodEnemyZap.x = 325;
    bloodEnemyZap.y = 320;
  }
}
function coconutDeath(){
  if(playerAttack.isTouching(coconutRoomEnemy)){
    coconutHealth -= 1;
    playerAttack.x = player.x + 30;
    playerAttack.y = player.y - 25;
  }
  if(coconutHealth <= 0){
    coconutRoomEnemy.x = 50000;
    level = 5;
  }
  if(coconutEnemyZap.x < 0){
    coconutEnemyZap.x = 325;
    coconutEnemyZap.y = 320;
  }
}
function thunderDeath(){
  if(playerAttack.isTouching(thunderDomeEnemy)){
    bossHealth -= 1;
    playerAttack.x = player.x + 30;
    playerAttack.y = player.y - 25;
  }
  if(bossHealth <= 0){
    thunderDomeEnemy.x = 50000;
    lives = 3;
    level = "Cheese";
  }
  if(thunderEnemyZap.x < 0){
    thunderEnemyZap.x = 325;
    thunderEnemyZap.y = 320;
  }
}
function wasHit(){
  if(sandEnemyZap.isTouching(player)){
    lives -= 1;
    sandEnemyZap.x = 325;
    sandEnemyZap.y = 320;
  }
  if(waterEnemyZap.isTouching(player)){
    lives -= 1;
    waterEnemyZap.x = 325;
    waterEnemyZap.y = 320;
  }
  if(bloodEnemyZap.isTouching(player)){
    lives -= 1;
    bloodEnemyZap.x = 325;
    bloodEnemyZap.y = 320;
  }
  if(coconutEnemyZap.isTouching(player)){
    lives -= 1;
    coconutEnemyZap.x = 325;
    coconutEnemyZap.y = 320;
  }
  if(thunderEnemyZap.isTouching(player)){
    lives -= 1;
    thunderEnemyZap.x = 325;
    thunderEnemyZap.y = 320;
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
