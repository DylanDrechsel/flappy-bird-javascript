const birdElem = document.querySelector('[data-bird]')
const BIRD_SPEED = .5

export function updateBird(delta) {
    /* calculation to make sure the bird falls at a consisant rate regardless of frame rate */
    setTop(getTop() + BIRD_SPEED * delta)
    console.log(getTop())
}

function setTop(top) {
    birdElem.style.setProperty("--bird-top", top)
  }
  
  function getTop() {
    return parseFloat(getComputedStyle(birdElem).getPropertyValue("--bird-top"))
  }