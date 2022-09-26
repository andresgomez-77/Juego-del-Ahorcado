let sound = new Audio('./musica/Situa.mp3');
empezar.addEventListener("click",()=>{
    sound.play();
});
playBtn.addEventListener("click",()=>{
    sound.play();
});
pauseBtn.addEventListener("click",()=>{
    sound.pause();
});