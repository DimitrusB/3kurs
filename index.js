import { timerSet } from "./modulFunc.js";



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

    function renderLevel(level, renderPage) {
        const renderLevelPage = `
          <div>
            <div>
              <span class="timerMin">min</span>
              <span class="timerSec">sec</span>
              <button class="game_butt" id="startGame">Начать заново</button>
            </div>
            <div id="timer" class="timer">00:00</div>
          </div>
          <div class="center">
            <div class="main__window_choose">
              <input type="radio" id="option${level}" name="options" value="Option ${level}">
              <label for="option${level}">${level}</label>
            </div>
          </div>
        `;
        
        appEl.innerHTML = renderLevelPage;
        const timer = document.getElementById('timer');
        const goBegin = document.getElementById('startGame');
        timerSet(timer);
        
        goBegin.addEventListener('click', () => {
          renderChoosePage();
        });
      }
      chooseButton.addEventListener('click', (event) => {
        event.preventDefault();
      
        let level = easyLevel.checked ? "1" : middleLevel.checked ? "2" : hardLevel.checked ? "3" : null; 
        if (level === null) {
          return;
        }
        
        renderLevel(level, renderChoosePage);
      });
}
renderChoosePage();
