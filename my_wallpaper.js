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

ellipse(99, 99, 50, 50);
ellipse(99, 99, 40, 40);
ellipse(99, 99, 30, 30);
ellipse(99, 99, 20, 20);
ellipse(99, 99, 10, 10);

strokeWeight(2);
stroke(228, 8, 10);//red
noFill();
beginShape();
vertex(33, 66);
vertex(33, 99);
vertex(66, 99);
vertex(66, 66);
vertex(48, 33);
vertex(33, 66);
endShape(CLOSE);


}