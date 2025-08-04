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
}

function my_symbol() { // do not rename this function. Treat this similarly to a Draw function

background("red");

//testing curvy lines//figure this out bruv
strokeWeight(1);
stroke("white");
noFill();
// Bezier curve for double bends bottomline
bezier(
  50, 120,
  80, 85,
  120, 140,
  150, 120,
);
//topline
bezier(
  50, 120,
  80, 70,
  120, 130,
  150, 120);
  
//circles start from right
strokeWeight(1);
stroke("white");
fill("white");
ellipse(140, 119, 11, 9);
ellipse(135, 110, 10, 10);
ellipse(125, 100, 20, 20);
ellipse(63, 100, 10, 10);
ellipse(60, 105, 5, 5);
ellipse(75, 95, 20, 20);
ellipse(90, 90, 30, 30);
ellipse(105, 90, 30, 30);
ellipse(90, 75, 10, 10);
ellipse(120, 110, 30, 20);
ellipse(128, 113, 20, 20);
ellipse(53, 115, 2, 2);
ellipse(55, 110, 7, 7);
ellipse(61, 108, 7, 6);
ellipse(65, 106, 5, 5);
ellipse(68, 105, 8, 6.5);
ellipse(73, 105, 7, 6);
ellipse(78, 105, 7, 6);
ellipse(84, 105, 10, 8);
ellipse(102, 113, 5, 5);
ellipse(108, 114, 10, 6);
ellipse()
//crossbones
//outline
//rightbone
strokeWeight(2.5);
stroke("gold");
fill("black");
beginShape();
vertex(125, 75);//top
vertex(81, 119);
vertex(78, 116);//bottom
vertex(122, 72);
endShape(CLOSE);
//topknuckle
ellipse(121, 72, 6, 6);//leftknuckle
ellipse(125, 75, 6, 6);//rightknuckle
//bottomknuckle
ellipse(79, 115, 6, 6);//leftknuckle
ellipse(83, 118, 6, 6);//rightknuckle
//leftbone
strokeWeight(2.5);
stroke("gold");
beginShape();
fill("black");
vertex(75, 75);//top
vertex(119, 119);
vertex(122, 116);//bottom
vertex(78, 72);
endShape(CLOSE);
//topknuckles
ellipse(79, 71, 6, 6);//rightknuckle
ellipse(74, 75, 6, 6);//leftknuckle
//bottomknuckles
ellipse(122, 115, 6, 6);//rightknuckle
ellipse(118, 119, 6, 6);//leftknuckle

//innerbone
//leftbone
strokeWeight(1);
stroke("black");
beginShape();
fill("black");
vertex(75, 75);//top
vertex(119, 119);
vertex(122, 116);//bottom
vertex(78, 72);
endShape(CLOSE);
//topknuckles
ellipse(79, 71, 6, 6);//rightknuckle
ellipse(74, 75, 6, 6);//leftknuckle
//bottomknuckles
ellipse(122, 115, 6, 6);//rightknuckle
ellipse(118, 119, 6, 6);//leftknuckle
//rightbone
strokeWeight(1);
stroke("black");
fill("black");
beginShape();
vertex(125, 75);//top
vertex(81, 119);
vertex(78, 116);//bottom
vertex(122, 72);
endShape(CLOSE);
//topknuckle
ellipse(121, 72, 6, 6);//leftknuckle
ellipse(125, 75, 6, 6);//rightknuckle
//bottomknuckle
ellipse(79, 115, 6, 6);//leftknuckle
ellipse(83, 118, 6, 6);//rightknuckle

//teethoutline
strokeWeight(2.5);
stroke("white");
fill("white");
rect(89, 99, 22, 13.5);

//skull
strokeWeight(0.5);
stroke("white");
fill("black");
ellipse(100, 88, 30, 33);

//V eye
strokeWeight(2);
stroke("white");//outline
line(90, 81, 95, 93);
line(93, 93, 97, 81);
strokeWeight(1);
stroke("black");//inner line
line(90, 81, 95, 93);
line(93, 93, 97, 81);
//ii eye
strokeWeight(2);//outline
stroke("white");
line(103, 80, 103, 93);//leftline
line(107, 80, 107, 93);//rightline
line(101, 82, 109, 80);//topline
line(101, 93, 109, 93);//bottomline
strokeWeight(1);
stroke("black");//inner line
line(103, 80, 103, 93);//leftline
line(107, 80, 107, 93);//rightline
line(101, 82, 109, 80);//topline
line(101, 93, 109, 93);//bottomline

//teeth
strokeWeight(1);
stroke("black");
fill("white");
rect(89, 98, 5.5, 14.5);//starts from far left
fill("gold");
rect(94.5, 98, 5.5, 14.5);
fill("white");
rect(100, 98, 5.5, 14.5);
fill("white")
rect(105.5, 98, 5.5, 14.5);

//lip?
stroke("black")
fill("black")
rect(89, 98, 22, 2);
}