(function (){
    'use strict';
  let dragging = null; 
  let offset;
  let nextZIndex = 1;
  let storageArray = [];
  

  $(document)
    .on('mousedown', '.drag', e => {
      console.log('mousedown');
      dragging = $(e.target);
      console.log (e.target);
      dragging.css({zIndex:nextZIndex++});
      offset = { x: e.offsetX, y: e.offsetY };
    })
    .mousemove(e => {
      if (dragging) {
        e.preventDefault(); 
        console.log('mousemove', e.offsetY, e.offsetX);
        dragging.css({ top: e.pageY - offset.y, left: e.pageX - offset.x });
      }
    })
    .mouseup(e => {
      if (dragging) {
        console.log('mouseup');
       const existing =  storageArray.find(item => item.src === e.target.src);
      if(existing){
        existing.top =  e.pageY - offset.y;
        existing.left = e.pageX - offset.x;
      } else {
        storageArray.push({ top: e.pageY - offset.y, left: e.pageX - offset.x, src: e.target.src/*dragging.attr('src') */ })
      }
        localStorage.setItem('bodyParts', JSON.stringify(storageArray));
        dragging = null;
      }
    });

      if (localStorage.bodyParts) {
        const storageArray = JSON.parse(localStorage.bodyParts);
        storageArray.forEach(partInfo => {
            storage.css({
                top: storage.top,
                left: storage.left,
                src: storage.src
      });
    });
  }

}());

//populate the body with two pics
//getstorage= create image the sourse will be waht ur loopoing thru in the catch array and set the top left and source
//and append to wherever want it on html
//bug= that the htmk and the storage iwll overlap = if statement if the html in storage dx reload onto html


