(()=>{"use strict";var __webpack_modules__={404:(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Z:()=>__WEBPACK_DEFAULT_EXPORT__});const calculator=()=>{const btnCalc=document.querySelectorAll(".btn-calc"),inputCalc=document.querySelector("#calculator-input"),insert=e=>{inputCalc.value=inputCalc.value+e},clearAll=()=>{inputCalc.value=""},deletLast=()=>{const e=inputCalc.value;inputCalc.value=e.substring(0,e.length-1)},equal=()=>{const expression=inputCalc.value;expression&&(inputCalc.value=eval(expression))};btnCalc.forEach((e=>{e.addEventListener("click",(e=>{const a=e.target.textContent;switch(e.target.textContent){case"C":clearAll();break;case"arrow_back":deletLast();break;case"=":equal();break;default:insert(a)}}))}))},__WEBPACK_DEFAULT_EXPORT__=calculator}},__webpack_module_cache__={};function __webpack_require__(e){if(__webpack_module_cache__[e])return __webpack_module_cache__[e].exports;var a=__webpack_module_cache__[e]={exports:{}};return __webpack_modules__[e](a,a.exports,__webpack_require__),a.exports}__webpack_require__.d=(e,a)=>{for(var t in a)__webpack_require__.o(a,t)&&!__webpack_require__.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:a[t]})},__webpack_require__.o=(e,a)=>Object.prototype.hasOwnProperty.call(e,a),(()=>{const e=(...e)=>{let a=!0;return e.forEach((e=>{var t;e.value||("Заповніть це поле",(t=e).classList.add("invalid"),t.nextElementSibling.nextElementSibling.dataset.error="Заповніть це поле",a=!1)})),a},a=(e,a,t)=>{if(+t.value>=e&&+t.value<=a)return!0;{t.classList.add("invalid");const r=t.nextElementSibling.nextElementSibling;return t.value<e&&(r.dataset.error="Число замале"),t.value>a&&(r.dataset.error="Число завелике"),!1}},t=(e,...a)=>{e.innerHTML="",a.forEach((e=>{e.value="",e.classList.remove("valid"),e.nextElementSibling.classList.remove("active")}))},r=JSON.parse('[{"name":"Комп\'ютерна електроніка","auditory":"418","group":"ІК-91","dayWeek":"Понеділок","time":"8:30"},{"name":"Технології інтернету речей","auditory":"419","group":"ІК-91","dayWeek":"Понеділок","time":"10:25"},{"name":"Промислова екологія","auditory":"301","group":"ІК-91","dayWeek":"Понеділок","time":"12:20"},{"name":"ТІМС","auditory":"418","group":"ІК-91","dayWeek":"Вівторок","time":"8:30"},{"name":"Архіт-ра комп\'ют. систем","auditory":"419","group":"ІК-91","dayWeek":"Вівторок","time":"10:25"},{"name":"Стратегія охорони навколишнього середовища","auditory":"301","group":"ІК-91","dayWeek":"Вівторок","time":"12:20"},{"name":"РТС 1 проект. компонентів","auditory":"418","group":"ІК-91","dayWeek":"Середа","time":"8:30"},{"name":"РТС 1 проект. компонентів","auditory":"419","group":"ІК-91","dayWeek":"Середа","time":"10:25"},{"name":"Ін.мова","auditory":"301","group":"ІК-91","dayWeek":"Середа","time":"14:15"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"418","group":"ІК-91","dayWeek":"Четверг","time":"8:30"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"419","group":"ІК-91","dayWeek":"Четверг","time":"10:25"},{"name":"Комп\'ютерна електроніка","auditory":"415","group":"ІК-91","dayWeek":"П\'ятниця","time":"8:30"},{"name":"Фізичне виховання","auditory":"","group":"ІК-91","dayWeek":"П\'ятниця","time":"10:25"},{"name":"Основи розробки програмного забезпечення на платформі .NET","auditory":"419","group":"ІК-91","dayWeek":"П\'ятниця","time":"14:15"},{"name":"Комп\'ютерна електроніка","auditory":"419","group":"ІК-92","dayWeek":"Понеділок","time":"8:30"},{"name":"Технології інтернету речей","auditory":"419","group":"ІК-92","dayWeek":"Понеділок","time":"10:25"},{"name":"Промислова екологія","auditory":"302","group":"ІК-92","dayWeek":"Понеділок","time":"12:20"},{"name":"Екологічна та природно-техногенна безпека","auditory":"204","group":"ІК-92","dayWeek":"Понеділок","time":"14:15"},{"name":"Основи розробки програмного забезпечення на платформі Java","auditory":"303","group":"ІК-92","dayWeek":"Понеділок","time":"16:10"},{"name":"Комп\'ютерна електроніка","auditory":"418a","group":"ІК-92","dayWeek":"Вівторок","time":"8:30"},{"name":"Технології інтернету речей","auditory":"415","group":"ІК-92","dayWeek":"Вівторок","time":"10:25"},{"name":"ТІМС","auditory":"204","group":"ІК-92","dayWeek":"Вівторок","time":"14:15"},{"name":"РТС 1 проект. компонентів","auditory":"432","group":"ІК-92","dayWeek":"Середа","time":"8:30"},{"name":"Архіт-ра комп\'ют. систем","auditory":"419","group":"ІК-92","dayWeek":"Середа","time":"10:25"},{"name":"Фізичне виховання","auditory":"","group":"ІК-92","dayWeek":"Середа","time":"12:20"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"432","group":"ІК-92","dayWeek":"Четверг","time":"8:30"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"419","group":"ІК-92","dayWeek":"Четверг","time":"10:25"},{"name":"ТІМС","auditory":"456","group":"ІК-92","dayWeek":"Четверг","time":"12:20"},{"name":"Основи розробки програмного забезпечення на платформі .NET","auditory":"410","group":"ІК-92","dayWeek":"П\'ятниця","time":"8:30"},{"name":"Основи розробки програмного забезпечення на платформі .NET","auditory":"410","group":"ІК-92","dayWeek":"П\'ятниця","time":"10:25"},{"name":"Комп\'ютерна електроніка","auditory":"419","group":"ІК-93","dayWeek":"Понеділок","time":"8:30"},{"name":"Технології інтернету речей","auditory":"419","group":"ІК-93","dayWeek":"Понеділок","time":"10:25"},{"name":"Промислова екологія","auditory":"302","group":"ІК-93","dayWeek":"Понеділок","time":"12:20"},{"name":"Комп\'ютерна електроніка","auditory":"418a","group":"ІК-93","dayWeek":"Вівторок","time":"8:30"},{"name":"Технології інтернету речей","auditory":"415","group":"ІК-93","dayWeek":"Вівторок","time":"10:25"},{"name":"ТІМС","auditory":"201","group":"ІК-93","dayWeek":"Вівторок","time":"14:15"},{"name":"РТС 1 проект. компонентів","auditory":"432a","group":"ІК-93","dayWeek":"Середа","time":"8:30"},{"name":"Архіт-ра комп\'ют. систем","auditory":"419a","group":"ІК-93","dayWeek":"Середа","time":"10:25"},{"name":"Фізичне виховання","auditory":"","group":"ІК-93","dayWeek":"Середа","time":"12:20"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"410a","group":"ІК-93","dayWeek":"Четверг","time":"8:30"},{"name":"Основи розробки програмного забезпечення на платформі Node.JS","auditory":"420","group":"ІК-93","dayWeek":"Четверг","time":"10:25"},{"name":"ТІМС","auditory":"460","group":"ІК-93","dayWeek":"Четверг","time":"12:20"},{"name":"Основи розробки програмного забезпечення на платформі .NET","auditory":"412","group":"ІК-93","dayWeek":"П\'ятниця","time":"8:30"},{"name":"Основи розробки програмного забезпечення на платформі .NET","auditory":"415","group":"ІК-93","dayWeek":"П\'ятниця","time":"10:25"}]');var n=__webpack_require__(404);document.addEventListener("DOMContentLoaded",(()=>{(()=>{const e=document.querySelector(".js-fibonacci-input"),r=document.querySelector(".js-all-fibonacci-number");document.querySelector(".js-clean-btn-fibonacci-number").addEventListener("click",(()=>{t(r,e)})),e.addEventListener("keyup",(e=>{"Enter"===e.key&&a(1,1470,e.target)&&(r.innerHTML=(e=>{let a="0",t=0,r=1;for(let n=2;n<=e;n++){const e=t+r;a=`${a}, ${e}`,t=r,r=e}return a})(e.target.value))}))})(),(()=>{const r=document.querySelector(".js-field-elevator"),n=document.querySelector("#input-floors"),o=document.querySelector("#input-flat");document.querySelector(".js-form-elevator").addEventListener("keyup",(t=>{if("Enter"===t.key){const t=o.value,i=n.value;e(o,n)&&a(1,1e5,n)&&a(1,3*i,o)&&(((...e)=>{e.forEach((e=>{e.classList.remove("invalid"),e.nextElementSibling.nextElementSibling.dataset.error=""}))})(o,n),r.innerHTML=(e=>{const a=Math.ceil(e/3);return a%2==0?`Поверх ${a} виходьте`:1===a?`Поверх ${a+1} спустітся на один нижче`:`Поверх ${a-1} піднімітся на один вище`})(t))}})),document.querySelector(".js-clean-btn-field-elevator").addEventListener("click",(()=>{t(r,n,o)}))})(),(()=>{const r=document.querySelector("#input-m"),n=document.querySelector("#input-n"),o=document.querySelector("#form-two-dimensional"),i=document.querySelector(".js-clean-btn-two-dimensional"),u=document.querySelector(".js-answer-two-dimensional"),d=(e,a)=>{let t=e+Math.random()*(a+1-e);return Math.floor(t)};o.addEventListener("keyup",(t=>{if("Enter"===t.key&&e(n,r)&&a(1,1e3,n)&&a(1,1e3,r)){const e=((e,a)=>{let t=[];for(let r=0;r<e;r++){let e=[];for(let t=0;t<a;t++)e.push(d(-100,100));t.push(e)}return t})(n.value,r.value),{positiveArray:a,negativesArray:t}=(e=>{let a=[],t=[];return e.forEach((e=>{e.forEach((e=>{e>=0?a.push(e):t.push(e)}))})),{positiveArray:a,negativesArray:t}})(e);u.innerHTML=`\n        Початковий масив: <br> ${e.map(((e,a)=>`${a}: ${e.join(", ")}`)).join("<br>")}\n        <br> <br>\n        Масив додатніх чисел: ${a.join(", ")}\n        <br> <br>\n        Масив відємних чисел: ${t.join(", ")}\n        `}})),i.addEventListener("click",(()=>{t(u,r,n)}))})(),(()=>{const e=document.querySelectorAll("select");M.FormSelect.init(e,"");const a=document.querySelector(".day-week"),t=document.querySelector(".group"),n=e=>{let[a,t]=e.split(":");return 60*+a+ +t},o=()=>{const e=document.querySelector("#schedule");e.innerHTML="";const o=(i=a.value,u=t.value,r.filter((e=>e.dayWeek===i&&e.group===u)).sort(((e,a)=>n(e.time)-n(a.time))));var i,u;let d=`\n      <li class="collection-header grey darken-4">\n          <h4>${a.value} ${t.value}</h4>\n      </li>\n      <li class="row collection-item grey darken-4">\n         <span class="col s6">Назва</span>\n         <span class="col s4">Номер аудеторії</span>\n         <span class="col s2">Час</span>\n      </li>`;o.forEach((e=>{d+=`\n      <li class="row collection-item grey darken-4">\n         <span class="col s6">${e.name}</span>\n         <span class="col s4">${e.auditory}</span>\n         <span class="col s2">${e.time}</span>\n      </li>`})),e.innerHTML=d};o(),a.addEventListener("change",o),t.addEventListener("change",o)})(),(0,n.Z)()}))})()})();