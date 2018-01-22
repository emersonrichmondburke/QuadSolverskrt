// when window loads, a canvas will be created

window.onload = function() {

               var canvas = document.getElementById("canvas"),

                               context = canvas.getContext("2d"),

                               width = canvas.width = window.innerWidth,

                               height = canvas.height = window.innerHeight;

                              

                              

               // trying to add a gradient effect to the lines

               var gradient=context.createLinearGradient(0,0,170,0)

               gradient.addColorStop("0","#0ce9c8");

               gradient.addColorStop("0.5","#0cb6e9");

               gradient.addColorStop("1.0","#0c47e9");

               context.lineWidth=5

 

               // originally we just filled the rect            

               // context.fillRect(0,0,width,height);

               // random lines drawn (100 of them)

               for(var i=0; i<100; i+=1){

                               context.beginPath();

                              context.moveTo(Math.random()*width, Math.random()*height);

                               context.lineTo(Math.random()*100, Math.random()*100);

                               context.strokeStyle=gradient;

                               context.stroke();

               }  // end for loop

};  // end onload function