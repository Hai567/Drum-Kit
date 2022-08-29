// document.querySelector("drum").addEventListener("click", handleClick)



for (let i = 0; i < 7; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
      let keyInnerHTML = this.innerHTML;
      switch (keyInnerHTML) {
        case "a": new Audio ("sounds/crash.mp3").play()
        animation(keyInnerHTML)
        break;
        case "s": new Audio ("sounds/kick-bass.mp3").play()
        animation(keyInnerHTML)
        break;
        case "d": new Audio ("sounds/snare.mp3").play()
        animation(keyInnerHTML)
        break;
        case "f": new Audio ("sounds/tom-1.mp3").play()
        animation(keyInnerHTML)
        break;
        case "g": new Audio ("sounds/tom-2.mp3").play()
        animation(keyInnerHTML)
        break;
        case "h": new Audio ("sounds/tom-3.mp3").play()
        animation(keyInnerHTML)
        break;
        case "j": new Audio ("sounds/tom-4.mp3").play()
        animation(keyInnerHTML)
        break;
          
        default: console.log(keyInnerHTML)
      }
    });
}

function animation(eventKey){
  document.querySelector("." + eventKey + "-key").classList.add("pressed")
  setTimeout(function(){
    document.querySelector("." + eventKey + "-key").classList.remove("pressed")
  }, 100)
}

document.addEventListener("keydown", function(){
  console.log(event.key)
  switch (event.key) {
    case "a": new Audio ("sounds/crash.mp3").play()
    animation(event.key)
    break;

    case "s": new Audio ("sounds/kick-bass.mp3").play()
    animation(event.key)
    break;

    case "d": new Audio ("sounds/snare.mp3").play()
    animation(event.key)
    break;

    case "f": new Audio ("sounds/tom-1.mp3").play()
    animation(event.key)
    break;

    case "g": new Audio ("sounds/tom-2.mp3").play()
    animation(event.key)
    break;

    case "h": new Audio ("sounds/tom-3.mp3").play()
    animation(event.key)
    break;

    case "j": new Audio ("sounds/tom-4.mp3").play()
    animation(event.key)
    break;
    
    default: console.log(event.key)
  }
})
