

const renderChoosePage = ()=>{
    const appEl = document.getElementById('app');

    const choosePageHtml = `
    <div class="center">
    <div class="main__window">
        <div class="main__window_senc">
            <p>Выбери сложность</p>
        </div>
        <form class="main__window_form">
            <div  class="main__window_choose">
            <input type="radio" id="option1" name="options" value="Option 1" > 
            <label for="option1">1</label>
            </div>
            <div  class="main__window_choose">
            <input type="radio" id="option2" name="options" value="Option 2" >
            <label for="option2">2</label>
            </div>
            <div  class="main__window_choose">
            <input type="radio" id="option3" name="options" value="Option 3">
            <label for="option3">3</label>
            </div>
        </form>
            <button class="main__window_butt" id="chooseButton">Старт</button>
    </div>
    `
    appEl.innerHTML = choosePageHtml;

    const easyLevel = document.getElementById('option1');
    const middleLevel = document.getElementById('option2');
    const hardLevel = document.getElementById('option3');
    const chooseButton = document.getElementById('chooseButton');

    chooseButton.addEventListener('click', (event) =>{
        event.preventDefault();

         let time = 0;
     
         function updateTime() {
            time++;
            const minutes = Math.floor(time / 60);
            const seconds = Math.floor(time % 60);
            const formattedTime = pad(minutes) + ':' + pad(seconds);
            timer.textContent = formattedTime;
          }

        function pad(value) {
            return value < 10 ? '0' + value : value;
          }

        setInterval(updateTime, 1000);
    
        if (easyLevel.checked){
        const renderEasyPage =
            `<span class="timerMin">min</span>
            <span class="timerSec">sec</span>
            <div id="timer" class="timer">00:00</div>
            <div class="center">
            <div  class="main__window_choose">
            <input type="radio" id="option1" name="options" value="Option 1" > 
            <label for="option1">1</label>
            </div>
             </div>
            `
        appEl.innerHTML=renderEasyPage;
        const timer = document.getElementById('timer');

        updateTime();
          }
        else if (middleLevel.checked){
            const renderMiddlePage =
                `<span class="timerMin">min</span>
                <span class="timerSec">sec</span>
                <div id="timer" class="timer">00:00</div>
                <div class="center">
                <div  class="main__window_choose">
                <input type="radio" id="option2" name="options" value="Option 2" >
                <label for="option2">2</label>
                </div>
                 </div>
                `
        appEl.innerHTML=renderMiddlePage;
            }
        else if (hardLevel.checked){
            const renderHardPage =
                    `<span class="timerMin">min</span>
                    <span class="timerSec">sec</span>
                    <div id="timer" class="timer">00:00</div>
                    <div class="center">
                    <div  class="main__window_choose">
                    <input type="radio" id="option3" name="options" value="Option 3">
                    <label for="option3">3</label>
                    </div>
                     </div>
                    `
        appEl.innerHTML=renderHardPage;
                }
    })

}
renderChoosePage();


