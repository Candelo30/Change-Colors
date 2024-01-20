// Variables

let yellow = document.querySelector(".yellow");
let blue = document.querySelector(".blue");
let red = document.querySelector(".red");
let aqua = document.querySelector(".aqua");
let reset = document.querySelector(".reset");
let NewColor = document.querySelector(".NewColor");
let header = document.querySelector(".header");
let aside = document.querySelector(".aside");
let footer = document.querySelector(".footer");

yellow.addEventListener('click', e=> {
    NewColor.style.background = "#ffff9f";
    reset.style.borderColor = "#ffff9f";
    header.style.borderColor = "#ffff9f";
    aside.style.borderColor = "#ffff9f";
    footer.style.borderColor = "#ffff9f";
});

blue.addEventListener('click', e=> {
    NewColor.style.background = "#9797fd";
    reset.style.borderColor = "#9797fd";
    header.style.borderColor = "#9797fd";
    aside.style.borderColor = "#9797fd";
    footer.style.borderColor = "#9797fd";
});

red.addEventListener('click', e=> {
    NewColor.style.background = "#ff8c8c";
    reset.style.borderColor = "#ff8c8c";
    header.style.borderColor = "#ff8c8c";
    aside.style.borderColor = "#ff8c8c";
    footer.style.borderColor = "#ff8c8c";
});

aqua.addEventListener('click', e=> {
    NewColor.style.background = "#7affff";
    reset.style.borderColor = "#7affff";
    header.style.borderColor = "#7affff";
    aside.style.borderColor = "#7affff";
    footer.style.borderColor = "#7affff";
});

reset.addEventListener('click', e=> {
    NewColor.style.background = "#ffffff";
    header.style.borderColor = "##b6f3b4";
    aside.style.borderColor = "#b6f3b4";
    footer.style.borderColor = "#b6f3b4";
    reset.style.borderColor = "#b6f3b4"
});