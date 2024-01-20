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
let Change_theme = document.querySelector(".Change_theme");
let Random = document.querySelector(".Random");

yellow.addEventListener('click', e=> {
    NewColor.style.background = "#ffff9f";
    reset.style.borderColor = "#ffff9f";
    Change_theme.style.borderColor = "#ffff9f";
    header.style.borderColor = "#ffff9f";
    aside.style.borderColor = "#ffff9f";
    Random.style.borderColor = "#ffff9f";
});

blue.addEventListener('click', e=> {
    NewColor.style.background = "#9797fd";
    reset.style.borderColor = "#9797fd";
    Change_theme.style.borderColor = "#9797fd";
    header.style.borderColor = "#9797fd";
    aside.style.borderColor = "#9797fd";
    footer.style.borderColor = "#9797fd";
    Random.style.borderColor = "#9797fd";
});

red.addEventListener('click', e=> {
    NewColor.style.background = "#ff8c8c";
    reset.style.borderColor = "#ff8c8c";
    Change_theme.style.borderColor = "#ff8c8c";
    header.style.borderColor = "#ff8c8c";
    aside.style.borderColor = "#ff8c8c";
    footer.style.borderColor = "#ff8c8c";
    Random.style.borderColor = "#ff8c8c";
});

aqua.addEventListener('click', e=> {
    NewColor.style.background = "#7affff";
    reset.style.borderColor = "#7affff";
    Change_theme.style.borderColor = "#7affff";
    header.style.borderColor = "#7affff";
    aside.style.borderColor = "#7affff";
    footer.style.borderColor = "#7affff";
    Random.style.borderColor = "#7affff";
});

reset.addEventListener('click', e=> {
    if (document.body.classList.contains("dark")) {
      NewColor.style.backgroundColor = "rgb(22, 21, 21)";
    } else {
      NewColor.style.backgroundColor = "#fff";
      console.log("El body contiene la clase dark")
    }
    header.style.borderColor = "#b6f3b4";
    aside.style.borderColor = "#b6f3b4";
    footer.style.borderColor = "#b6f3b4";
    reset.style.borderColor = "#b6f3b4"
    Change_theme.style.borderColor = "#b6f3b4"
    Random.style.borderColor = "#b6f3b4"
});

Change_theme.addEventListener('click', e=>{
    document.body.classList.toggle("dark");
    if (document.body.classList.contains("dark")) {
      NewColor.style.backgroundColor = "rgb(22, 21, 21)";
    } else {
      NewColor.style.backgroundColor = "#fff";
    }
})

function generarColorAleatorio() {
  var color = "#" + Math.floor(Math.random()*16777215).toString(16);
  return color
}

Random.addEventListener('click', e=> {
  var color = generarColorAleatorio();
  NewColor.style.background = color;
  reset.style.borderColor = color;
  Change_theme.style.borderColor = color;
  header.style.borderColor = color;
  aside.style.borderColor = color;
  footer.style.borderColor = color;
  Random.style.borderColor = color;
})