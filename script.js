import { updateBird, setupBird } from "./bird.js"

document.addEventListener("keypress", handleStart, { once: true })
const title = document.querySelector("[data-title]")
let lastTime

/* need to calculate the delta between each rerender to maker sure fall animation works properly regardless if the page takes 10sec or 30sec */
function updateLoop(time) {
    /* skips the first render */
    if (lastTime == null) {
        lastTime = time
        window.requestAnimationFrame(updateLoop)
        return
    }

    const delta = time - lastTime
    updateBird(delta)
    lastTime = time
    window.requestAnimationFrame(updateLoop)
}

function handleStart() {
    title.classList.add("hide")
    setupBird()
    window.requestAnimationFrame(updateLoop)
}

function handleClose() {

}