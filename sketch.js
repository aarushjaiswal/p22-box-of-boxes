var Engine = Matter.Engine,
    World = Matter.World,
    Bodies = Matter.Bodies;
 
var engine;
var world;
var boxes = [];
 
var ground;
var box;
var gSlider;
 
function setup() {
    createCanvas(400, 400);

    engine = Engine.create();
    world = engine.world;
 
    gSlider = createSlider(0, 100, 50);
    gSlider.position(40, 365);
    gSlider.input = map(engine.world.gravity, gSlider.min, gSlider.max, 0, 1);
 
    ground = new Ground(200,380,400,40);
}
 
function mousePressed() {
    if (mouseY < 350) {
        box = new Box(mouseX, mouseY, 30, 30);
        boxes.push(box);
        }
}
 
function draw() {
    background('blue');
    Engine.update(engine);
   
    var fVal = gSlider.value();

    ground.display();
 
    for (var i = 0;i < boxes.length; i ++  ) {
        boxes [i].display();
    }

}