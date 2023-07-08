import clickCardHandler from "./pagecards"

export function timerSet(timer) {
    let time = 0

    function updateTime() {
        time++
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)
        const formattedTime = pad(minutes) + ':' + pad(seconds)
        timer.textContent = formattedTime
    }

    function pad(value) {
        return value < 10 ? '0' + value : value
    }

    const timerInterval = setInterval(updateTime, 1000)

    function stopTimer() {
        clearInterval(timerInterval)
        return time
    }

    return {
        stopTimer: stopTimer
    }
}

