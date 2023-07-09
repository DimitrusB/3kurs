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

export function showAllCards() {
    const cardFrontElements = document.querySelectorAll('.card');
    cardFrontElements.forEach((cardFrontElement) => {
        cardFrontElement.classList.remove('selected');
        cardFrontElement
            .querySelectorAll(
                '.center__suit, .symbol-top-left, .symbol-bottom-right'
            )
            .forEach((element) => {
                element.style.display = 'block';
            });
    });
}
export function changeCardStyle() {
    const cardFrontElements = document.querySelectorAll('.card');

    cardFrontElements.forEach((cardFrontElement) => {
        cardFrontElement
            .querySelectorAll('.center__suit, .symbol-top-left, .symbol-bottom-right')
            .forEach((element) => {
                element.style.display = 'none';
            });

        cardFrontElement.classList.add('selected');

        cardFrontElement.addEventListener('click', () => {
            cardFrontElement
                .querySelectorAll('.center__suit, .symbol-top-left, .symbol-bottom-right')
                .forEach((element) => {
                    element.style.display = ''; 
                });

            cardFrontElement.classList.remove('selected');
        });
    });
}
