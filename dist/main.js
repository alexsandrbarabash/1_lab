(()=>{"use strict";var __webpack_modules__={404:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const calculator=()=>{const btnCalc=document.querySelectorAll(".btn-calc"),inputCalc=document.querySelector("#calculator-input"),insert=e=>{inputCalc.value=inputCalc.value+e},clearAll=()=>{inputCalc.value=""},deletLast=()=>{const e=inputCalc.value;inputCalc.value=e.substring(0,e.length-1)},equal=()=>{const expression=inputCalc.value;expression&&(inputCalc.value=eval(expression))};btnCalc.forEach((e=>{e.addEventListener("click",(e=>{const t=e.target.textContent;switch(e.target.textContent){case"C":clearAll();break;case"arrow_back":deletLast();break;case"=":equal();break;default:insert(t)}}))}))},__WEBPACK_DEFAULT_EXPORT__=calculator}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var t=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](t,t.exports,__webpack_require__),t.exports}__webpack_require__.d=(e,t)=>{for(var a in t)__webpack_require__.o(t,a)&&!__webpack_require__.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},__webpack_require__.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{const e=(...e)=>{let t=!0;return e.forEach((e=>{var a;e.value||("Заповніть це поле",(a=e).classList.add("invalid"),a.nextElementSibling.nextElementSibling.dataset.error="Заповніть це поле",t=!1)})),t},t=(e,t,a)=>{if(+a.value>=e&&+a.value<=t)return!0;{a.classList.add("invalid");const r=a.nextElementSibling.nextElementSibling;return a.value<e&&(r.dataset.error="Число замале"),a.value>t&&(r.dataset.error="Число завелике"),!1}},a=(e,...t)=>{e.innerHTML="",t.forEach((e=>{e.value="",e.classList.remove("valid"),e.nextElementSibling.classList.remove("active")}))},r=JSON.parse('[{"name":"Комп\'ютерна електроніка","auditory":"418","group":"ІК-91","dayWeek":"Понеділок","time":"8:30"},{"name":"Технології інтернету речей","auditory":"419","group":"ІК-91","dayWeek":"Понеділок","time":"10:25"},{"name":"Промислова екологія","auditory":"301","group":"ІК-91","dayWeek":"Понеділок","time":"12:20"},{"name":"ТІМС","auditory":"418","group":"ІК-91","dayWeek":"Вівторок","time":"8:30"},{"name":"Архіт-ра комп\'ют. систем","auditory":"419","group":"ІК-91","dayWeek":"Вівторок","time":"10:25"},{"name":"Стратегія охорони навколишнього середовища","auditory":"301","group":"ІК-91","dayWeek":"Вівторок","time":"12:20"},{"name":"РТС 1 проект. компонентів","auditory":"418","group":"ІК-91","dayWeek":"Середа","time":"8:30"},{"name":"РТС 1 проект. компонентів","auditory":"419","group":"ІК-91","dayWeek":"Середа","time":"10:25"},{"name":"Ін.мова","auditory":"301","group":"ІК-91","dayWeek":"Середа","time":"14:15"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"418","group":"ІК-91","dayWeek":"Четверг","time":"8:30"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"419","group":"ІК-91","dayWeek":"Четверг","time":"10:25"},{"name":"Комп\'ютерна електроніка","auditory":"415","group":"ІК-91","dayWeek":"П\'ятниця","time":"8:30"},{"name":"Фізичне виховання","auditory":"","group":"ІК-91","dayWeek":"П\'ятниця","time":"10:25"},{"name":"Основи розробки програмного забезпечення на платформі .NET","auditory":"419","group":"ІК-91","dayWeek":"П\'ятниця","time":"14:15"},{"name":"Комп\'ютерна електроніка","auditory":"419","group":"ІК-92","dayWeek":"Понеділок","time":"8:30"},{"name":"Технології інтернету речей","auditory":"419","group":"ІК-92","dayWeek":"Понеділок","time":"10:25"},{"name":"Промислова екологія","auditory":"302","group":"ІК-92","dayWeek":"Понеділок","time":"12:20"},{"name":"Екологічна та природно-техногенна безпека","auditory":"204","group":"ІК-92","dayWeek":"Понеділок","time":"14:15"},{"name":"Основи розробки програмного забезпечення на платформі Java","auditory":"303","group":"ІК-92","dayWeek":"Понеділок","time":"16:10"},{"name":"Комп\'ютерна електроніка","auditory":"418a","group":"ІК-92","dayWeek":"Вівторок","time":"8:30"},{"name":"Технології інтернету речей","auditory":"415","group":"ІК-92","dayWeek":"Вівторок","time":"10:25"},{"name":"ТІМС","auditory":"204","group":"ІК-92","dayWeek":"Вівторок","time":"14:15"},{"name":"РТС 1 проект. компонентів","auditory":"432","group":"ІК-92","dayWeek":"Середа","time":"8:30"},{"name":"Архіт-ра комп\'ют. систем","auditory":"419","group":"ІК-92","dayWeek":"Середа","time":"10:25"},{"name":"Фізичне виховання","auditory":"","group":"ІК-92","dayWeek":"Середа","time":"12:20"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"432","group":"ІК-92","dayWeek":"Четверг","time":"8:30"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"419","group":"ІК-92","dayWeek":"Четверг","time":"10:25"},{"name":"ТІМС","auditory":"456","group":"ІК-92","dayWeek":"Четверг","time":"12:20"},{"name":"Основи розробки програмного забезпечення на платформі .NET","auditory":"410","group":"ІК-92","dayWeek":"П\'ятниця","time":"8:30"},{"name":"Основи розробки програмного забезпечення на платформі .NET","auditory":"410","group":"ІК-92","dayWeek":"П\'ятниця","time":"10:25"},{"name":"Комп\'ютерна електроніка","auditory":"419","group":"ІК-93","dayWeek":"Понеділок","time":"8:30"},{"name":"Технології інтернету речей","auditory":"419","group":"ІК-93","dayWeek":"Понеділок","time":"10:25"},{"name":"Промислова екологія","auditory":"302","group":"ІК-93","dayWeek":"Понеділок","time":"12:20"},{"name":"Комп\'ютерна електроніка","auditory":"418a","group":"ІК-93","dayWeek":"Вівторок","time":"8:30"},{"name":"Технології інтернету речей","auditory":"415","group":"ІК-93","dayWeek":"Вівторок","time":"10:25"},{"name":"ТІМС","auditory":"201","group":"ІК-93","dayWeek":"Вівторок","time":"14:15"},{"name":"РТС 1 проект. компонентів","auditory":"432a","group":"ІК-93","dayWeek":"Середа","time":"8:30"},{"name":"Архіт-ра комп\'ют. систем","auditory":"419a","group":"ІК-93","dayWeek":"Середа","time":"10:25"},{"name":"Фізичне виховання","auditory":"","group":"ІК-93","dayWeek":"Середа","time":"12:20"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"410a","group":"ІК-93","dayWeek":"Четверг","time":"8:30"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"420","group":"ІК-93","dayWeek":"Четверг","time":"10:25"},{"name":"ТІМС","auditory":"460","group":"ІК-93","dayWeek":"Четверг","time":"12:20"},{"name":"Основи розробки програмного забезпечення на платформі .NET","auditory":"412","group":"ІК-93","dayWeek":"П\'ятниця","time":"8:30"},{"name":"Основи розробки програмного забезпечення на платформі .NET","auditory":"415","group":"ІК-93","dayWeek":"П\'ятниця","time":"10:25"}]');var n=__webpack_require__(404);document.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=document.querySelector(".js-fibonacci-input"),r=document.querySelector(".js-all-fibonacci-number");document.querySelector(".js-clean-btn-fibonacci-number").addEventListener("click",(()=>{a(r,e)})),e.addEventListener("keyup",(e=>{"Enter"===e.key&&t(1,1470,e.target)&&(r.innerHTML=(e=>{let t="0 1",a=0,r=1;for(let n=2;n<=e;n++){const e=a+r;t=`${t}, ${e}`,a=r,r=e}return t})(e.target.value))}))})(),(()=>{const r=document.querySelector(".js-field-elevator"),n=document.querySelector("#input-floors"),o=document.querySelector("#input-flat");document.querySelector(".js-form-elevator").addEventListener("keyup",(a=>{if("Enter"===a.key){const a=o.value,i=n.value;e(o,n)&&t(1,1e5,n)&&t(1,3*i,o)&&(((...e)=>{e.forEach((e=>{e.classList.remove("invalid"),e.nextElementSibling.nextElementSibling.dataset.error=""}))})(o,n),r.innerHTML=(e=>{const t=Math.ceil(e/3);return t%2!=0?`Поверх ${t} виходьте`:`Поверх ${t-1} піднімітся на один вище`})(a))}})),document.querySelector(".js-clean-btn-field-elevator").addEventListener("click",(()=>{a(r,n,o)}))})(),(()=>{const r=document.querySelector("#input-m"),n=document.querySelector("#input-n"),o=document.querySelector("#form-two-dimensional"),i=document.querySelector(".js-clean-btn-two-dimensional"),u=document.querySelector(".js-answer-two-dimensional"),l=(e,t)=>{let a=e+Math.random()*(t+1-e);return Math.floor(a)};o.addEventListener("keyup",(a=>{if("Enter"===a.key&&e(n,r)&&t(1,1e3,n)&&t(1,1e3,r)){const e=((e,t)=>{let a=[];for(let r=0;r<e;r++){let e=[];for(let a=0;a<t;a++)e.push(l(-100,100));a.push(e)}return a})(n.value,r.value),{positiveArray:t,negativesArray:a}=(e=>{let t=[],a=[];return e.forEach((e=>{e.forEach((e=>{e>=0?t.push(e):a.push(e)}))})),{positiveArray:t,negativesArray:a}})(e);u.innerHTML=`\n        Початковий масив: <br> ${e.map(((e,t)=>`${t}: ${e.join(", ")}`)).join("<br>")}\n        <br> <br>\n        Масив додатніх чисел: ${t.join(", ")}\n        <br> <br>\n        Масив відємних чисел: ${a.join(", ")}\n        `}})),i.addEventListener("click",(()=>{a(u,r,n)}))})(),(()=>{const e=document.querySelectorAll("select");M.FormSelect.init(e,"");const t=document.querySelector(".day-week"),a=document.querySelector(".group"),n=e=>{let[t,a]=e.split(":");return 60*+t+ +a},o=()=>{const e=document.querySelector("#schedule");e.innerHTML="";const o=(i=t.value,u=a.value,r.filter((e=>e.dayWeek===i&&e.group===u)).sort(((e,t)=>n(e.time)-n(t.time))));var i,u;let l=`\n      <li class="collection-header grey darken-4">\n          <h4>${t.value} ${a.value}</h4>\n      </li>\n      <li class="row collection-item grey darken-4">\n         <span class="col s6">Назва</span>\n         <span class="col s4">Номер аудиторії</span>\n         <span class="col s2">Час</span>\n      </li>`;o.forEach((e=>{l+=`\n      <li class="row collection-item grey darken-4">\n         <span class="col s6">${e.name}</span>\n         <span class="col s4">${e.auditory}</span>\n         <span class="col s2">${e.time}</span>\n      </li>`})),e.innerHTML=l};o(),t.addEventListener("change",o),a.addEventListener("change",o)})(),(0,n.Z)(),(()=>{const t=(t,a,r)=>{"Enter"===t.key&&e(a,r)&&document.querySelector("#table-shop").insertAdjacentHTML("beforeend",((e,t)=>`\n  <li class="row collection-item grey darken-4">\n      <span class="col s10">${e}</span>\n      <span class="col s2">${t}</span>\n  </li>`)(a.value,r.value))},a=document.querySelector("#input-name"),r=document.querySelector("#input-price");a.addEventListener("keyup",(e=>t(e,a,r))),r.addEventListener("keyup",(e=>t(e,a,r)))})(),(()=>{const t=document.querySelector(".btn-triangle"),a=document.querySelector(".btn-circle"),r=document.querySelector("#input-array");let n;const o=()=>{const e=document.querySelector("pre");let t="";n.forEach((e=>{e.forEach((e=>{t+=`  ${e}`})),t+="\n"})),e.innerHTML="",e.innerHTML=t},i=e=>{let t=Array(e),a=Array(e);a.fill(1,0,e),t.fill(a,0,e),n=t,o()},u='<span class="zero">0</span>';r.addEventListener("keyup",(t=>{"Enter"===t.key&&e(r)&&i(+t.target.value)})),t.addEventListener("click",(()=>{i(n.length);const e=(e,t,a)=>(e-t)/(a-t);n=n.map(((t,a)=>a===n.length-1?t.map((()=>u)):t.map(((t,r)=>e(r,(n.length-1)/2,n.length-1)===e(a,0,n.length-1)||e(r,0,(n.length-1)/2)===e(a,n.length-1,0)?u:t)))),o()})),a.addEventListener("click",(()=>{i(n.length),n=n.map(((e,t)=>e.map(((e,a)=>((e,t)=>Math.pow(e-(n.length-1)/2,2)+Math.pow(t-(n.length-1)/2,2)===Math.pow((n.length-1)/2,2))(a,t)?u:e)))),o()}))})()}))})()})();