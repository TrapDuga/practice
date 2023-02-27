var heroname = document.querySelector(".hero")
var text = document.querySelector("#para")


function over (element){
    element.src = "warden.jfif"
    heroname.innerText = "Warden"
    text.innerText = "This is Warden"
    heroname.style.color = "red"

}

function out (element){
    element.src = "gryphon.jfif"
    heroname.innerText ="Gryphon"
    text.innerText = "You found Gryphon"
    heroname.style.color = "green"
}