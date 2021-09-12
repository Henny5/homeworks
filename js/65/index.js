(function(){
 'use strict'; 



 const colors = ["red","orange","green","blue","brown","purple","gray","yellow"];
 const colors2 = ["orange","red","blue","green","purple","brown","yellow","gray"];

 let colorIndex =0;
 let fontColorIndex =0;
 
 function changeColors() {
  changeBgColor();
  changeColor();
}
 function changeBgColor() {
  document.bgColor = colors[colorIndex];
  colorIndex = (colorIndex + 1) % colors.length;
 }
 
 function changeColor() {
    document.body.style.color = colors2[fontColorIndex];
    fontColorIndex = (fontColorIndex + 1) % colors2.length;
   }
 
  let theIntervalId;
 const theButton = document.getElementById('theButton');
     
    theButton.addEventListener('click', () => {
      console.log('button one clicked');
      if (!theIntervalId) {
        theIntervalId = setInterval(changeColors, 1000);
        theButton.innerText = 'Stop';
      } else {
        clearInterval(theIntervalId);
        theIntervalId = undefined;
        theButton.innerText = 'Start';
      }
        
    });
 
}());




