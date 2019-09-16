
    //click enter to check too
        window.addEventListener('load', init);
            var input = document.getElementById("word-input");
            input.addEventListener("keyup", function (event) {
                if (event.keyCode === 13) {
                    event.preventDefault();
                    document.getElementById("myBtn").click();
                }
            });
            // Globals


            let time = 0;
            let countPagee = 0;
            let isPlaying;
            let wordIndex = 0;
            let result = 0;

            // DOM Elements
            const wordInput = document.querySelector('#word-input');
            const currentWord = document.querySelector('#current-word');
            const timeDisplay = document.querySelector('#time');
            const message = document.querySelector('#message');
            const countPage = document.querySelector('#count');
            const resultScore = document.querySelector('#result');

            const words = [
                'Spent 24 hours, I need more hours with you',
                'You spent the weekend getting even, ooh',
                'We spent the late nights making things right between us',
                'But now it’s all good, babe',
                'Roll that back wood, babe',
                'And play me close',
                'Cause girls like you run ’round with guys like me',
                'Til sun down when I come through',
                'I need a girl like you, yeah yeah',
                'Girls like you love fun, and yeah, me too',
                'What I want when I come through',
                'I need a girl like you, yeah yeah',
                'Yeah yeah yeah, yeah yeah yeah',
                'I need a girl like you, yeah yeah',
                'Yeah yeah yeah, yeah yeah yeah',
                'I need a girl like you',
                'I spent last night on the last flight to you',
                'Took a whole day up tryna get way up, ooh',
                'We spent the daylight tryna make things right between us',
                'But now it’s all good, babe',
                'Roll that back wood, babe',
                'And play me close',
                'Cause girls like you run ’round with guys like me',
                'Til sun down when I come through',
                'I need a girl like you, yeah yeah',
                'Girls like you love fun, and yeah, me too',
                'What I want when I come through',
                'I need a girl like you, yeah yeah',
                'Yeah yeah yeah, yeah yeah yeah',
                'I need a girl like you, yeah yeah',
                'Yeah yeah yeah, yeah yeah yeah',
                'I need a girl like you, yeah yeah',
                'I need a girl like you, yeah yeah',
                'I need a girl like you',
                'Maybe it’s 6:45',
                'Maybe I’m barely alive',
                'Maybe you’ve taken my shit for the last time',
                'Maybe I know that I’m drunk',
                'Maybe I know you’re the one',
                'Maybe you’re thinking it’s better if you drive',
                'Cause girls like you run ’round with guys like me',
                'Til sun down when I come through',
                'I need a girl like you, yeah',
                'Cause girls like you run ’round with guys like me',
                'Til sun down when I come through',
                'I need a girl like you, yeah yeah',
                'Girls like you love fun, and yeah, me too',
                'What I want when I come through',
                'I need a girl like you, yeah yeah',
                'Yeah yeah yeah, yeah yeah yeah',
                'I need a girl like you, yeah yeah',
                'Yeah yeah yeah, yeah yeah yeah',
                'I need a girl like you.',
                'End Please Click "END" Button'
            ];

            // Initialize Game
            function init() {
                // Load word from array
                showWord(words);

                // Call countime every second
                setInterval(countime, 1000);

            }

            // Start match
            function startMatch() {
                if (matchWords()) {
                    wordIndex++;
                    countPagee++;
                    countPage.innerHTML = countPagee;
                    isPlaying = true;
                    showWord(words);
                    wordInput.value = '';
                    if(countPagee == 53){
                        document.getElementById('endbutton').style.display = 'inline-block';
                    }
                }

            }

            // Match currentWord to wordInput
            function matchWords() {
                if (wordInput.value === currentWord.innerHTML) {
                    message.innerHTML = 'Correct!!!';
                    return true;
                } else {
                    message.innerHTML = 'Try Again!!!';
                    return false;
                }
            }

            // Pick & show word
            function showWord(words) {
                currentWord.innerHTML = words[wordIndex];
            }

            // countime timer
            function countime() {
                // Make sure time is not run out
                if (time >= 0) {
                    // Decrement
                    time++;
                } 
                // Show time
                timeDisplay.innerHTML = time;
            }

            function scrolltoBottom() {
                window.scrollTo(0,document.body.scrollHeight);
                result = time;
                resultScore.innerHTML = result;
              }
              
              function reloadd(){
                var elmnt = document.getElementById("header");
                elmnt.scrollIntoView();
                location.reload();
              }