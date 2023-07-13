/*! For license information please see main.js.LICENSE.txt */
(()=>{var t={491:(t,e,s)=>{const{Timer:i}=s(241);e.B=i},241:(t,e)=>{class s{constructor(t={}){const{label:e,startTimestamp:s,endTimestamp:i,currentStartTimestamp:n,pauseCount:a,accumulatedMs:r}=t,o=s>=0&&s<Date.now()?s:void 0,d=o>=0&&i>0&&i>o?i:void 0,c=n>=o&&(!d||n<d)?n:o,l=s>=0&&!(void 0!==n)&&a>0;this._label=e||"",this._startTimestamp=o,this._currentStartTimestamp=l?void 0:c,this._endTimestamp=d,this._pauseCount=a||0,this._accumulatedMs=r||0}getLabel(){return this._label}isStarted(){return this._startTimestamp>=0}isPaused(){return this.isStarted()&&void 0===this._currentStartTimestamp}isStopped(){return this._endTimestamp>0}isRunning(){return this.isStarted()&&!this.isPaused()&&!this.isStopped()}start(){return this.isStarted()&&!this.isStopped()||(this.clear(),this._startTimestamp=Date.now(),this._currentStartTimestamp=this._startTimestamp),this}pause(){return this.isPaused()||!this.isStarted()||this.isStopped()||(this._pauseCount+=1,this._accumulatedMs+=Date.now()-this._currentStartTimestamp,this._currentStartTimestamp=void 0),this}resume(){return!this.isPaused()||this.isStopped()||(this._currentStartTimestamp=Date.now()),this}stop(){return this.isStarted()?(this._endTimestamp=Date.now(),this):this}ms(){return this.isStarted()?this.isPaused()?this._accumulatedMs:(this._endTimestamp||Date.now())-this._currentStartTimestamp+this._accumulatedMs:0}pauseMs(){return this.isStarted()?(this._endTimestamp||Date.now())-this._startTimestamp-this.ms():0}_getTime(t){const e=Math.floor(t/1e3),s=Math.floor(e/60),i=Math.floor(s/60);return{ms:t%1e3,s:e%60,m:s%60,h:i%24,d:Math.floor(i/24)}}time(){return this._getTime(this.ms())}pauseTime(){return this._getTime(this.pauseMs())}pauseCount(){return this._pauseCount}startedAt(){return this._startTimestamp}stoppedAt(){return this._endTimestamp}format(t="%label%d d, %h h, %m m, %s s, %ms ms"){const e=this.time();return t.replace("%label",this._label?`${this._label}: `:"").replace("%ms",e.ms).replace("%s",e.s).replace("%m",e.m).replace("%h",e.h).replace("%d",e.d)}clear(){return this._startTimestamp=void 0,this._currentStartTimestamp=void 0,this._endTimestamp=void 0,this._accumulatedMs=0,this._pauseCount=0,this}serialize(){return JSON.stringify({startTimestamp:this._startTimestamp,currentStartTimestamp:this._currentStartTimestamp,endTimestamp:this._endTimestamp,accumulatedMs:this._accumulatedMs,pauseCount:this._pauseCount,label:this._label})}static deserialize(t){return new s(JSON.parse(t))}static benchmark(t){if("function"!=typeof t)throw new Error("Timer.benchmark expects a function");const e=new s({label:t.name}).start();return t(),e.stop()}}e.Timer=s}},e={};function s(i){var n=e[i];if(void 0!==n)return n.exports;var a=e[i]={exports:{}};return t[i](a,a.exports,s),a.exports}s.d=(t,e)=>{for(var i in e)s.o(e,i)&&!s.o(t,i)&&Object.defineProperty(t,i,{enumerable:!0,get:e[i]})},s.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";function t(){document.querySelectorAll(".card").forEach((t=>{t.querySelectorAll(".center__suit, .symbol-top-left, .symbol-bottom-right").forEach((t=>{t.style.display="none"})),t.classList.add("selected"),t.addEventListener("click",(()=>{t.querySelectorAll(".center__suit, .symbol-top-left, .symbol-bottom-right").forEach((t=>{t.style.display=""})),t.classList.remove("selected")}))}))}s.d({},{f:()=>n,z:()=>a});var e=s(491);function i(s){const r=new e.B,o=3===s?"400px":6===s?"650px":"auto";document.getElementById("app").innerHTML='\n        <div class="center__second">\n            <div class="second__main">\n                <div>\n                    <span class="timerMin">min</span>\n                    <span class="timerSec">sec</span>\n                    <div id="timer" class="timer">00:00</div>\n                </div>\n                <button class="game_butt" id="startGame">Начать заново</button>\n            </div> \n            <div class="second">\n                <div class="card-back"></div>\n                <div class="card-deck"></div>  \n            </div>\n           \n        </div>',function(t){let e=0;function s(t){return t<10?"0"+t:t}setInterval((function(){e++;const i=Math.floor(e/60),n=Math.floor(e%60),a=s(i)+":"+s(n);t.textContent=a}),1e3)}(document.getElementById("timer"));const d=["clubs","diamonds","hearts","spades"],c=["6","7","8","9","10","J","Q","K","A"],l=[];for(let t=0;t<d.length;t++)for(let e=0;e<c.length;e++)l.push({suit:d[t],rank:c[e]});const p=[];for(let t=0;t<s;t++){const t=l[Math.floor(Math.random()*l.length)];p.push(t),p.push(t)}p.sort((()=>Math.random()-.5));let m=`<div class="row" style="width: ${o}" >`;for(let t=0;t<p.length;t++)m+=`\n            <div class="card ${p[t].rank}" data-suit ="${p[t].suit}"data-rank="${p[t].rank}">\n                <div class="symbol-top-left"><div>${p[t].rank}</div><div class="block-symbol"><img src="./src/img/${p[t].suit}.svg"></div></div>\n                <div class="center__suit"><img src="./src/img/${p[t].suit}.svg"></div>\n                <div class="symbol-bottom-right"><div>${p[t].rank}</div><div class="block-symbol"><img src="./src/img/${p[t].suit}.svg"></div></div>\n            </div>`;m+="</div>",m+='<div class="popup" id="popup-win">\n    <div class="popup-content">\n        <img src="./src/img/celebration.svg" alt="Win" style="\n        padding-top: 26px">\n        <h3 class="popup-header">Вы выиграли!</h3>\n        <p class="popup-text">Затраченное время:</p>\n        <p class="popup-time" id="timeWin"></p>\n        <button class="popup__btn">Играть снова</button>\n    </div>\n    </div>\n\n    <div class="popup" id="popup-lose">\n    <div class="popup-content">\n        <img src="./src/img/dead.svg" alt="Lose" style="\n        padding-top: 26px">\n        <h3 class="popup-header">Вы проиграли!</h3>\n        <p class="popup-text">Затраченное время:</p>\n        <p class="popup-time" id="timeLose"></p>\n        <button class="popup__btn">Играть снова</button>\n    </div>\n    </div>',setTimeout(t,5e3),document.querySelector(".card-deck").innerHTML=m,document.getElementById("startGame").addEventListener("click",(()=>{a()}));let u=null,h=null;function v(t){const e=t.target.closest(".card");let s=r.format("%m.%s");if(e.classList.contains("selected")&&!e.classList.contains("card-selected")&&!e.classList.contains("card-paired"))if(r.start(),u){let t=e;u&&t?(u.dataset.rank===t.dataset.rank&&u.dataset.suit===t.dataset.suit?(u.classList.add("card-paired"),t.classList.add("card-paired"),h++,h===_.length/2&&(r.stop(),document.querySelector("#popup-win").style.display="block",document.getElementById("timeWin").innerHTML=s)):(r.stop(),document.querySelector("#popup-lose").style.display="block",document.querySelectorAll(".card").forEach((t=>{t.classList.remove("selected"),t.querySelectorAll(".center__suit, .symbol-top-left, .symbol-bottom-right").forEach((t=>{t.style.display="block"}))})),document.getElementById("timeLose").innerHTML=s),u=null,t=null):(u=e,u.classList.add("card-selected"))}else u=e,u.classList.add("card-selected")}const _=document.querySelectorAll(".card");for(const t of _)t.addEventListener("click",v);document.querySelectorAll(".popup__btn").forEach((function(t){t.addEventListener("click",(function(){this.closest(".popup").style.display="none",i(n)}))}))}let n=null;const a=()=>{document.getElementById("app").innerHTML='\n    <div class="center">\n    <div class="main__window">\n        <div class="main__window_senc">\n            <p>Выбери сложность</p>\n        </div>\n        <form class="main__window_form">\n            <div  class="main__window_choose">\n            <input type="radio" id="option1" name="options" value="Option 1" > \n            <label for="option1">1</label>\n            </div>\n            <div  class="main__window_choose">\n            <input type="radio" id="option2" name="options" value="Option 2" >\n            <label for="option2">2</label>\n            </div>\n            <div  class="main__window_choose">\n            <input type="radio" id="option3" name="options" value="Option 3">\n            <label for="option3">3</label>\n            </div>\n        </form>\n            <button class="main__window_butt" id="chooseButton">Старт</button>\n    </div>\n    ';const t=document.getElementById("option1"),e=document.getElementById("option2"),s=document.getElementById("option3");document.getElementById("chooseButton").addEventListener("click",(a=>{if(a.preventDefault(),t.checked)i(3),n=3;else if(e.checked)i(6),n=6;else{if(!s.checked)return void alert("Выберите уровень сложности!!!");i(9),n=9}}))};a()})()})();
//# sourceMappingURL=main.js.map