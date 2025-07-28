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
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function
  //Rule of thirds
  let blue = color(74, 0, 255)
  let red = color(255,0,0)

  let BGC = red

  background(BGC); //light honeydew green colour

  if ( BGC == blue){
    ellipse (100, 100, 50, 50);
    ellipse( 95, 95, 40, 40);
  }

  if ( BGC == red){
    rect(33, 33, 33);
  }

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

  //draft/star
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

  //random ting
  strokeWeight(1);
  stroke(228, 9, 10);//red
  fill(121, 18, 150);//purple
  beginShape();
  vertex(99, 99);
  vertex(132, 132);
  vertex(165, 99);
  vertex(165, 132);
  vertex(132, 99);
  vertex(99, 132);
  endShape(CLOSE);

  //pasi pattern
  strokeWeight(0.5);
  stroke(255, 255, 255);//white
  fill(0, 0, 0);//black
  beginShape();
  vertex(99, 66);
  vertex(99, 50);
  vertex(132, 50);
  vertex(132, 33);
  vertex(115.5, 50);
  vertex(115.5, 33);
  vertex(99, 33);
  vertex(132, 66);
  vertex(115.5, 66);
  vertex(115.5, 50);
  vertex(99, 66);
  endShape(CLOSE);

  //rect
  strokeWeight(1);
  stroke(31, 156, 35);//green
  fill(6, 2, 112);//blue
  rect(33, 99, 33);
  rect(35, 101, 29);
  rect(37, 103, 25);
  rect(39, 105, 21);
  rect(41, 107, 17);
  rect(43, 109, 13);
  rect(45, 111, 9);
  rect(47, 113, 5);

}