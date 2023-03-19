import { forecast__container, templateItem, selectDays } from "../consts.js";
import { toRoundUp } from "../functions/formatValue.js";

//Функция отрисовка таба "Forecast"
function RenderTabForecast(arrForecast) {
    forecast__container.querySelectorAll("*").forEach((item) => item.remove());

    let amountItems = amountForecastItems();

    for (let index = 0; index < amountItems; index++) {
        if (!isBrowserValid) return;
        let itemData = getDestructuredData(arrForecast[index]);

        const template = templateItem.content.cloneNode(true);
        const forecastItem = template.querySelector(".forecast__item");
        const forecast__date = forecastItem.querySelector("#forecast__date");
        const forecast__time = forecastItem.querySelector("#forecast__time");
        const forecast__temp = forecastItem.querySelector("#forecast__temp");
        const forecast__feels_like = forecastItem.querySelector("#forecast__feels_like");
        const forecast__img = forecastItem.querySelector("#forecast__img");
        const forecast__weather = forecastItem.querySelector("#forecast__weather");

        forecast__date.textContent = itemData.date;
        forecast__time.textContent = itemData.time;
        forecast__temp.textContent = toRoundUp(itemData.temp);
        forecast__feels_like.textContent = toRoundUp(itemData.feels_like);
        forecast__img.src = `https://openweathermap.org/img/wn/${itemData.icon}@2x.png`;
        forecast__weather.textContent = itemData.main;

        forecast__container.append(template);
    }
}

//Локальная функция для деструктуризации элемента массива на отдельные переменные
//Служит для упрощения кода
function getDestructuredData(dataObj) {
    let {
        dt_txt,
        main: { temp, feels_like },
        weather: [weatherArr],
        wind: { speed },
    } = dataObj;

    let { icon, main } = weatherArr;
    let dataDate = new Date(dt_txt);
    let time = `${dataDate.getHours()} : ${dataDate.getMinutes()}0`;
    let options = { day: "numeric", month: "long" };
    let date = dataDate.toLocaleDateString("en-US", options); //September 17

    return { temp, feels_like, speed, icon, main, time, date };
}

//Функция возвращает количество элементов для вывода в табе forecast
//Пользователь сам выбирает с помощью селекта
function amountForecastItems() {
    return (Number(selectDays.value)*8);
}

//Проверяет браузер пользователя на возможность использования элемента "template"
//Если браузер устаревший, то список прогнозов не отобразится
function isBrowserValid() {
    if (!document.createElement("template").content) {
        alert(
            `Ваш браузер не поддерживает "template" для отображения прогноза погоды`
        );
        return false;
    }
}

export default RenderTabForecast;
