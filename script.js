console.log("welcome to musify")
let songIndex=0;
let audioElement=new Audio('drop-it-124014.mp3');
let masterPlay=document.getElementById('masterPlay');
let songs=[
    {songname:"closer", filePath:"mp3\drop-it-124014.mp3" },
    {songname:"closer", filePath:"mp3\drop-it-124014.mp3" }
]

//audioElement.play() ;
masterPlay.addEventListener('click',()=>{
    if(audioElement.paused){
        audioElement.play();
        //masterPlay.remove('fa-2x fa-solid fa-play-circle');
        //masterPlay.add('fa-2x fa-solid fa-pause-circle');
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');

    }
    else
    {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');

    }
    
})

