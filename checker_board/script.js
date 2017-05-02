/*
to place/spawn a piece using JavaScript:

var piece = document.createElement('div');            // creates a new 'element' or empty div
piece.setAttribute('class', 'piece');                 // assign the div class="piece"
document.getElementById('board').appendChild(piece);  // add the div to the id="board"
piece.style.top = '0px';                              // assign the top/y position
piece.style.left = '0px';                             // assign the left/x position
*/

var xpos = 0;
var ypos = 0;

for(var x=0; x<=36; x+=1) {
  var piece = document.createElement('div');
  piece.setAttribute('class', 'piece');
  document.getElementById('board').appendChild(piece);
  piece.style.top = ypos +'px';
  piece.style.left = xpos + 'px';
  xpos+= 100;

  if (xpos <= 500) {
    var piece = document.createElement('div');
    piece.setAttribute('class', 'piece');
    document.getElementById('board').appendChild(piece);
    piece.style.top = ypos +'px';
    piece.style.left = xpos + 'px';
    ypos += 100;
  }

}
/*
var piece = 0;

while(piece <= 36) {
  var piece = document.createElement('div');
  piece.setAttribute('class', 'piece');
  document.getElementById('board').appendChild(piece);
  piece.style.top = '0px';
  piece.style.left = x*100 + 'px';

}
*/
