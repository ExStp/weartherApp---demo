import { now__temp, now__img, now__city, now__cityBtn } from "../consts.js";

// Функция отрисовки таба Now
// Получает темпетаруру, url иконки и название города
// Отрисовывает данные в таб Now
function RenderTabNow(main, weather, name) {
    let temp = Math.floor(main.temp);
    let iconId = weather[0].icon;

    now__img.src = `https://openweathermap.org/img/wn/${iconId}@4x.png`;
    now__temp.textContent = temp;
    now__city.textContent = name;
    now__cityBtn.dataset.id = name;
}

export default RenderTabNow;
