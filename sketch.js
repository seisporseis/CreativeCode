let flowers = [];

function setup() {
  createCanvas(400, 400);
  flowerPower(1000);
}

function draw() {
  background(175,238,238);
  updateAndDrawFlowers();
}

function mousePressed() {
  let flower = createFlower();

  flower.x = mouseX;
  flower.y = mouseY;

  flowers.push(flower);
}

function updateAndDrawFlowers() {
  for (let flower of flowers) {
    drawFlower(flower);

    //wilting effect
    let reduceAmnt = int(random(1, 6));
    flower.size *= (1.00 - reduceAmnt / 100);

    //reduce lifespan
    flower.lifespan -= reduceAmnt;

    if (flower.lifespan <= 0) {
      let i = flowers.indexOf(flower);
      flowers.splice(i, 1);
    }
  }
}

function flowerPower(numFlowers) {
  for(let i = 0; i < numFlowers; i += 1) {
    let flower1 = createFlower();

    //add flower to flowers array
    flowers.push(flower1);
  }
}

function createFlower() {
  let flower = {
    x: random(20, 380),
    y: random(20, 380),
    size: random(10,70),
    lifespan: random(255, 300),
    color: color(random(255), random(255), random(255)),
  };

  return flower;
}

function drawFlower(flower) {
  //petals
  stroke(flower.color);
  strokeWeight(4);
  let petalOffset = flower.size/2.5;
  line(flower.x - petalOffset, flower.y  - petalOffset, flower.x + petalOffset, flower.y +petalOffset);
  line(flower.x - petalOffset, flower.y  + petalOffset, flower.x + petalOffset, flower.y - petalOffset);

  noStroke();
  fill(flower.color);
  ellipse(flower.x, flower.y, flower.size/2, flower.size);
  ellipse(flower.x, flower.y, flower.size, flower.size/2);

  //center
  fill(255,200,230);
  circle(flower.x, flower.y, flower.size / 2);
}

