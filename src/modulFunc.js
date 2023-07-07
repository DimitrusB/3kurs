export function timerSet(timer) {
    // Инициализация времени
    let time = 0

    // Функция для обновления времени
    function updateTime() {
        time++
        const minutes = Math.floor(time / 60)
        const seconds = Math.floor(time % 60)

        // Форматирование времени в формат "мм:сс"
        const formattedTime = pad(minutes) + ':' + pad(seconds)

        // Обновление значения таймера
        timer.textContent = formattedTime
    }

    // Функция для добавления ведущего нуля, если число меньше 10
    function pad(value) {
        return value < 10 ? '0' + value : value
    }

    // Установка интервала обновления времени (раз в секунду)
    const timerInterval = setInterval(updateTime, 1000)

    // Функция для остановки таймера
    function stopTimer() {
        clearInterval(timerInterval)
        return time
    }

    // Возвращение объекта с функцией остановки таймера
    return {
        stopTimer: stopTimer
    }
}