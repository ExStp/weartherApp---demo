import onTabClick from "./src/modules/onTabClick.js";
import searchFetch from "./src/modules/searchFetch.js";
import * as storage from "./src/modules/storage.js";
import DOMLoadHandle from "./src/modules/DOMLoadHandle.js";
import RenderLocations from "./src/modules/Renders/RenderLocations.js";
import {
    tabsNav,
    searchForm,
    search__input,
    now__cityBtn,
    locations__list,
    selectDays
} from "./src/modules/consts.js";

// Слушатель для переключения табов по клику -- modules/onTabClick
tabsNav.addEventListener("click", onTabClick);

// Слушатель формы для передачи названия города в функцию modules/searchFetch
searchForm.addEventListener("submit", searchHandler);


function searchHandler(event) {
    event.preventDefault();

    const now__city = search__input.value;
    searchFetch(now__city);

    search__input.value = "";
}

//Слушатель события на загрузку страницы
//При загрузке страницы отображается статистика по последнему городу
document.addEventListener("DOMContentLoaded", DOMLoadHandle);

//Слушатель событий на клик по кнопке "добавить"
//Передает название города в функцию
now__cityBtn.addEventListener("click", NowBtnHandler);

function NowBtnHandler(event) {
    let cityName = event.target.dataset.id;
    storage.changeListSities(cityName);
    RenderLocations();
}

//Слушатель событий на клик по панели с добавленными городами
//Отображает информацию по выбранному городу
locations__list.addEventListener("click", locationsHandler);

function locationsHandler(event) {
    let currentCity = event.target.dataset.id;
    searchFetch(currentCity);
}

//Функция для перезагрузки после выбора селекта кол-во дней для отображения прогноза
//В табе forecast
selectDays.addEventListener('change', () => window.location.reload())