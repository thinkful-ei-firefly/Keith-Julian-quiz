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
    let index = 0;
    let right = 0;
    let onQuestion = false;

    $('.survey').submit(event => {
        event.preventDefault();
        if (!onQuestion){       //SEE QUESTION
            //if its not on a question
            //load everything
            //then index
            showQuiz();
            nextQuestion(index);
            makeSilhouette(index);
            onQuestion = true;
            $('#qnumber').empty();
            $('#qnumber').append(`Quesion ${index + 1} / 10`);
        } else {         //SEE ANSWER
            checkAnswer(); 
            showanswer();
            onQuestion = false;
            index++;
        }
        //nother else if
        //load next question
    });

    function checkAnswer(){
        let radioValue = parseInt($('input[name="answer"]:checked').val());
        if (radioValue === questions[index][4]){
            $('#question').empty();
            $('#question').append(`Correct! 
             It's ${questions[index][questions[index][4]-1]}`);
            right++;
        } else {
            $('#question').empty();
            $('#question').append(`Incorrect! 
             It's ${questions[index][questions[index][4]-1]}`);
        }
        $('input[name="answer"]:checked').prop('checked', false);
        $('#qright').empty();
        $('#qright').append(`Score: ${right}`);
    }

    function nextQuestion(z){
        $('p').empty();
        for (let i = 0; i < $('p').length; i++){
            let temp = $('p')[i];
            temp.append(questions[z][i]);
        }
    }

   function makeSilhouette(i){
        let canvas = document.getElementById('Pokemon');
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
        loadedImg.src = pictures[i]; 
    }

    function startScreen(){
        //hide all elements besides the label? and the button
        $('.field').toggleClass('hidden', true);
        $('.button').toggleClass('buttonCentre', true);
        $('.button').attr('value', 'Start!');
        $('#qright').empty();
        $('#qright').append(`Score: ${right}`);
        $('#qnumber').empty();
        $('#qnumber').append('Quesion 1 / 10');
    }
    function showQuiz(){
        //show all elements
        nextQuestion(index);
        makeSilhouette(index);
        $('#question').empty();
        $('#question').append('Whos That Pokemon?');
        $('.field').toggleClass('hidden', false);
        $('.button').toggleClass('buttonCentre', false);
        $('#qright').toggleClass('hidden', false);
        $('#qnumber').toggleClass('hidden', false);
    }
    function showanswer(){
        //hide form and update text
        $('.field').toggleClass('hidden', true);
        $('.button').toggleClass('buttonCentre', true);
        $('.button').attr('value', 'Continue!');
    }

    startScreen();
});

/***
 * my to do list
 * show pokemon on answer
 * update text on answer
 * revert text on question
 * 
 * 
 */