
      var videoSrc='https://www.youtube.com/embed/fxB4k7oR064';


      $('#exampleModal').on('show.bs.modal', function () {  
        var iframe=$('#iframeVideo');
        iframe.attr("src", videoSrc);
      });

      $('#exampleModal').on('hidden.bs.modal', function (e) {
        
        var iframe=$('#iframeVideo');
        iframe.attr("src", videoSrc);

      });
