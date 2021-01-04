const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world;

var hol1, hol2, hol3, hol4, hol5, hol6;
var roof, rope1, rope2, rope3, rope4, rope5, rope6;
var bob1, bob2, bob3, bob4, bob5, bob6;

function setup() {
    createCanvas(1000, 600);

	engine = Engine.create();
    world = engine.world;
    
    roof = new Roof(width/2, 150, 600, 60);

    hol1 = new Holder(250, 150, 5, 5);
    hol2 = new Holder(350, 150, 5, 5);
    hol3 = new Holder(450, 150, 5, 5);
    hol4 = new Holder(550, 150, 5, 5);
    hol5 = new Holder(650, 150, 5, 5);
    hol6 = new Holder(750, 150, 5, 5);

    bob1 = new Bob(300, 503, 50);
    bob2 = new Bob(400, 503, 50);
    bob3 = new Bob(500, 503, 50);
    bob4 = new Bob(600, 503, 50);
    bob5 = new Bob(700, 503, 50);
    bob6 = new Bob(800, 503, 50);

    rope1 = new Rope(hol1.body, bob1.body);
    rope2 = new Rope(hol2.body, bob2.body);
    rope3 = new Rope(hol3.body, bob3.body);
    rope4 = new Rope(hol4.body, bob4.body);
    rope5 = new Rope(hol5.body, bob5.body);
    rope6 = new Rope(hol6.body, bob6.body);

    Engine.run(engine);
}

function draw() {
    background(168, 215, 255);
    
    roof.display();

    bob1.display();
    bob2.display();
    bob3.display();
    bob4.display();
    bob5.display();
    bob6.display();
    
    rope1.display();
    rope2.display();
    rope3.display();
    rope4.display();
    rope5.display();
    rope6.display();

    move();
}

function move() {
    if(keyCode === UP_ARROW) {
        Matter.Body.applyForce(bob1.body, bob1.body.position, {x:-0.05, y:-0.05});
    }
}