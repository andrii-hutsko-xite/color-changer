// VARIABLES

const defaultColors = ["red", "orange", "yellow", "green", "lightblue", "blue", "purple"];

const onScreenColor = document.getElementById("on_screen_text");

const mainButton = document.querySelector(".content button");

// EVENT LISTENERS

mainButton.addEventListener("click", function() {
    changeColorArr();
});

// FUNCTIONS

function getRandomNums(min, max) {

    return Math.floor(Math.random() * (max + 1)) + min;

}

function changeColorArr() {

    const randColor = defaultColors[getRandomNums(0, defaultColors.length)];

    document.body.style.backgroundColor = randColor;

    onScreenColor.innerHTML = randColor;
    
}

changeColorArr();