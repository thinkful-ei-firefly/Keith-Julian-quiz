/**
 * Keiths to do / wish list
 * 2) randomize the answers (like have an array of possible false answers to draw from)
 * 3) randomize where the correct answer is
 * 4) add more pokemon and randomize the quiz
 * 12) add names to bottom
 */
$(function(){
    let pictures = [
        "Pictures/1.png",
        "Pictures/6.png",
        "Pictures/7.png",
        "Pictures/25.png",
        "Pictures/129.png",
        "Pictures/131.png",
        "Pictures/133.png",
        "Pictures/150.png",
        "Pictures/156.png",
        "Pictures/380.png",
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
    //first one is empty so the pokedex numbers line up with array numbers
    let names = ['', 'Bulbasaur', 'Ivysaur', 'Venusaur', 'Charmander', 'Charmeleon', 'Charizard', 'Squirtle', 'Wartortle', 'Blastoise',
        'Caterpie', 'Metapod', 'Butterfree', 'Weedle', 'Kakuna', 'Beedrill', 'Pidgey', 'Pidgeotto', 'Pidgeot', 'Rattata', 'Raticate',
        'Spearow', 'Fearow', 'Ekans', 'Arbok', 'Pikachu', 'Raichu', 'Sandshrew', 'Sandslash', 'Nidoran(Female)', 'Nidorina', 'Nidoqueen',
        'Nidoran(male)', 'Nidorino', 'Nidoking', 'Celfairy', 'Clefable', 'Vulpix', 'Ninetails', 'Jigglypuff', 'Wigglytuff', 'Zubat', 'Golbat',
        'Oddish', 'Gloom', 'Vileplume', 'Paras', 'Parasect', 'Venonat', 'Venomoth', 'Diglett', 'Dugtrio', 'Meowth', 'Persian', 'Psyduck',
        'Golduck', 'Mankey', 'Primeape', 'Growlithe', 'Arcanine', 'Poliwag', 'Poliwhirl', 'Poliwrath', 'Abra', 'Kadabra', 'Alakazam', 'Machop',
        'Machoke', 'Machamp', 'Bellsprout', 'Weepinbell', 'Victreebel', 'Tentacool', 'Tentacruel', 'Geodude', 'Gravler', 'Golem', 'Ponyta',
        'Rapidash', 'Slowpoke', 'Slowbro', 'Magnemite', 'Magneton', `Farfetch'd`, 'Doduo', 'Dodrio', 'Seel', 'Dewgong', 'Grimer', 'Muk',
        'Shellder', 'Cloyster', 'Gastly', 'Haunter', 'Gengar', 'Onix', 'Drowzee', 'Hypno', 'Krabby', 'Kingler', 'Voltorb', 'Electrode',
        'Exeggcute', 'Exeggutor', 'Cubone', 'Marowak', 'Hitmonlee', 'Hitmonchan', 'Likitung', 'Koffing', 'Weexing', 'Rhyhorn', 'Rhydon',
        'Chansey', 'Tengela', 'Kabgaskhan', 'Horsea', 'Seadra', 'Goldeen', 'Seaking', 'Staryu', 'Starmie', 'Mr. Mime', 'Scyther', 'Jynx',
        'Electabuzz', 'Magmar', 'Pinsir', 'Taurus', 'Magikarp', 'Garados', 'Lapras', 'Ditto', 'Eevee', 'Vaporeon', 'Jolteon', 'Flareon',
        'Porygon', 'Omanyte', 'Omastar', 'Kabuto', 'Kabutops', 'Aerodactyl', 'Snorlax', 'Articuno', 'Zapdos', 'Moltres', 'Dratini',
        'Dragonair', 'Dragonite', 'Mewtwo', 'Mew', 'Chikorita', 'Bayleef', 'Meganium', 'Cyndaquil', 'Quilava', 'Typhlosion', 'Totodile',
        'Crocnaw', 'Feraligatr', 'Sentret', 'Furret', 'Hoothoot', 'Noctowl', 'Ledyba', 'Ledian', 'Spinarak', 'Ariados', 'Crobat', 'Chinchou',
        'Lanturn', 'Pichu', 'Cleffa', 'Igglybuff', 'Togepi', 'Togetic', 'Natu', 'Xatu', 'Mareep', 'Flaaffy', 'Ampharos', 'Bellossom', 'Marill',
        'Azumarill', 'Sudowoodo', 'Politoed', 'Hoppip', 'Skiploom', 'Jumpluff', 'Aipom', 'Sunkern', 'Sunflora', 'Yanma', 'Wooper', 'Quagsire',
        'Espeon', 'Unbreon', 'Murkrow', 'Slowking', 'Misdreavus', 'Unown', 'Wobbuffet', 'Girafarig', 'Pineco', 'Forretress', 'Dunsparce',
        'Gligar', 'Steelix', 'Snubbull', 'Granbull', 'Qwilfish', 'Scizor', 'Shuckle', 'Heracross', 'Sneasel', 'Teddiursa', 'Ursaring',
        'Slugma', 'Macargo', 'Swinub', 'Poliswine', 'Corsola', 'Remoraid', 'Octillery', 'Delibird', 'Mantine', 'Skarmory', 'Houndour',
        'Houndoom', 'Kingdra', 'Phanpy', 'Donphan', 'Porygon2', 'Stantler', 'Smeargle', 'Tyrogue', 'Hitmontop', 'Smoochum', 'Elekid', 
        'Magby', 'Milktank', 'Blissey', 'Raikou', 'Entei', 'Suicune', 'Larvitar', 'Pupitar', 'Tyranitar', 'Lugia', 'Ho-Oh', 'Celebi',
        'Treeko', 'Grovyle', 'Sceptile', 'Torchic', 'Combusken', 'Blaziken', 'Mudkip', 'Marshtomp', 'Swampert', 'Poochyena', 'Mightyena',
        'Zigzagoon', 'Linoone', 'Wurmple', 'Silicoon', 'Beautifly', 'Cascoon', 'Dustox', 'Lotad', 'Lombre', 'Ludicolo', 'Seedot', 'Nuzleaf',
        'Shiftry', 'Taillow', 'Swellow', 'Wingull', 'Pelipper', 'Ralts', 'Kirlia', 'Gardevoir', 'Surskit', 'Masquerain', 'Shroomish',
        'Breloom', 'Slakoth', 'Vigoroth', 'Slaking', 'Nicada', 'Ninjask', 'Shedinja', 'Whismur', 'Loudred', 'Exploud', 'Majuhita',
        'Haritama', 'Azurill', 'Nozepass', 'Skitty', 'Delcatty', 'Sableye', 'Mawile', 'Aron', 'Larion', 'Aggron', 'Meditite', 'Medicham', 
        'Electrike', 'Manectric', 'Plusle', 'Minum', 'Volbeat', 'Illumise', 'Roselia', 'Gulpin', 'Swalot', 'Carvanha', 'Sharkpedo', 
        'Wailmer', 'Wailord', 'Numel', 'Camerupt', 'Torkoal', 'Spoink', 'Grumpig', 'Spinda', 'Trapinch', 'Vibrava', 'Flygon', 'Cacnea', 
        'Cacturne', 'Swablu', 'Altaria', 'Zangoose', 'Seviper', 'Lunatone', 'Solrock', 'Barboach', 'Whiscash', 'Corphish', 'Crawdaunt', 
        'Baltoy', 'Claydol', 'Lileep', 'Cradily', 'Anorith', 'Armaldo', 'Feebas', 'Milotic', 'Castform', 'Kecleon', 'Shuppet', 'Banette', 
        'Duskull', 'Dusclops', 'Tropius', 'Chimecho', 'Absol', 'Wynaut', 'Snorunt', 'Glalie', 'Spheal', 'Sealeo', 'Walrein', 'Clampearl',
        'Huntail', 'Gorebyss', 'Relicanth', 'Luvdisc', 'Bagon', 'Shelgon', 'Salamence', 'Beldum', 'Metang', 'Metagross', 'Regirock', 
        'Regice', 'Registeel', 'Latias', 'Latios', 'Kyogre', 'Groudon', 'Rayquaza', 'Jirachi', 'Deoxys'
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
        /*$('p').empty();
        for (let i = 0; i < $('p').length; i++){
            let temp = $('p')[i];
            temp.append(questions[z][i]);
        } old code */
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