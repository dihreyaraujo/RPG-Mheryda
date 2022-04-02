let btn = document.getElementById('btn');
let inputName = document.getElementById('input-name');
let password = document.getElementById('password');
let incorrect = document.getElementById('incorrect')

btn.addEventListener('click', function(){
    if(inputName.value == 'dihrey' && password.value == 'dihrey123'){
        window.location.href = 'dihrey.html'
    }
    else{
        incorrect.style.display = 'inline-block';
    }
})


//ativar audio
let bgsong = document.querySelector('audio');
let pause = document.getElementById('pause');
let play = document.getElementById('play');

pause.addEventListener('click', function(){
    pause.style.display = 'none';
    play.style.display = 'inline-block';
    bgsong.play();
})

play.addEventListener('click', function(){
    play.style.display = 'none';
    pause.style.display = 'inline-block';
    bgsong.pause();
})

