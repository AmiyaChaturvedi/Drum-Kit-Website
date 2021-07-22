var noOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < noOfDrumButtons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function() {

        var buttonInnerHTML = this.innerHTML;
        audioPlay(buttonInnerHTML);

        buttonAnimation(buttonInnerHTML);
    });
}


document.addEventListener("keydown", function(event) {
    audioPlay(event.key);

    buttonAnimation(event.key);
    // alert("key pressed.");
});

/*
document.addEventListener("keypress", function(event) {
    audioPlay(event.key);
});

document.addEventListener("keyup", function(event) {
    audioPlay(event.key);
});
*/

// document.onkeydown = logKey;

// document.addEventListener("keydown", (event) => {
//     console.log(event.key);

// });

// function logKey(key) {
//     audioPlay(key);
// }

// audioPlay(logKey.key);


function audioPlay(key) {

    switch (key) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3").play();
            break;

        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3").play();
            break;

        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3").play();
            break;

        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3").play();
            break;

        case "j":
            var crash = new Audio("sounds/crash.mp3").play();
            break;

        case "k":
            var kick = new Audio("sounds/kick-bass.mp3").play();
            break;

        case "l":
            var snare = new Audio("sounds/snare.mp3").play();
            break;

        default:
            break;
    }
}

function buttonAnimation(currentkey) {

    var activeButton = document.querySelector("." + currentkey);
    activeButton.classList.add("pressed");

    setTimeout(function() {
        activeButton.classList.remove("pressed");
    }, 100);
}