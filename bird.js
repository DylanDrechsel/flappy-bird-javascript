const birdElem = document.querySelector('[data-bird]')
const BIRD_SPEED = .5
const JUMP_DURATION = 125
let timeSinceLastJump = Number.POSITIVE_INFINITY

export function setupBird() {
    setTop(window.innerHeight / 2)
    document.removeEventListener("keydown", handleJump)
    document.addEventListener("keydown", handleJump)
}

export function updateBird(delta) {
    /* calculation to make sure the bird falls/jumps at a consisant rate regardless of frame rate */
    if (timeSinceLastJump < JUMP_DURATION) {
        setTop((getTop() - 5) - BIRD_SPEED * delta)
    } else {
        setTop(getTop() + BIRD_SPEED * delta)
    }

    timeSinceLastJump += delta
}

export function getBirdRect() {
    return birdElem.getBoundingClientRect()
}

function setTop(top) {
    birdElem.style.setProperty("--bird-top", top)
}
  
function getTop() {
    return parseFloat(getComputedStyle(birdElem).getPropertyValue("--bird-top"))
}

function handleJump(e) {
    if (e.code !== "Space") return

    timeSinceLastJump = 0
}

