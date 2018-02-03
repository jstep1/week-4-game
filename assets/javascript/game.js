$(document).ready(function () {
    var random = Math.floor(Math.random() * 101) + 19;
        $('#number').text(random);
    
    var reset = function () {
        score = 0;
        $('#score').text(score)
        random = Math.floor(Math.random() * 101) + 19;
        $('#number').text(random);
        randomRed = Math.floor(Math.random() * 12) + 1;
        randomBlue = Math.floor(Math.random() * 12) + 1;
        randomYellow = Math.floor(Math.random() * 12) + 1;
        randomGreen = Math.floor(Math.random() * 12) + 1;
        $('#win').text(wins);
        $('#loss').text(losses);
    }

    var wins = 0;
    var losses = 0;
    var score = 0;

    var randomRed = Math.floor(Math.random() * 12) + 1;
    $('#gem-red').on('click', function () {
        score += randomRed;
        $('#score').text(score);
        if(score === random) {
            alert("You win!");
            wins++;
            reset();
        }
        if(score > random) {
            alert("Try again.");
            losses++;
            reset();
        }
    });

    var randomBlue = Math.floor(Math.random() * 12) + 1;
    $('#gem-blue').on('click', function () {
        score += randomBlue;
        $('#score').text(score);
        if(score === random) {
            alert("You win!");
            wins++;
            reset();
        }
        if(score > random) {
            alert("Try again.");
            losses++;
            reset();
        }
    });

    var randomYellow = Math.floor(Math.random() * 12) + 1;
    $('#gem-yellow').on('click', function () {
        score += randomYellow;
        $('#score').text(score);
        if(score === random) {
            alert("You win!");
            wins++;
            reset();
        }
        if(score > random) {
            alert("Try again.");
            losses++;
            reset();
        }
    });

    var randomGreen = Math.floor(Math.random() * 12) + 1;
    $('#gem-green').on('click', function () {
        score += randomGreen;
        $('#score').text(score);
        if(score === random) {
            alert("You win!");
            wins++;
            reset();
        }
        if(score > random) {
            alert("Try again.");
            losses++;
            reset();
        }
    });

    

});


