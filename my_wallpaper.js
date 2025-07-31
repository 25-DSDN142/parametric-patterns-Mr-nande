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

background("white");

//crossbones

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
strokeWeight(1.5);
stroke("white");
fill("white");
rect(89, 99, 22, 15);

//skull
strokeWeight(0.5);
stroke("white");
fill("black");
ellipse(100, 88, 29, 33);

//V eye
strokeWeight(2);
stroke("white");//outline
line(89, 81, 93, 96);
line(93, 96, 97, 81);
strokeWeight(1);
stroke("black");//inner line
line(89, 81, 93, 96);
line(93, 96, 97, 81);
//ii eye
strokeWeight(2);//outline
stroke("white");
line(105, 80, 105, 95);
line(109, 80, 109, 95);
line(103, 80, 111, 80);
line(103, 95, 111, 95);
strokeWeight(1);
stroke("black");//inner line
line(105, 80, 105, 95);
line(109, 80, 109, 95);
line(103, 80, 111, 80);
line(103, 95, 111, 95);

//teeth
strokeWeight(0.5);
stroke("black");
fill("white");
rect(89, 99, 5.5, 14.5);//starts from far left
fill("gold");
rect(94.5, 99, 5.5, 15);
fill("white");
rect(100, 99, 5.5, 14.3);
fill("white")
rect(105.5, 99, 5.5, 14.5);

stroke("black")
fill("black")
rect(89, 99, 22, 2);





}