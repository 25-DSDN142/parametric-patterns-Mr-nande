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

  //thethirdattempt

  //crosebones
  //FIRSTBONE
  push();
  fill("black");
  beginShape();
  vertex(130, 13);
  vertex(175, 53);
  vertex(173, 55);
  vertex(128, 15);
  endShape(CLOSE);
  //bottomknuckles
  ellipse(176, 53, 5, 5);
  ellipse(173, 55, 5, 5);
  //topknuckles
  ellipse(130, 12, 5, 5);
  ellipse(127, 15, 5, 5);
  //SECONDBONE
  beginShape();
  vertex(170, 13);
  vertex(125, 52);
  vertex(128, 53);
  vertex(172, 15);
  //bottomknuckles
  ellipse(128, 53, 5, 5);
  ellipse(125, 51, 5, 5);
  //topknuckles
  ellipse(170, 12, 5, 5);
  ellipse(173, 15, 5, 5);
  endShape(CLOSE);
  pop();

  strokeWeight(1);
  stroke("black");
  fill("grey");

  //skull outline
  push();
  stroke("black");
  ellipse(150, 30, 32, 27)
  pop();

   //mouthpiece
  beginShape();
  vertex(140, 33);
  vertex(160, 33);
  vertex(162.5, 53);
  vertex(158, 53);
  vertex(157, 50);
  vertex(156, 53);
  vertex(137.5, 53);
  vertex(140, 33);
  endShape();

  //skullbase
  push();
  stroke("grey");
  ellipse(150, 30, 30, 25);
  pop();

  //eyes
  ellipse(143, 30, 8, 10);
  ellipse(157, 30, 8, 10);
  //nose
  ellipse(150, 36, 7, 3);
 
  //V
  strokeWeight(1);
  stroke("black");
  fill("black");
  beginShape();
  vertex(160, 160);
  vertex(162, 158);
  vertex(167, 170);
  vertex(177, 158);
  vertex(179, 160);
  vertex(167, 170);
  vertex(160, 160);
  endShape(CLOSE);
  //ii
  strokeWeight(1);
  stroke("black");
  fill("black");
  beginShape();
  vertex(182, 160);
  vertex(198, 160);
  vertex(198, 162);
  vertex(198, 164);
  vertex(195, 164);
  vertex(195, 170);
  vertex(198, 170);
  vertex(198, 172);
  vertex(182, 172);
  vertex(180, 170);
  vertex(195, 170);
  vertex(192, 162);
  vertex(188, 162);
  vertex(188, 170);
  vertex(187, 170);
  vertex(185, 162);
  vertex(183, 163);
  endShape(CLOSE);




}