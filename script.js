
const heroBgVideo = document.querySelector("#hero-bg-video")

heroBgVideo.style.opacity = 1 ;

    heroBgVideo.addEventListener('timeupdate',()=>{
        if(heroBgVideo.duration - heroBgVideo.currentTime <= 0.8){
            heroBgVideo.style.opacity = 0;
        }
    })
    heroBgVideo.addEventListener('timeupdate',()=>{
        if(heroBgVideo.currentTime < 0.8){
            heroBgVideo.style.opacity = 1;
        }
    })

