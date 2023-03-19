import RenderTabNow from "./Renders/RenderTabNow.js";
import RenderTabDetails from "./Renders/RenderTabDetails.js";
import RenderTabForecast from "./Renders/RenderTabForecast.js";
import { weatherUrl, forecastUrl, apiKey } from "./consts.js";
import isValid from "./functions/isValid.js";
import * as storage from "./storage.js";

// Функция получения названия города из input
// Получает данные погоды
// Получает данные прогноза погоды
// Передает данные в функции рендера
async function searchFetch(currentCity) {
    if (!isValid(currentCity)) return;

    let weatherData = await fetchWeather(currentCity);
    if (weatherData === null) return;
    
    let forecastData = await fetchForecast(currentCity);
    if (forecastData === null) return;
    
    let arrayForecast = forecastData.list;
    let { main, name, sys, weather, wind } = weatherData;
    
    storage.changeCurrentCity(name);

    RenderTabNow(main, weather, name);
    RenderTabDetails(main, name, sys, weather, wind);
    RenderTabForecast(arrayForecast);
}

// Функция получения данных текущей погоды по текущему городу
// Создает url запрос
// Получает данные погоды
// Если запрос с ошибкой то выводит сообщение в alert
// Возвращает данные о погоде
async function fetchWeather(currentCity) {
    const url = `${weatherUrl}?q=${currentCity}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        checkStatusResponse(response, currentCity);

        return data;
    } catch (error) {
        alert(error.message);
        return null;
    }
}

// Функция получения прогноза погоды по текущему городу
// Создает url запрос
// Получает данные погоды
// Если запрос с ошибкой то выводит сообщение в alert
// Возвращает данные о погоде

async function fetchForecast(currentCity) {
    const url = `${forecastUrl}?q=${currentCity}&appid=${apiKey}&units=metric`;

    try {
        let response = await fetch(url);
        let data = await response.json();

        checkStatusResponse(response, currentCity);

        return data;
    } catch (error) {
        alert(error.message);
        return null;
    }
}
//TODO: Улучшить проверки!
//Локальная функция проверки статуса заголовков ответа
function checkStatusResponse(response, currentCity) {
    if (response.status === 404) {
        throw new Error(`Город с названием "${currentCity}" не найден`);
    }
    if (response.ok !== true) {
        throw new Error(
            "Проверьте подключение к интернету и перезагрузите страницу"
        );
    }
}

export default searchFetch;
