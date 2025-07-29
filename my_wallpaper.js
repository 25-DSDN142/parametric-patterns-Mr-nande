//your parameter variables go here!

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
  background(240, 255, 240);
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

  strokeWeight(1);
  stroke(228, 76, 211);//light purple
  noFill();
 
  //testing curvy lines
curve(50, 0, 50, 150, 150, 150, 190, 20);
curve(10, 150, 50, 150, 150, 150, 190, 150);
curve(60, 33,  30, 60,  50, 60,  33, 33);

 // Left side
  curve(33, 33,  30, 60,  40, 60,  33, 33);

  // Right side
  curve(33, 33,  40, 60,  30, 60,  33, 33);
}