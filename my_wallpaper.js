//your parameter variables go here!

//colors
let bgColor = "red";//background
let crossbonecolor = "green";//crossbone outline
let imgScale = 0.8;//makes bigger and smaller :O
let cloudcolor = "yellow";//cloud outline
let cloudFill = "white";//cloudfillin
let skullcolor = "red";//skull outline
let eyecolor = "yellow";//eyes outline
let eyefill = "black";//eyes innerline
let crossbonefill = "yellow";//crossbone fillin
let tooth1 = "gold";
let tooth2 = "white";
let tooth3 = "white";
let tooth4 = "white";
if (skullcolor == red){
  let eyecolor = white
};

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
//if statement
if (bgColor == "red"){
  let eyecolor = ( "blue ");
};

background(bgColor);

push();//new move i learnt from sensei phoebe san
scale(imgScale);

//cloudoutline
//circles start from right
strokeWeight(4);
stroke(cloudcolor);
fill(cloudFill);
//cloud bubbles/start from left
ellipse(53, 115, 3, 3);//bottombubble(tinybubble)
ellipse(55, 110, 8, 8);//secondbubble
ellipse(59, 105, 13, 12);//thirdbubble
ellipse(67, 98, 22, 22);//fourthbubble
ellipse(80, 92.5, 30, 32);//fifthbuble(leftofskull
ellipse(90, 80, 20, 20);//6thbubble(leftofskull)
ellipse(110, 75, 30, 30);//7thbub(rightofskull)
ellipse(110, 101, 40, 30);//8thbub(behindskull)
ellipse(125, 93, 20, 20);//9thbub(right of skull.eyelevel)
ellipse(130, 105, 20, 20);//10thbub(rightofskull.teeth level)
ellipse(135, 114, 20, 20);//11thbub(rightofskullbottom cloud)
ellipse( 144, 119, 8, 8);//12thbubble
ellipse(110, 113, 10, 10);//behind tooth filler/far right
ellipse( 114, 117, 5, 5);//oval behind bottom right bone

//cloudline
strokeWeight(6.5);
stroke(cloudcolor);
noFill();
//topline
bezier(
  48, 122,
  80, 86,
  102, 132,
  150, 122
);
bezier(
  48, 122,
  80, 89,
  118, 138,
  150, 122,
);
//cloudfillin
//circles start from right
strokeWeight(0.5);
stroke(cloudFill);
fill(cloudFill);
//cloud bubbles/start from left
ellipse(53, 115, 3, 3);//bottombubble(tinybubble)
ellipse(55, 110, 8, 8);//secondbubble
ellipse(59, 105, 13, 12);//thirdbubble
ellipse(67, 98, 22, 22);//fourthbubble
ellipse(80, 92.5, 30, 32);//fifthbuble(leftofskull
ellipse(90, 80, 20, 20);//6thbubble(leftofskull)
ellipse(110, 75, 30, 30);//7thbub(rightofskull)
ellipse(110, 101, 40, 30);//8thbub(behindskull)
ellipse(125, 93, 20, 20);//9thbub(right of skull.eyelevel)
ellipse(130, 105, 20, 20);//10thbub(rightofskull.teeth level)
ellipse(135, 114, 20, 20);//11thbub(rightofskullbottom cloud)
ellipse(110, 113, 10, 10);//behind tooth filler/far right
ellipse( 114, 117, 5, 5);//behind bottom right bone
ellipse(125, 118, 14, 10);//oval behind bottom right bone
ellipse(144, 119, 8, 8);//lastbubble

//cloud fillin
strokeWeight(2.5);
stroke(cloudFill);
noFill();
//topline
//curvyline with two bends :)
bezier(
  48, 122,
  80, 86,
  102, 132,
  150, 122
);
bezier(
  48, 122,
  80, 89,
  118, 138,
  150, 122,
);

//crossbones outline
//rightbone
strokeWeight(3);
stroke(crossbonecolor);
fill(crossbonefill);
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
beginShape();
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

//crossbonefillin
//leftbone
strokeWeight(1);
stroke(crossbonefill);
fill(crossbonefill);
beginShape();
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
stroke(skullcolor);
rect(89, 99, 22, 13.5);

//skulltop
strokeWeight(0.5);
stroke(skullcolor);
fill("black");
ellipse(100, 88, 30, 33);

//V eye
//outline
strokeWeight(2);
stroke(eyecolor);
line(90, 81, 95, 93);//leftline
line(93, 93, 97, 81);//rightline
//innerline
strokeWeight(1);
stroke(eyefill);
line(90, 81, 95, 93);//leftline
line(93, 93, 97, 81);//rightline
//ii eye
//outline
strokeWeight(2);
stroke(eyecolor);
line(103, 80, 103, 93);//leftline
line(107, 80, 107, 93);//rightline
line(101, 82, 109, 80);//topline
line(101, 93, 109, 93);//bottomline
//innerline
strokeWeight(1);
stroke(eyefill);
line(103, 80, 103, 93);//leftline
line(107, 80, 107, 93);//rightline
line(101, 82, 109, 80);//topline
line(101, 93, 109, 93);//bottomline

//teeth
strokeWeight(1);
stroke("black");
fill(tooth1);
rect(89, 98, 5.5, 14.5);//starts from far left
fill(tooth2);
rect(94.5, 98, 5.5, 14.5);
fill(tooth3);
rect(100, 98, 5.5, 14.5);
fill(tooth4)
rect(105.5, 98, 5.5, 14.5);

//toplip
stroke("black")
fill("black")
rect(89, 98, 22, 2);

pop();
}