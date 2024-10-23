let didIWin = (givenNumber, guess) =>
{
    if (givenNumber < guess)
        document.getElementById('big_small').innerHTML = "Plus grand";
    else if (givenNumber > guess)
        document.getElementById('big_small').innerHTML = "Plus petit";
    else
        return (true);
    return (false);
}

let give_guess = (guess) =>
{
    if (guess < 0 || guess > 50)
        return (false);
    else
        return (true);
}

let gamePlay = () =>
{
    let givenNumber_click = true, win_ckecker = 0;
    let givenNumber_button = document.querySelector(".submit-button");
    let count = 0, guess_pass = 0, guess_checker = 0, guess = 0;
    let min_range = 0, max_range = 50;
    document.getElementById('guess_give').innerHTML = `Give a number between 0 and 50:`;

    givenNumber_button.addEventListener('click', () => {
        if (givenNumber_click && guess_pass === 1) {
            count++;
            givenNumber = document.getElementById('number').value;
            win_ckecker = didIWin(givenNumber, guess);
            if (win_ckecker === true) {
                document.querySelector('body').innerHTML = `NICE YOU FINALY GUESSED AFTER ${count} TIMES`;
                return (0);
            }
            if (givenNumber > guess && givenNumber < max_range)
                max_range = givenNumber;
            if (givenNumber < guess && givenNumber > min_range)
                min_range = givenNumber;
            document.getElementById('guess_give').innerHTML = `Guess a number (${min_range} < ? < ${max_range}):`;
            document.getElementById('count').innerHTML = `GUESS AGAIN !!! Number of guesses: ${count}`;
        }
        if (givenNumber_click && guess_pass === 0) {
            document.getElementById('guess_give').innerHTML = `Give a number between ${min_range} and ${max_range}:`;
            guess_checker = give_guess(document.getElementById('number').value);
            if (guess_checker === true) {
                guess_pass = 1;
                guess = document.getElementById('number').value;
                document.getElementById('guess_give').innerHTML = `Guess a number (${min_range} < ? < ${max_range}):`;
            }
        }
    });
}

gamePlay();
