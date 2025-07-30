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
  rect(25, 40, 18);
  ellipse(29, 33, 5, 5);
  ellipse(38, 33, 5, 5);
  ellipse(33, 40, 3, 3);
  line(10, 60, 60, 20);
  line(10, 20, 60, 60);
  ellipse(10, 20, 10, 10);
  ellipse(60, 20, 10, 10);
  ellipse(10, 60,10, 10);
  ellipse(60, 60, 10, 10);
  ellipse(34, 33, 25, 25);
  line(5, 99, 12, 119);
  line(12, 119, 19, 99);
  line(20, 99, 20, 119);
  line(25, 99, 25, 119);
  line(15, 99, 30, 99);
  line(15, 119, 30, 119);

  //jolly rodger vii

  strokeWeight(1);
  stroke("black");
  fill("black");

  //crossbones
  //bone.one
  line(80, 116, 120, 88);
  line(80, 114, 117, 88);
  //topknuckle
  ellipse(120, 88, 4, 4);
  ellipse(118, 86, 4, 4);
  //bottomknuckle
  ellipse(80, 114, 4, 4);
  ellipse(82, 116, 4, 4);

  //bone.two
  line(81, 86, 118, 113);
  line(80, 88, 118, 116);
  //topknuckle
  ellipse(82, 86, 4, 4);
  ellipse(80, 88, 4, 4);
  //bottomknuckle
  ellipse(116, 115, 4, 4);
  ellipse(118,113, 4, 4);
  //skull
  ellipse(100, 100, 20, 20)
  //mouth
  ellipse(100, 110, 12, 15);

  push();//new move i learnt off phoebe
  //eyes
  strokeWeight(1);
  stroke("white");
  fill("black")
  ellipse(96, 100, 6, 8);
  ellipse(104, 100, 6, 8);
  //nose
  ellipse(100, 107, 4, 4);
  pop();



}