import { updateBird, setupBird, getBirdRect } from "./bird.js"

document.addEventListener("keypress", handleStart, { once: true })
const title = document.querySelector("[data-title]")
const subtitle = document.querySelector("[data-subtitle]")
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

    if (checkLose()) return handleLose()

    lastTime = time
    window.requestAnimationFrame(updateLoop)
}

function checkLose() {
    const birdRect = getBirdRect()
    const outsideWorld = birdRect.top < 0 || birdRect.bottom > window.innerHeight

    return outsideWorld
}

function handleStart() {
    title.classList.add("hide")
    setupBird()
    lastTime = null
    window.requestAnimationFrame(updateLoop)
}

function handleLose() {
    setTimeout(() => {
        title.classList.remove("hide")
        subtitle.classList.remove("hide")
        subtitle.textContent = " 0 Pipes"
        document.addEventListener("keypress", handleStart, { once: true })
    }, 100)
}