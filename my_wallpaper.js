//your parameter variables go here!
let rect_width  = 20;
let rect_height = 30;
var x = 100;


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
//Rule of thirds
  strokeWeight(0.25);
  line(0, 132, 200, 132);
  line(66, 0, 66, 200);
  line(132, 0, 132, 200);

  //box
  line(0, 66, 200, 66);

  //grid
  line(0,33, 200, 33);
  line(0, 99, 200, 99);
  line(0, 165, 200, 165);
  line(33, 0, 33, 200);
  line(99, 0, 99, 200);
  line(165, 0, 165, 200);

  //draft
  strokeWeight(1);
  stroke(255, 22, 89);//yellow
  fill(254, 153, 0);//orange
  beginShape();
  vertex(33, 66);
  vertex(49.5, 33);
  vertex(66, 66);
  vertex(33, 42);
  vertex(66, 42);
  vertex(33, 66);
  endShape(CLOSE);

}