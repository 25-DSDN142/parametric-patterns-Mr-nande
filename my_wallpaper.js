//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;



function setup_wallpaper(pWallpaper) {
  pWallpaper.output_mode(DEVELOP_GLYPH);
  //pWallpaper.output_mode(GRID_WALLPAPER);
  
  pWallpaper.resolution(FIT_TO_SCREEN);
  pWallpaper.show_guide(true); //set this to false when you're ready to print
  
  //Grid settings
  pWallpaper.grid_settings.cell_width  = 200;
  pWallpaper.grid_settings.cell_height = 200;
  pWallpaper.grid_settings.row_offset  = 50;
}

function wallpaper_background() {
  // background(240, 255, 240);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
let angle = 360 / 5;
  strokeWeight(1);
  stroke(0, 0, 0);
  fill(204, 108, 231);

  push()
  translate(99, 99)
  for (let i = 0; i < 5; i += 1) {
    ellipse(0, 0, 15, 50);  
    rotate(angle);
  }

  pop()

  fill(255, 222, 89);//yellow
  ellipse(99, 99, 20, 20);
  ellipse(99, 99, 10, 10);

   
}