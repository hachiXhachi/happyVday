let heart = document.getElementsByClassName('heart')[0];
let player = document.getElementsByClassName('player')[0];
let card = document.getElementsByClassName('container')[0];
let arrow = document.getElementsByClassName('arrow-icon')[0];
let loadingScreen = document.getElementById('loadingScreen');
let heartTxt = document.getElementsByClassName('heart-text')[0];
let hrt = document.getElementsByClassName('wrapper');
let iframe = document.querySelector('.player');
let letter = document.querySelector('.aletter');
const audioPlayer = document.getElementById("audioPlayer");
let arrowClickCount = 0;

$(function() {
    var ANIMATION_TIME = 500;
    var envelope = $("#envelope");
    var envelopeUp = $("#envelope-up");
    var card = $('#card');
    var close = $('#close');
    var send = $('#mailit');

    envelope.click(function() {
        if (!$(this).hasClass('flip')) {
            $(this).removeClass('pulse');
            $(this).addClass('flip');
            envelopeUp.fadeOut(ANIMATION_TIME);
            window.setTimeout(function() {
                card.find('h1').hide().fadeIn(300);
                card.css('display', 'block');
                arrow.classList.add('hidden');
            }, ANIMATION_TIME);
        }
    });

    close.click(function(e) {
        card.css('display', 'none');
        envelope.removeClass('flip').addClass('flip-back');
        envelopeUp.fadeIn(ANIMATION_TIME);
        window.setTimeout(function() {
            envelope.removeClass('flip-back');
            envelope.addClass('pulse');
            arrow.classList.remove('hidden');
        }, ANIMATION_TIME);
        e.stopPropagation();
    });

});

heart.addEventListener('click', () => {
    audioPlayer.play();
    heart.classList.remove('heart--default');
    heart.classList.add("heart--clicked");

    // Show loading screen
    setTimeout(() => {
        heart.style.display = "none";
        card.classList.remove('hidden');
        arrow.classList.remove('hidden');
        heartTxt.classList.add('hidden');
        // Hide loading screen
    }, 1000);
});

arrow.addEventListener('click', () => {
    arrowClickCount++; 
    if (arrowClickCount === 1) {
        loadingScreen.style.display = "flex";
    } else {
        loadingScreen.style.display = "none";
    }

    player.classList.toggle('hidden');
    card.classList.toggle('hidden');
    arrow.classList.toggle('open');
    arrow.classList.toggle('arrow--pos');
    letter.classList.toggle('animate');

    document.querySelector('.wrapper').classList.toggle('hidden'); // Toggle visibility of the third layer
    
    // Check if audio player is playing and pause it
    if (!audioPlayer.paused) {
        audioPlayer.pause();
    }
});

// Listen to the iframe load event
iframe.onload = function() {
    // Hide loading screen when iframe is fully loaded
    loadingScreen.style.display = "none";
};
