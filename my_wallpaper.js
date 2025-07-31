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
strokeWeight(0.5);
stroke("grey");
line(0,0, 200, 200);
line(0,200, 200, 0);
line(100, 0, 100, 200);
line(0, 100, 200, 100);

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
stroke("red");
fill("red");
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

//skull
strokeWeight(0.5);
stroke("white");
fill("black");
ellipse(100, 88, 32, 32);

//eye outlines/delete later
strokeWeight(0.5);
stroke("grey");
noFill();
rect(89, 80, 8, 15);//left eye
rect(103, 80, 8, 15);//right eye

//teeth outlines/delete later
stroke("black")
fill("white");
rect(89, 99, 5.5, 15);//starts from far left
rect(94.5, 99, 5.5, 15);
fill("gold");
rect(100, 99, 5.5, 15);
fill("white")
rect(105.5, 99, 5.5, 15);


//skull
strokeWeight(0.5);
stroke("white");
fill("black");
ellipse(100, 88, 32, 32);
stroke("black");
rect(89, 99, 22, 2);

//eye outlines/delete later
strokeWeight(0.5);
stroke("grey");
noFill();
rect(89, 80, 8, 15);//left eye
rect(103, 80, 8, 15);//right eye

//V eye
strokeWeight(3);
stroke("red");
line(89, 81, 93, 96);
line(93, 96, 97, 81);
strokeWeight(1.5);
stroke("gold");
line(89, 81, 93, 96);
line(93, 96, 97, 81);
//ii eye
strokeWeight(3);
stroke("red");
line(105, 80, 105, 95);
line(109, 80, 109, 95);
line(103, 80, 111, 80);
line(103, 95, 111, 95);
strokeWeight(1.5);
stroke("gold");
line(105, 80, 105, 95);
line(109, 80, 109, 95);
line(103, 80, 111, 80);
line(103, 95, 111, 95);





}