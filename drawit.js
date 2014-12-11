window.onload = function(){
var started = false;
var canvas, context;
var enableDraw = false;
var color='yellow';
var red, green, blue, yellow, dzest;
var size='10';
var small, medium, large;
var clear;
var text;
var getText;
var save;
 canvas = document.getElementById('drawarea');
 context = canvas.getContext('2d');
 
canvas.style.backgroundColor="white";
context.fillStyle="white";
context.fillRect(0, 0, 500,500);
 
 canvas.addEventListener('mousemove', onMouseMove, false);
 canvas.addEventListener('mousedown', function(e) { enableDraw = true; }, false); 
 canvas.addEventListener('mouseup', function(e) { enableDraw = false; started = false; }, false);
 
 green=document.getElementById('colorGreen');
 green.onclick=function(e){color='green';};
 red=document.getElementById('colorRed');
 red.onclick=function(e){color='red';};
 yellow=document.getElementById('colorYellow');
 yellow.onclick=function(e){color='yellow';};
 blue=document.getElementById('colorBlue');
 blue.onclick=function(e){color='blue';};
 dzest=document.getElementById('eraser');
 dzest.onclick=function(e){color='white';};
 
 small=document.getElementById('small');
 small.onclick=function(e){size='2';};
 medium=document.getElementById('medium');
 medium.onclick=function(e){size='6';};
 large=document.getElementById('large');
 large.onclick=function(e){size='10';};

 getText=document.getElementById('textButton');
 getText.onclick=function(e){
 text=document.getElementById('text').value;
 if (text=="") {alert('Ievadi savu vārdiņu!'); 
 return false;}
 if (!isNaN(text))
 {alert('Vai tavs vārds ir cipariņš?'); return false;}
 context.fillStyle    = 'black';
context.font         = 'bold 40pt Arial';
context.textBaseline = 'top';
context.fillText (text, 100, 400);
onSubmit();
 };
 
 save=document.getElementById('save');
 save.onclick=onSave;
 
 var image=new Image();
image.src='images/duck-outline.png';
context.drawImage(image, 100, 100, 300, 250);

 clear=document.getElementById('clear');
 clear.onclick=function(e){context.clearRect(0,0,500,500);
 context.fillStyle    = 'white';
 context.fillRect(0, 0, 500,500);
 context.drawImage(image, 100, 100, 300, 250);};

function onMouseMove(ev) {
    var x, y;

   /* // Get the mouse position.
    if (ev.layerX >= 0) {
        // Firefox
        x = ev.layerX-536;
        y = ev.layerY-212;
    }
    else if (ev.offsetX >= 0) {
        // Opera
        x = ev.offsetX;
        y = ev.offsetY;
    }*/
	 var rect = canvas.getBoundingClientRect();
 
          x=ev.clientX - rect.left;
          y=ev.clientY - rect.top;
        
if (enableDraw) {
    if (!started) {
        started = true;

        context.beginPath();
        context.moveTo(x, y);        
    }
    else {
	context.strokeStyle = color;
	context.lineWidth =size;
        context.lineTo(x, y);
        context.stroke();
    }
	context.drawImage(image, 100, 100, 300, 250);
}
}
function onSave() {
	var img=document.getElementById('drawarea');
	window.open(img.toDataURL("image/jpg"));
}

}