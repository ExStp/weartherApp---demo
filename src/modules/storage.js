import { now__cityBtn } from "./consts.js";

//Функция добавления города в список
//Вызывается по клику now__cityBtn
//Добавляет город в список
//Удаляет город из списка если он уже есть
function changeListSities(cityName) {
    let citiesList = storageGetData();

    if (citiesList[0].includes(cityName)) {
        const index = citiesList[0].indexOf(cityName);
        if (index > -1) {
            citiesList[0].splice(index, 1);
        }
        storageSaveData(citiesList);
        now__cityBtn.dataset.saved = false;
        return;
    }

    citiesList[0].unshift(cityName);
    storageSaveData(citiesList);
    now__cityBtn.dataset.saved = true;
}

//Функция изменения текущего города в localStorage
//Вызывается при запросе статистики по текущему городу
function changeCurrentCity(name) {
    let citiesList = storageGetData();
    citiesList[1][0] = name;
    storageSaveData(citiesList);
}

//Функци проверки localStorage на наличие ячейки WeatherApp
//Если приложение открыто впервые, то создается ячейка в LocalStorage
//В ячейке "WeatherApp" будут хранится список городов и текущий город
function checkAll() {
    let citiesList = localStorage.getItem("WeatherApp");
    if (citiesList === null) {
        let newCitiesList = new Array([], ["Cape Town"]);
        storageSaveData(newCitiesList);
    }
}

//Функция получения текущего города из localStorage
function getCurrentCity() {
    return storageGetData()[1][0];
}

//Функция получения списка городов из localStorage
function getCitiesList() {
    return storageGetData()[0];
}

//Ниже функции, используемые только локально для упрощения кода
//Локальная функция для получения значение ячейки "WeatherApp" из LocalStorage
function storageGetData() {
    return JSON.parse(localStorage.getItem("WeatherApp"));
}

//Локальная функция для сохранения данных в значение ячейки "WeatherApp" в localStorage
function storageSaveData(data) {
    localStorage.setItem("WeatherApp", JSON.stringify(data));
}

export {
    changeListSities,
    changeCurrentCity,
    checkAll,
    getCurrentCity,
    getCitiesList,
};
