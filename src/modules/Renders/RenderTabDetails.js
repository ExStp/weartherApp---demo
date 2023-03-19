import {formatTime, toRoundUp} from "../functions/formatValue.js";
import {
    details__city,
    details__temp,
    details__feeltemp,
    details__weather,
    details__sunrise,
    details__sunset,
    details__windspeed,
} from "../consts.js";

// Функция отрисовки таба details
function RenderTabDetails(main, name, sys, weather, wind) {

    details__city.textContent = name;
    details__feeltemp.textContent = toRoundUp(main.feels_like);
    details__temp.textContent = toRoundUp(main.temp);
    details__windspeed.textContent = toRoundUp(wind.speed);
    details__weather.textContent = weather[0].main;
    details__sunrise.textContent = formatTime(sys.sunrise);
    details__sunset.textContent = formatTime(sys.sunset);
}



export default RenderTabDetails;
