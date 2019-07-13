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
    let questions = [
        ['Bulbasaur', 'Bidoof', 'Plant Dog', 'Bulbasaurus Rex', 1],
        ['Charmander', 'Charizard', 'Fire Dragon', 'Angry Lizard', 2],
        ['Squirtle', 'Buizel', 'Bubble', 'Turtle', 1],
        ['Eevee', 'Pika', 'Zappy', 'Pikachu', 4]
    ];
    let image = $('#Pokemon');
    let index = 0;
    let right = 0;
    function updateImage(i = 0){
        image.attr('src', pictures[i]);
    }

    $('.survey').submit(event => {
        event.preventDefault();
        checkAnswer();
        index++;
        nextQuestion(index);
        updateImage(index);
        makeSilhouette();
    });

    function checkAnswer(){
        let radioValue = parseInt($('input[name="answer"]:checked').val());
        if (radioValue === questions[index][4]){
            alert('Corret');
            right++;
        } else {
            alert('false');
        }
        $('input[name="answer"]:checked').prop('checked', false);
        $('#qright').empty();
        $('#qright').append(`Score: ${right}`);
    }

    function nextQuestion(index){
        $('p').empty();
        for (let i = 0; i < $('p').length; i++){
            let temp = $('p')[i];
            temp.append(questions[index][i]);
        }
    }

    updateImage(0);
    nextQuestion(0);

   function makeSilhouette(i){
        let canvas = document.getElementById('can');
        let ctx = canvas.getContext('2d');
        loadedImg = new Image();
        loadedImg.onload = function(){
            canvas.height = this.naturalHeight;
            canvas.width = this.naturalWidth;
            ctx.drawImage(this, 0, 0);

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
        loadedImg.src = $('#Pokemon').attr('src'); 
    }

});

/***
 * my to do list
 * 
 * add a default image for the main screen
 * 
 * 
 */