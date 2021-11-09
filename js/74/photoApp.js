(function () {
  'use strict';

  const photoTitle=$(`#photo h3`);
  const photoPic=$(`#photo img`);
  const photoDiv=$(`#photo`);
  const leftArr=$(`#left`);
  const rightArr=$(`#right`);

  
  

  function refreshPicture() {

   $('#start').click(() => {
       console.log($(`#pick`).val());
    $.getJSON(`https://api.flickr.com/services/feeds/photos_public.gne?format=json&jsoncallback=?`, { tags: $(`#pick`).val() })
        .then(data => {
        console.log(data, data.items);
        //want to loop thru items and get title and picture url = media.m
        
        data.items.forEach(item => {
            const newPhoto=$(`<h2>${item.title}</h2><img src="${item.media.m}"> `).appendTo(photoTitle);
           
            
        
        });

        $('.control').show();
        refreshPicture();
      
        
        });
   
    });

    
     leftArr.click(()=>{
        
        
        refreshPicture();
    });
    }
    refreshPicture();

        
}());