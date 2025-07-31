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
  background("white");
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

//grid points/ help see wheres where
strokeWeight(1);
stroke("grey");
line(0,0, 200, 200);
line(0,200, 200, 0);
line(100, 0, 100, 200);
line(0, 100, 200, 100);
}