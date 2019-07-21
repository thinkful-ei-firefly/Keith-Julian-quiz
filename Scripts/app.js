/**
 * Keiths to do / wish list
 * 2) randomize the answers (like have an array of possible false answers to draw from)
 * 3) randomize where the correct answer is
 * 4) add more pokemon and randomize the quiz
 * 12) add names to bottom
 */
$(function(){
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
    
    let newQuestions = [1, 6, 7, 25, 129, 131, 133, 150, 156, 380];
    let index = 0;
    let right = 0;
    let selected = 0;
    let onQuestion = false;
    let CurrentAnswer = 0;

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

    function checkAnswer(){
        if (selected === CurrentAnswer){
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
            let num = Math.floor(Math.random()* 386) +1;
            while (num === newQuestions[index]){
                num = Math.floor(Math.random()* 386) +1;
            }
            temp.append(names[num]);
        }
        let answerSpot = Math.floor(Math.random()* 4) +1;
        CurrentAnswer = answerSpot;
        let temp = $('p')[CurrentAnswer - 1];
        $(temp).empty();
        $(temp).append(names[newQuestions[index]]);

    }

    startScreen();
});