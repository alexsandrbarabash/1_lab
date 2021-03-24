import scheduleDB from "./scheduleDB.json";

const schedule = () => {
  // init select
  const elems = document.querySelectorAll("select");
  M.FormSelect.init(elems, "");

  const dayWeek = document.querySelector(".day-week");
  const groups = document.querySelector(".group");

  const convectorTime = (time) => {
    let [hour, minutes] = time.split(":");
    return +hour * 60 + +minutes;
  };

  const filterSchedule = (day, group) =>
    scheduleDB
      .filter((item) => item.dayWeek === day && item.group === group)
      .sort((a, b) => convectorTime(a.time) - convectorTime(b.time));

  // console.log(filterSchedule(dayWeek.value, groups.value));
  const change = () => {
    const table = document.querySelector("#schedule");
    table.innerHTML = "";
    const data = filterSchedule(dayWeek.value, groups.value);
    let context = `
      <li class="collection-header grey darken-4">
          <h4>${dayWeek.value} ${groups.value}</h4>
      </li>
      <li class="row collection-item grey darken-4">
         <span class="col s6">Назва</span>
         <span class="col s4">Номер аудиторії</span>
         <span class="col s2">Час</span>
      </li>`;

    data.forEach((item) => {
      context =
        context +
        `
      <li class="row collection-item grey darken-4">
         <span class="col s6">${item.name}</span>
         <span class="col s4">${item.auditory}</span>
         <span class="col s2">${item.time}</span>
      </li>`;
    });
    table.innerHTML = context;
  };

  change();
  dayWeek.addEventListener("change", change);

  groups.addEventListener("change", change);
};

export default schedule;
