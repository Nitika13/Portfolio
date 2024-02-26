let daynight= document.querySelector(".daynight");
let banner = document.querySelector(".banner");
daynight.addEventListener("click",()=>{
    banner.classList.toggle("night");
})
let effect =new Typed("#text",{
    strings:["Nitika", "a Frontend Web Developer","a Coder"],
    loop: true,
    typespeed: 250,
    backspeed:150,
    backDelay:1000
})

