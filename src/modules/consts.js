// Константы для переключения табов
const tabsNav = document.querySelector(".tabs__nav");
const tabsBtns = document.querySelectorAll(".tabs__nav-btn");
const tabsItems = document.querySelectorAll(".tabs__item");

// Константа инпута поиска
const searchForm = document.querySelector(".search_form");
const search__input = document.querySelector(".search__input");

// Константы для таба now
const now__temp = document.querySelector("#now__temp");
const now__img = document.querySelector("#now__img");
const now__city = document.querySelector("#now__city");
const now__cityBtn = document.querySelector("#now__cityBtn");

// Константы для таба details
const details__city = document.querySelector("#details__city");
const details__temp = document.querySelector("#details__temp");
const details__feeltemp = document.querySelector("#details__feeltemp");
const details__weather = document.querySelector("#details__weather");
const details__sunrise = document.querySelector("#details__sunrise");
const details__sunset = document.querySelector("#details__sunset");
const details__windspeed = document.querySelector("#details__windspeed");

// Константы для таба forecast
const templateItem = document.querySelector('#templateItem');
const forecast__container = document.querySelector('.forecast__container');
const selectDays = document.querySelector('#forecast__amount-days');

//Константы для панели добавленных городов
const locations__list = document.querySelector(".list_locations");

const weatherUrl = "http://api.openweathermap.org/data/2.5/weather";
const forecastUrl = "http://api.openweathermap.org/data/2.5/forecast";
const apiKey = "4ffd32aaf968b4c03c60829ec4d46eb1";

export {
    tabsNav,
    tabsBtns,
    tabsItems,
    searchForm,
    search__input,
    now__temp,
    now__img,
    now__city,
    now__cityBtn,
    details__city,
    details__temp,
    details__feeltemp,
    details__weather,
    details__sunrise,
    details__sunset,
    details__windspeed,
    templateItem,
    forecast__container,
    selectDays,
    locations__list,
    weatherUrl,
    forecastUrl,
    apiKey,
};
