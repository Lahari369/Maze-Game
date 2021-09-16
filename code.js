var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
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

var Sofia=createSprite(20,25,18,18);
Sofia.shapeColor="lightblue";

var wall1 = createSprite(10,70,100,20);
var wall2 = createSprite(100,50,20,100);
var wall3 = createSprite(115,135,150,20);
var wall4 = createSprite(180,120,20,190);
var wall5 = createSprite(65,210,20,70);
var wall6 = createSprite(110,205,70,20);
var wall7 = createSprite(260,10,60,20);
var wall8 = createSprite(290,50,20,100);
var wall9 = createSprite(220,70,60,20);
var wall10 = createSprite(10,220,20,110);
var wall11 = createSprite(50,280,100,20);
var wall12 = createSprite(285,135,140,20);
var wall13 = createSprite(345,60,20,70);
var wall14 = createSprite(390,175,20,150);
var wall15 = createSprite(70,370,20,90);
var wall16 = createSprite(260,205,180,20);
var wall17 = createSprite(150,340,20,150);
var wall18 = createSprite(220,275,120,20);
var wall19 = createSprite(365,250,70,20);
var wall20 = createSprite(360,320,170,20);
var wall21 = createSprite(220,340,20,80);
var wall22 = createSprite(290,390,20,50);
var cup = createSprite(395,390,15,100);
wall1.shapeColor="pink";
wall2.shapeColor="pink";
wall3.shapeColor="pink";
wall4.shapeColor="pink";
wall5.shapeColor="pink";
wall6.shapeColor="pink";
wall7.shapeColor="pink";
wall8.shapeColor="pink";
wall9.shapeColor="pink";
wall10.shapeColor="pink";
wall11.shapeColor="pink";
wall12.shapeColor="pink";
wall13.shapeColor="pink";
wall14.shapeColor="pink";
wall15.shapeColor="pink";
wall16.shapeColor="pink";
wall17.shapeColor="pink";
wall18.shapeColor="pink";
wall19.shapeColor="pink";
wall20.shapeColor="pink";
wall21.shapeColor="pink";
wall22.shapeColor="pink";
cup.shapeColor="yellow";

function draw() {
  background("#E6E6FA");
  createEdgeSprites();
  Sofia.bounceOff(edges);
  Sofia.bounceOff(wall1);
  Sofia.bounceOff(wall2);
  Sofia.bounceOff(wall3);
  Sofia.bounceOff(wall4);
  Sofia.bounceOff(wall5);
  Sofia.bounceOff(wall6);
  Sofia.bounceOff(wall7);
  Sofia.bounceOff(wall8);  
  Sofia.bounceOff(wall9);
  Sofia.bounceOff(wall10);
  Sofia.bounceOff(wall11);
  Sofia.bounceOff(wall12);
  Sofia.bounceOff(wall13);
  Sofia.bounceOff(wall14);
  Sofia.bounceOff(wall15);
  Sofia.bounceOff(wall16);
  Sofia.bounceOff(wall17);
  Sofia.bounceOff(wall18);
  Sofia.bounceOff(wall19);
  Sofia.bounceOff(wall20);
  Sofia.bounceOff(wall21);
  Sofia.bounceOff(wall22);
  if (keyDown("up")) {
    Sofia.x=Sofia.x+0;
    Sofia.y=Sofia.y-3;
  }
  if(keyDown("down")){
   Sofia.y=Sofia.y+3;
   Sofia.x=Sofia.x+0;
  }
  if(keyDown("RIGHT")){
    Sofia.y=Sofia.y+0;
    Sofia.x=Sofia.x+3;
  }
  if(keyDown(LEFT)){
    Sofia.y=Sofia.y+0;
    Sofia.x=Sofia.x-3;
  }
   if (Sofia.collide(cup)){
  background("white");
  }

 
drawSprites();

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
