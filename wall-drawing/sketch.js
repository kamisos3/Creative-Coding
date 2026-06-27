// Creates setup() function
function setup() {
  createCanvas(500, 500);
  background(400);

}
  function draw() {
    const spacing = 25; // Vertical parallel lines spacing
    let posx = 0;

    // Draws two lines, dividing the canvas in equal parts
      line(250, 0, 250, 500);
      line(0, 250, 500, 250);

  }