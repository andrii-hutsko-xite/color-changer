// VARIABLES

const body = document.getElementsByTagName("body")[0];

const defaultColors = ["red", "orange", "yellow", "green", "lightblue", "blue", "purple"];

const onScreenColor = document.getElementById("on_screen_text");

const mainButton = document.querySelector(".content button");

// EVENT LISTENERS

mainButton.addEventListener("click", function() {
    changeColorArr();
});

// FUNCTIONS

function changeColorArr() {

    const arraySize = defaultColors.length;

    randColor = defaultColors[
        Math.floor(Math.random() * arraySize)
    ];

    console.log(Math.random() * arraySize);

    body.style.backgroundColor = randColor;

    onScreenColor.innerHTML = randColor;
    
}

changeColorArr();