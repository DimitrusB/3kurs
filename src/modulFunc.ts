export function timerSet(timer: HTMLElement): { stopTimer: () => number } {
    let time = 0;
  
    function updateTime() {
      time++;
      const minutes = Math.floor(time / 60);
      const seconds = Math.floor(time % 60);
      const formattedTime = pad(minutes) + ':' + pad(seconds);
      timer.textContent = formattedTime;
    }
  
    function pad(value: number) {
      return value < 10 ? '0' + value : value.toString();
    }
  
    const timerInterval = setInterval(updateTime, 1000);
  
    function stopTimer(): number {
      clearInterval(timerInterval);
      return time;
    }
  
    return {
      stopTimer,
    };
  }

  export function showAllCards(): void {
    const cardFrontElements = document.querySelectorAll('.card');
    cardFrontElements.forEach((cardFrontElement) => {
      cardFrontElement.classList.remove('selected');
      cardFrontElement
        .querySelectorAll('.center__suit, .symbol-top-left, .symbol-bottom-right')
        .forEach((element) => {
          (element as HTMLElement).style.display = 'block';
        });
    });
  }
  export function changeCardStyle(): void {
    const cardFrontElements = document.querySelectorAll('.card');
  
    cardFrontElements.forEach((cardFrontElement) => {
      cardFrontElement
        .querySelectorAll('.center__suit, .symbol-top-left, .symbol-bottom-right')
        .forEach((element) => {
          (element as HTMLElement).style.display = 'none';
        });
  
      cardFrontElement.classList.add('selected');
  
      cardFrontElement.addEventListener('click', () => {
        cardFrontElement
          .querySelectorAll('.center__suit, .symbol-top-left, .symbol-bottom-right')
          .forEach((element) => {
            (element as HTMLElement).style.display = '';
          });
  
        cardFrontElement.classList.remove('selected');
      });
    });
  }
