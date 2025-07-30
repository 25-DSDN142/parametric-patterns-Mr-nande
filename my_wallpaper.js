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

//cloud.lol
//hmm..
stroke("blue");
fill("blue");
ellipse(33, 66, 20, 20);
ellipse(23, 70, 5, 5);
ellipse(48, 56, 30, 30);
ellipse(66, 50, 30, 30);
ellipse(80, 56, 20, 20);
ellipse(90, 66, 20, 20);
ellipse(100, 76, 20, 10);
ellipse(28, 76, 30, 10);
ellipse(66, 74, 85, 25);
ellipse(66, 63, 30, 10);

//middle symbol ting
strokeWeight(2);
stroke("white")
fill("blue")
ellipse(66, 66, 30, 30);
}