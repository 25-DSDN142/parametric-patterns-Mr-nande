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


  //jolly roger draft
  strokeWeight(1);
  stroke("black");
  noFill();
  rect(33, 33, 25);
  ellipse(33, 33, 30, 30);
  ellipse(25, 33, 10, 5);
  ellipse(33, 33, 10, 5);
  ellipse(29, 35, 2, 2);
  line(10, 60, 60, 20);
  line(10, 20, 60, 60);
  ellipse(10, 20, 10, 10);
  ellipse(60, 20, 10, 10);
  ellipse(10, 60,10, 10);
  ellipse(60, 60, 10, 10);

  line(5, 99, 12, 119);
  line(12, 119, 19, 99);
  line(20, 99, 20, 119);
  line(25, 99, 25, 119);
  line(15, 99, 30, 99);
  line(15, 119, 30, 119);



}