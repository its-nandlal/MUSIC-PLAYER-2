var arts = [
    {mus: "music/m1.mp3"},
    {mus: "music/m2.mp3"},
    {mus: "music/m3.mp3"}
]

var artimg = [
    {ig: "https://imgs.search.brave.com/VS8LjmJ123miOIyttbDe5IXdsyUnZd5cCTc2ElX_Tk8/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWcu/aW5kaWFmb3J1bXMu/Y29tL21lZGlhLzY0/MHgwLzU5LzAwMTEt/cmFuYmlyLWthcG9v/ci1pbi1hbmltYWwu/anBn"},
    {ig: "https://images.unsplash.com/photo-1700336472296-a2b47e5222e2?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDF8fHxlbnwwfHx8fHw%3D"},
    {ig: "https://images.unsplash.com/photo-1680063005720-7aca8e9db809?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDExfHx8ZW58MHx8fHx8"},
]

var artnam = [
    {nm: "Arjun Vally"},
    {nm: "Unone1"},
    {nm: "Unone2"}
]

var audio = new Audio("music/m1.mp3")
var ppbtn = document.querySelector(".ppbtn")
var images = document.querySelector("#imge")
var arnm = document.querySelector("#ar-nm")


document.addEventListener("DOMContentLoaded",()=>{

    ppbtn.addEventListener("click",()=>{
        if(audio.paused){
            audio.play()
            ppbtn.innerHTML = `<i class="ri-pause-fill"></i>`
            images.src = artimg[st].ig
            arnm.textContent = artnam[st].nm
        }
        else{
            audio.pause()
            ppbtn.innerHTML = `<i class="ri-play-fill"></i>`
        }

        audio.addEventListener("timeupdate",()=>{
            var s = ft(audio.currentTime)
            var m = ft(audio.duration)

            document.querySelector("#ctm").textContent = s
            document.querySelector("#dur").textContent = m
            document.querySelector("#range-m").value = (audio.currentTime / audio.duration *100)
        })

        var ft = (time)=>{
            var min = Math.floor(time/60)
            var sec = Math.floor(time%60)

            return(
                (min<10?"0":"")+min + ":" + (sec<10?"0":"")+sec
            )
        }

    })

    document.querySelector("#range-m").addEventListener("change",()=>{
        audio.currentTime = document.querySelector("#range-m").value * audio.duration/100
    })

})


var st = 0
document.querySelector("#next").addEventListener("click",()=>{
    if(st==3){
        st =1
    }

    else if(st==0){
        st =2;
    }
    else{
        st +=1
    }

    audio.src = `music/m${st}.mp3`
    audio.play();
    images.src = artimg[st-1].ig;
    arnm.textContent = artnam[st-1].nm;
    ppbtn.innerHTML = `<i class="ri-pause-fill"></i>`

})


document.querySelector("#priv").addEventListener("click",()=>{
    if(st==1){
        st =3;
    }

    else if(st==0){
        st =3;
    }
    
    else{
        st -=1;
    }

    audio.src = `music/m${st}.mp3`;
    audio.play();
    images.src = artimg[st-1].ig
    arnm.textContent = artnam[st-1].nm
    ppbtn.innerHTML = `<i class="ri-pause-fill"></i>`

})