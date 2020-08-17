let inputDirection = { x: 0, y: 0 };

const up = document.querySelector(".up");
const right = document.querySelector(".right");
const down = document.querySelector(".down");
const left = document.querySelector(".left");

function controls() {
    up.addEventListener("click", () => {
        inputDirection = { x: 0, y: -1 };
    });
    right.addEventListener("click", () => {
        inputDirection = { x: 1, y: 0 };
    });
    down.addEventListener("click", () => {
        inputDirection = { x: 0, y: 1 };
        console.log("up");
    });
    left.addEventListener("click", () => {
        inputDirection = { x: -1, y: 0 };
    });
}
controls();

export function getInputDirection() {
    return inputDirection;
}