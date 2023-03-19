import RenderLocations from "./Renders/RenderLocations.js";
import searchFetch from "./searchFetch.js";
import * as storage from './storage.js'

//Функци проверки localStorage
//Если приложение открыто впервые, то создается ячейка в LocalStorage
//В ячейке "WeatherApp" будут хранится список городов и текущий город

function DOMLoadHandle() {
    storage.checkAll()
    RenderLocations();

    let currentCity = storage.getCurrentCity()
    searchFetch(currentCity);
}

export default DOMLoadHandle;
