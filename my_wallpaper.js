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
  strokeWeight(0.5);
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

  //x in a box
  line(33, 33, 66, 66);
  line(66, 33, 33, 66);

  line(99, 132, 132, 99);
  line(99, 99, 132, 132);

  //grenn rectangle
  strokeWeight(1);
  stroke(210, 1, 3);//red
  fill(62, 176, 17);//green
  rect(x, 66, 33);


  //red circle
  strokeWeight(1);
  stroke(232, 232, 232);//white?
  fill(228, 8, 10);//red
  //circles in a circle
  ellipse(x, 33, 33, 33);
  ellipse(x, 33, 24, 24);
  ellipse(x, 33, 16.5, 16.5);
  ellipse(x, 33, 8, 8);

  //white lines
  strokeWeight(2);
  stroke(255, 255, 255);//also white
  line(33, 140, 66, 140);
  line(33, 145, 66, 145);
  line(33, 150, 66, 150);
  line(40, 132, 40, 165);
  line(45, 132, 45, 165);
  line(50, 132, 50, 165);

  //art

  strokeWeight(1);
  stroke(255, 222, 89);//light yellow
  fill(166, 23, 206);//purple
  beginShape();
  vertex(165, 66);
  vertex(170, 66);
  vertex(175, 61);
  vertex(180, 66);
  vertex(185, 66);
  vertex(180, 71);
  vertex(185, 76);
  vertex(180, 76);
  vertex(175, 81);
  vertex(170, 76);
  vertex(165, 76);
  vertex(170, 71);
  vertex(165, 66);
  endShape(CLOSE);;

  strokeWeight(1);
  stroke(204, 108, 231);//purple
  fill(255, 222, 89);//light yellow
  beginShape();
  vertex(16.5, 15);
  vertex(33, 15);
  vertex(45, 25);
  vertex(16.5, 25);
  vertex(16.5, 40);
  vertex(10, 40);
  vertex(10, 15);
  vertex(33, 40);
  vertex(28, 12);
  vertex(16.5, 15);
  endShape(CLOSE);

  //red cross :D
  strokeWeight(1);
  stroke(206, 206, 206);//grey
  fill(210, 1, 3);//red
  beginShape();
  vertex(165, 90);
  vertex(165, 90);
  vertex(170, 90);
  vertex(170, 95);
  vertex(175, 95);
  vertex(175, 100);
  vertex(170, 100);
  vertex(170, 105);
  vertex(165, 105);
  vertex(165, 100);
  vertex(160, 100);
  vertex(160, 95);
  vertex(165, 95);
  endShape(CLOSE);

  //star.ish
strokeWeight(1);
stroke(228, 118, 76);//peach
fill(255, 222, 89);//yellow
beginShape();
vertex(140, 155);
vertex(150,132);
vertex(160, 155);
vertex(140, 140);
vertex(160, 140);
vertex(140, 155);
endShape(CLOSE);




}
