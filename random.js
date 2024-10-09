// VARIABLES

const onScreenColor = document.getElementById("on_screen_text");

const mainButton = document.querySelector(".content button");

// EVENT LISTENERS

mainButton.addEventListener("click", function() {
    changeColorRandom();
});

// FUNCTIONS

function getRandomNums(min, max) {

    return Math.floor(Math.random() * (max + 1)) + min;

}

function changeColorRandom() {

    let rgbValues = [];

    for (let i = 0; i <= 2; i++) {
        rgbValues[i] = getRandomNums(0, 255);
    }

    const finalColor = "rgba(" + rgbValues[0] + "," + rgbValues[1] + "," + rgbValues[2] + ")"; 

    document.body.style.backgroundColor = finalColor;

    onScreenColor.innerHTML = finalColor;

}

changeColorRandom();