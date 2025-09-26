$(function () {
  // initialize canvas and context when able to
  canvas = document.getElementById("canvas");
  ctx = canvas.getContext("2d");
  window.addEventListener("load", loadJson);

  function setup() {
    if (firstTimeSetup) {
      halleImage = document.getElementById("player");
      projectileImage = document.getElementById("projectile");
      cannonImage = document.getElementById("cannon");
      $(document).on("keydown", handleKeyDown);
      $(document).on("keyup", handleKeyUp);
      firstTimeSetup = false;
      //start game
      setInterval(main, 1000 / frameRate);
    }

    // Create walls - do not delete or modify this code
    createPlatform(-50, -50, canvas.width + 100, 50); // top wall
    createPlatform(-50, canvas.height - 10, canvas.width + 100, 200, "navy"); // bottom wall
    createPlatform(-50, -50, 50, canvas.height + 500); // left wall
    createPlatform(canvas.width, -50, 50, canvas.height + 100); // right wall

    //////////////////////////////////
    // ONLY CHANGE BELOW THIS POINT //
    //////////////////////////////////

    // TODO 1 - Enable the Grid
    toggleGrid();


    // TODO 2 - Create Platforms
createPlatform(350,500);
createPlatform(700,350);
createPlatform(200,250);
createPlatfom(1050,650);
createPlatform(1250,250);

    // TODO 3 - Create Collectables
createCollectable(0,0);
createCollectable(0,750);
createCollectable(1400,0);
    
    // TODO 4 - Create Cannons
createCannons(1400,750);
createCannons(700,0);
createCannons(0,500);
    
    //////////////////////////////////
    // ONLY CHANGE ABOVE THIS POINT //=
    //////////////////////////////////
  }

  registerSetup(setup);
});
