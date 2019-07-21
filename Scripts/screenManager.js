const screenStuff = (function(){
  function showanswer(){
    //hide form and update text
    $('.field').toggleClass('hidden', true);
    $('.button').toggleClass('buttonCentre', true);
    $('.button').attr('value', 'Continue!');
  }

  function showImage(int){
    var x = window.matchMedia("(min-width: 600px)");
    let canvas = document.getElementById('Pokemon');
    let ctx = canvas.getContext('2d');
    loadedImg = new Image();
    loadedImg.onload = function(){
        if (!x.matches){
            canvas.width= 100;
            canvas.height = 100;           
            ctx.drawImage(this, 0, 0, 100, 100);
        } else {
            canvas.height = this.naturalHeight;
            canvas.width = this.naturalWidth;            
            ctx.drawImage(this, 0, 0);
        }
    };
    loadedImg.src = info.getPicture(int);
  }
  
  function makeSilhouette(int){
    var x = window.matchMedia("(min-width: 600px)");
    let canvas = document.getElementById('Pokemon');
    let ctx = canvas.getContext('2d');
    loadedImg = new Image();
    loadedImg.onload = function(){
        
        if (!x.matches){
            canvas.width= 100;
            canvas.height = 100;           
            ctx.drawImage(this, 0, 0, 100, 100);
        } else {
            canvas.height = this.naturalHeight;
            canvas.width = this.naturalWidth;            
            ctx.drawImage(this, 0, 0);
        }
  
        let rawImage = ctx.getImageData(0, 0,canvas.width,canvas.height);
  
        for (let i = 0; i < rawImage.data.length; i+=4){
            if(rawImage.data[i+3] >= 100) {
                rawImage.data[i] = 30; // 0-255
                rawImage.data[i+1] = 30; // 1-256
                rawImage.data[i+2] = 30;
                rawImage.data[i+3] = 255;
            } else {
                rawImage.data[i+3] = 0;
            }
        }
        ctx.putImageData(rawImage, 0, 0);
    };
    loadedImg.src = info.getPicture(int);
  }
  
  function startScreen(right){
    //hide all elements besides the label? and the button
    $('.field').toggleClass('hidden', true);
    $('.button').toggleClass('buttonCentre', true);
    $('.button').attr('value', 'Start!');
    $('#qright').empty();
    $('#qright').append(`Score: ${right}`);
    $('#qnumber').empty();
    $('#qnumber').append('Quesion 1 / 10');
    $('#question').empty();
    $('#question').append('Ready to Take The Pokemon Quiz?');
  }
  function showQuiz(int){
    //show all elements
    nextQuestion(int);
    makeSilhouette(int);
    $('#question').empty();
    $('#question').append('Whos That Pokemon?');
    $('.field').toggleClass('hidden', false);
    $('.button').toggleClass('buttonCentre', false);
    $('.button').attr('value', 'Submit!');
    $('#qright').toggleClass('hidden', false);
    $('#qnumber').toggleClass('hidden', false);
    $('#Pokemon').toggleClass('hidden', false);
  }
  function showanswer(){
    //hide form and update text
    $('.field').toggleClass('hidden', true);
    $('.button').toggleClass('buttonCentre', true);
    $('.button').attr('value', 'Continue!');
  }
  function finish(right){
    index = 11;
    $('.field').toggleClass('hidden', true);
    $('.button').toggleClass('buttonCentre', true);
    $('#qright').toggleClass('hidden', true);
    $('#qnumber').toggleClass('hidden', true);
    $('#Pokemon').toggleClass('hidden', true);
    $('.button').attr('value', 'Play Again!');
    //set text to display answers correct
    $('#question').empty();
        $('#question').append(`Congratulations! 
         You got ${right} correct out of 10!`);
  }
  
    return {
      finish,
      showanswer,
      showImage,
      showQuiz,
      makeSilhouette,
      startScreen
    };

}());