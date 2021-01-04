class Bob {
    constructor(x, y, radius) {
        var options = {
            restitution : 1,
            density : 2
        }
        this.radius = radius;
        this.body = Bodies.circle(x, y, radius);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        ellipseMode(RADIUS);
        fill(63, 71, 212);
        strokeWeight(3);
        stroke(1, 4, 48);
        ellipse(pos.x, pos.y, this.radius);
        console.log(this.body.position.y);
    }
}