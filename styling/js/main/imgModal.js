window.onload=function() {
    var modal = document.getElementById('myModal');
        var img = $('.styling_img');
        var modalImg = $('#img01');
        var captionText = document.getElementById('caption');
        $('.styling_img').click(function() {
            modal.style.display='block';
            var newSrc = this.src;
            modalImg.attr('src',newSrc);
            //captionText.innerHTML = this.alt;
        });
        var span = document.getElementsByClassName('close')[0];
        span.onclick = function() {
            modal.style.display = 'none';
        }
        window.onclick = function(event) { 
          if(event.target == modal){    
               modal.style.display = 'none'
          }
        }
}
