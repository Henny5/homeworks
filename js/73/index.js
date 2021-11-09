(function () {
    'use strict';

  const errorElem = $('#error');
  const ourVideoList = $(`#vid`);
  const mainVidPlayer = $(`#mainVid`);

     async function loadJson(url) {
          try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`${response.status} ${response.statusText}`);
      }
      const result = await response.json();
      return result;
    }
    catch (e) {
      errorElem.text(e.message);
    }
  }

  async function forEach(){
    const videos = await loadJson('videos.json');
     if (videos) {
      console.log(videos);
  }
   videos.forEach(video => {
     console.log(video);
        const listItem= $(`<li>${video.name} <img src="${video.picture}"> </li>`).appendTo(ourVideoList);
        //video and not videos bec we want the individual video from the array not the whole array , do img tag to make sure we get the actual picture not just the path

        listItem.click(()=>{
          mainVidPlayer.attr('src', video.url);
          //want this specific video so know wich url we want
           mainVidPlayer[0].play();
          console.log(video);
        });

      });


}



forEach();
  
  

}());