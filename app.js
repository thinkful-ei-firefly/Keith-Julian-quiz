$(function(){
    let pictures = [
        "pictures/1.png",
        "pictures/6.png",
        "pictures/7.png",
        "pictures/25.png",
        "pictures/129.png",
        "pictures/131.png",
        "pictures/133.png",
        "pictures/150.png",
        "pictures/156.png",
        "pictures/380.png",
    ];
    let image = $('#Pokemon');
    let index = 0;
    function updateImage(i = 0){
        image.attr('src', pictures[i]);
    }

    makeSilhouette(0);

    $('.survey').submit(event => {
        event.preventDefault();
        index++;
        makeSilhouette(index);
    });

    function checkAnswer(input){

    }

    function nextQuestion(){
        
    }

   function makeSilhouette(i){
        let canvas = document.getElementById('can');
        updateImage(i);
        let ctx = canvas.getContext('2d');
        loadedImg = new Image();
        loadedImg.onload = function(){
            canvas.height = this.naturalHeight;
            canvas.width = this.naturalWidth;
            ctx.drawImage(this, 0, 0);
        };
        loadedImg.src = $('#Pokemon').attr('src');
        let rawImage = ctx.getImageData(0, 0,canvas.width,canvas.height);
        console.log(ctx.getImageData(0,0,canvas.width,canvas.height));
        /*for (let i = 0; i < rawImage.data.length; i+=4){
            if(rawImage.data[i+3] >= 100) {
                rawImage.data[i] = 30;
                rawImage.data[i+1] = 30;
                rawImage.data[i+2] = 30;
                rawImage.data[i+3] = 255;
            } else {
                rawImage.data[i+3] = 0;
            }
            console.log(`${i} is ${rawImage.data[i]}`);
        }*/
        ctx.putImageData(rawImage, 0, 0);
    }

});

/***
 * my to do list
 * center the image
 * add a default image for the main screen
 * make canvas id can
 * 
 */