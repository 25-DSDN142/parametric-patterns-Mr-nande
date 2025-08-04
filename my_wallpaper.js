//your parameter variables go here!

//colors
let bgColor = "red";//background
let imgScale = 1;//changes the size of picture/ new move
let crossbonecolor = "black";//crossbone outline
let cloudcolor = "yellow";//cloud outline
let cloudFill = "black";//cloudfillin
let skullcolor = "white";//skull outline
let eyecolor = "white";//eyes outline
let eyefill = "black";//eyes innerline
let crossbonefill = "gold";//crossbone fillin
//change which tooth is gold
let tooth1 = "white";
let tooth2 = "gold";
let tooth3 = "white";
let tooth4 = "white";




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

background(bgColor);

push();//new move i learnt from sensei phoebe san
scale(imgScale);

//background lines
//bottom left of cloud
strokeWeight(1);
stroke(cloudFill);
line(30, 120, 90, 120);
line(28, 118, 89, 118);
line(30, 115, 35, 123);
line(33, 115, 38, 123);
//top of cloud
strokeWeight(1.5)
stroke(cloudcolor);
fill(cloudFill);
ellipse(94, 68, 7, 7);


//cloudoutline
strokeWeight(3);
stroke(cloudcolor);
fill(cloudFill);
//cloud bubbles/start from left//change stroke to see bubbles
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
strokeWeight(5);
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
//little bubble top of cloud detail

strokeWeight(0.5);
stroke(cloudFill);
fill(cloudFill);
//little bubble detail top of cloud
ellipse(94, 68, 6, 6);
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

//cloud swirls/details
strokeWeight(1);
stroke(cloudcolor);
fill(cloudFill);
ellipse(65, 96, 20, 20);

strokeWeight(0.5);
stroke(cloudFill);
fill(cloudFill);
ellipse(72, 95, 15, 19);

strokeWeight(1);
stroke(cloudcolor);
fill(cloudFill);
ellipse(67, 98, 15, 15);
stroke(cloudFill);
ellipse(65, 99, 13, 12);

stroke(cloudcolor);
strokeWeight(1);
line(119, 90, 150, 90);
line(120, 93, 160, 93);

strokeWeight(1);
stroke(cloudcolor);
fill(cloudFill);
ellipse(141, 111, 11, 11);
stroke(cloudFill);
ellipse(139, 114, 8, 8);
strokeWeight(1);
stroke(cloudcolor);
ellipse(139, 111, 7, 7);
stroke(cloudFill);
fill(cloudFill);
ellipse(140, 111, 7, 8)

pop();
}