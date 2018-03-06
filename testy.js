//Javascript for drawing and calculating quadratics 2017
var a, b, c, context, w, h, k=10;

function init() {
  canvas= document.getElementById("mycanvas");
  context = canvas.getContext("2d");
  w = canvas.width = 600;
  h = canvas.height = 400;
  console.log('canvas is loaded into context');
  canvasOffset = $("#mycanvas").offset();
  offsetX = Math.round(canvasOffset.left),
  offsetY = Math.round(canvasOffset.top); 
  canvas.addEventListener("mousemove", doMouseMove, false);
  graphpaper();
}  // close init

function QF() {
  // getting values to do quadratic formula
  a = $("#quadA").val();
  b = $("#linB").val();
  c = $("#constant").val();
  x1 = (-b + Math.sqrt(b**2 - 4*a*c))/(2*a);
  x2 = (-b - Math.sqrt(b**2 - 4*a*c))/(2*a);
  $("#solution1").text("X intercept at " +x1);
  $("#solution2").text("X intercept at " +x2);
  console.log(a,b,c);
  context.beginPath();
  context.arc(w/2+x1*k,h/2,5,0,6.28);
  context.fill();
  context.beginPath();
  context.arc(w/2+x2*k,h/2,5,0,6.28);
  context.fill();
  results();
  graphQuad();
}  // close QF

function results() {
  // finding vertext and displaying symline and yint results
  vX = -(b*1)/(2*a);
  vY = a*Math.pow(vX,2)+b*vX+c*1;
  vX = vX.toFixed(2);
  vY = vY.toFixed(2);
  $("#vertex").text("Vertex is at (0,"+ vX+","+vY+")");
  $("#y-int").text("Y intercept is at (0,"+ c+")");
  context.beginPath();
  //y intercept
  context.arc(w/2,h/2-c*k,5,0,6.28);
  context.fill();
  Xcp = 2*vX;
  $("cpoint").text("Corr. Pt. is at (,"+ Xcp + "," + c +")");
  context.beginPath();
  //vertex
  context.arc(w/2+vX*k,h/2-vY*k,5,0,6.28);
  context.fill();

  context.beginPath();
  // c point
  context.arc(w/2+2*vX*k,h/2-c*k,5,0,6.28);
  context.fill();

  $("symmetry").text(" Sym line x =" + vX );
  context.strokeStyle = "rgba(149, 244, 66)";
  context.setLineDash([10,5]);
  context.beginPath();
  context.moveTo(w/2+vX*k,0);
  context.lineTo(w/2+vX*k, h+5);
  context.stroke();

}  // close results()

function graphpaper() {
  // the x and y axis drawn
  context.lineWidth = 2;
  context.beginPath();
  context.moveTo(w/2,0);
  context.lineTo(w/2,h);
  context.stroke();

  context.beginPath();
  context.moveTo(0,h/2);
  context.lineTo(w,h/2);
  context.stroke();

    // thin line with a 50% opacity using rgba() 
  context.lineWidth=1;
  context.strokeStyle="rgba(0,0,255,.5)";

  //using the direct variation constant, k
  //  here are the vertical and horizontal lines

  for (i=0; i<h/(2*k); i++) {
    context.beginPath();
    context.moveTo( 0, h/2-i*k );
    context.lineTo( w, h/2-i*k );
    context.stroke();

    context.beginPath();
    context.moveTo( 0, h/2+i*k );
    context.lineTo( w, h/2+i*k );
    context.stroke();

}

  for (i=0; i<w/(2*k); i++) {

    context.beginPath();
    context.moveTo(w/2-i*k, 0 );
    context.lineTo(w/2-i*k, h );
    context.stroke();

    context.beginPath();
    context.moveTo(w/2+i*k, 0 );
    context.lineTo(w/2+i*k, h );
    context.stroke();

}

} //close graphpaper



function graphQuad () {
  for (var i = 0; i < w; i++) {
    x = (w/2-i)/k;
    y = c*1+b*x+a*Math.pow(x,2);
    nx =  (w/2-(i+1))/k
    ny =  c*1+b*nx+a*Math.pow(nx,2)
    console.log(x,y,nx,ny);
    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = "Red";
    context.moveTo(w/2+x*k,h/2-y*k);
    context.lineTo(w/2+nx*k,h/2-ny*k);
    context.stroke();
  }
}

function zoomin () {
  k=k+3;
  init();
  graphQuad();
  results();
  QF();
}

function zoomout () {
  k=k-3;
  init();
  graphQuad();
  results();
  QF();
}

function resetcanvas () {
	init();
	graphQuad();
	results();
	QF();
}

function doMouseMove(event) {
    // always know where ther mouse is located
  mouseX = event.clientX-offsetX;
  mouseY = event.clientY-offsetY;
  pointX = (mouseX-w/2)/k;
  pointY = a*Math.pow(pointX,2)+b*pointX+c*1;
  pointX =  pointX.toFixed(2);
  pointY =  pointY.toFixed(2);
  console.log(mouseX,mouseY, pointX, pointY, offsetY, offsetX);
  context.beginPath();
  context.arc(mouseX, h/2-pointY*k,5,0,2*Math.PI);
  context.fill(); 
  $("#point").text("Point on the curve: ("+pointX+","+pointY+")");
}  // end doMouseMove

$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
        $(this).toggleClass('active');
    });
});
