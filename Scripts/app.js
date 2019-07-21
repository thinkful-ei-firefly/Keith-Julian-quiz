/**
 * Keiths to do / wish list
 * 2) randomize the answers (like have an array of possible false answers to draw from)
 * 3) randomize where the correct answer is
 * 4) add more pokemon and randomize the quiz
 * 12) add names to bottom
 */

let selected = 0;
$(function(){    
    let index = 0;
    let right = 0; 
    let onQuestion = false;
    let CurrentAnswer = 0;
    let answer = 0;

    $('.survey').submit(event => {
        event.preventDefault();
        if (index === 10){
            //take to finish screen
            index++;
            screenStuff.finish(right);
            return;
        }
        if (index === 11){
            screenStuff.startScreen();
            index = 0;
            right = 0;
            return;
        }
        if (!onQuestion){       //SEE QUESTION
            //if its not on a question
            //load everything
            //then index
            screenStuff.showQuiz();
            answer = Math.floor(Math.random()* 386) +1;
            nextQuestion(answer);
            screenStuff.makeSilhouette(answer);
            onQuestion = true;
            $('#qnumber').empty();
            $('#qnumber').append(`Quesion ${index + 1} / 10`);
        } else {         //SEE ANSWER
            if (selected === 0){
                alert('Please Select An Answer!');
                return;
            }
            checkAnswer(answer); 
            screenStuff.showanswer(answer);
            onQuestion = false;
            screenStuff.showImage(answer);
            index++;
        }

        if (index === 10){
            $('.button').attr('value', 'Finish!');
        }
    });

    function checkAnswer(ans){
        if (selected === CurrentAnswer){
            $('#question').empty();
            $('#question').append(`Correct! 
             It's ${info.getName(ans)}`);
            right++;
        } else {
            $('#question').empty();
            $('#question').append(`Incorrect! 
             It's ${info.getName(ans)}`);
        }
        $('#qright').empty();
        $('#qright').append(`Score: ${right}`);
        selected = 0;
        $('.field').toggleClass('pressed', false)
    }

    function nextQuestion(ans){
        
        $('p').empty(); // empty the choices
        for (let i = 0; i < $('p').length; i++){ //iterate through the paragraphs
            let temp = $('p')[i]; //get the indexed paragraph
            let num = Math.floor(Math.random()* 386) +1; // get a random number
            while (num === ans){ // if the number is == answer reset it
                num = Math.floor(Math.random()* 386) +1;
            }
            temp.append(info.getName(num)); //set the paragraphs name to the names[index]
        }
        let answerSpot = Math.floor(Math.random()* 4) +1; //randomize the spot for answer
        CurrentAnswer = answerSpot; //sets the "current answer" marker to that spor
        let temp = $('p')[CurrentAnswer - 1]; //get the p for the right answer spot
        $(temp).empty(); //empty it
        $(temp).append(info.getName(ans)); //set its name

    }

    screenStuff.startScreen();
    eventHandler.radio();
});