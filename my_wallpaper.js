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
rect(89, 99, 22, 14);

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


//sword
strokeWeight(1);
stroke("black");
beginShape();
vertex(30, 66);
vertex(35, 75);
vertex(40, 90);
vertex(42, 90);
endShape(CLOSE);

line(30, 86, 45, 86);

line(89, 107, 111, 106);



}