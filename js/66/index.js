(function(){
    'use strict'; 
   
   
   
    const colors = ["red","orange","green","blue","brown","purple","gray","yellow"];
    const colors2 = ["orange","red","blue","green","purple","brown","yellow","gray"];
    
    function insertRow(){
        const colorsTable = get('colorsTable');
        const row = colorsTable.insertRow();
        const timeCell = row.insertCell();
        const now=new Date();
        timeCell.innerText=now.toLocaleTimeString(); 
        const colorCell = row.insertCell();
        colorCell.innerText=colors2[fontColorIndex];
        const backgroundColorCell = row.insertCell();
        backgroundColorCell.innerText=colors[colorIndex];
        let rowColor=colors2[fontColorIndex];
        let backgroundColor=colors[colorIndex];
        row.addEventListener('click', () => {
            clearInterval(theIntervalId);
            theIntervalId = null;
            theButton.innerText = 'Start';
            document.body.style.backgroundColor =backgroundColor;
            document.body.style.color = rowColor;
              
          });
       
    }
    
    
    function get(id) {
        return document.getElementById(id);
      }
    

    let colorIndex =0;
    let fontColorIndex =0;
    
    function changeColors() {
        changeBgColor();
        changeColor();
        
      }
       function changeBgColor() {
        document.body.style.backgroundColor = colors[colorIndex];
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
              theIntervalId = setInterval(() => {
                  insertRow();
                  changeColors();
              }, 1000);
              theButton.innerText = 'Stop';
            } else {
              clearInterval(theIntervalId);
              theIntervalId = undefined;
              theButton.innerText = 'Start';
            }
              
          });
       
      }());