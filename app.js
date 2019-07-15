/**
 * Keiths to do / wish list
 * 2) randomize the answers (like have an array of possible false answers to draw from)
 * 3) randomize where the correct answer is
 * 4) add more pokemon and randomize the quiz
 * 12) add names to bottom
 */
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
        ['Eevee', 'Pika', 'Zappy', 'Pikachu', 4],
        ['Eevee', 'Pika', 'Magikarp', 'Pikachu', 3],
        ['Eevee', 'Lapras', 'Zappy', 'Pikachu', 2],
        ['Eevee', 'Pika', 'Zappy', 'Pikachu', 1],
        ['Eevee', 'Pika', 'Zappy', 'Mewtwo', 4],
        ['Eevee', 'Quilava', 'Zappy', 'Pikachu', 2],
        ['Eevee', 'Pika', 'Latias', 'Pikachu', 3]
    ];
    let index = 0;
    let right = 0;
    let selected = 0;
    let onQuestion = false;

    $('.survey').submit(event => {
        event.preventDefault();
        if (index === 10){
            //take to finish screen
            finish();
            return;
        }
        if (index === 11){
            startScreen();
            index = 0;
            right = 0;
            return;
        }
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
            if (selected === 0){
                alert('Please Select An Answer!');
                return;
            }
            checkAnswer(); 
            showanswer();
            onQuestion = false;
            showImage(index);
            index++;
        }

        if (index === 10){
            $('.button').attr('value', 'Finish!');
        }
    });

    $('.field').click(function(){
        const target = $(event.currentTarget);
        const notTarget = $('.field').not(target);
        const pressedBool = $(target).attr('aria-pressed', true);
        notTarget.attr('aria-pressed', false);
        notTarget.toggleClass('pressed', false);
        target.toggleClass('pressed', true);
        $('.field').each(function(mark, value){
            if ($(value).hasClass('pressed'))
                selected = mark + 1;
                return;
        })
    });

    function checkAnswer(){
        if (selected === questions[index][4]){
            $('#question').empty();
            $('#question').append(`Correct! 
             It's ${questions[index][questions[index][4]-1]}`);
            right++;
        } else {
            $('#question').empty();
            $('#question').append(`Incorrect! 
             It's ${questions[index][questions[index][4]-1]}`);
        }
        $('#qright').empty();
        $('#qright').append(`Score: ${right}`);
        selected = 0;
        $('.field').toggleClass('pressed', false)
    }

    function nextQuestion(z){
        $('p').empty();
        for (let i = 0; i < $('p').length; i++){
            let temp = $('p')[i];
            temp.append(questions[z][i]);
        }
    }

    function showImage(i){
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
        loadedImg.src = pictures[i];
    }
   function makeSilhouette(i){
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
        $('#question').empty();
        $('#question').append('Ready to Take The Pokemon Quiz?');
    }
    function showQuiz(){
        //show all elements
        nextQuestion(index);
        makeSilhouette(index);
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

    function finish(){
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

    startScreen();
});