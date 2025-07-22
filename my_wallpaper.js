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
  // background(240, 255, 240); //light honeydew green colour
  background(74, 0, 255); //light honeydew green colour
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
 let size = 35;
 let weight= 5;

 fill(0,102,102);
  strokeWeight(weight);
  rect(50, 50, 50);
  rect(100,50,50);

  fill(211, 47, 47);
  ellipse(75,75,size);
  ellipse(125,75,size);





}
