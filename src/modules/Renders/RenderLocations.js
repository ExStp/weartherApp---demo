import { locations__list } from "../consts.js";
import * as storage from "../storage.js";

function RenderLocations() {
    locations__list.querySelectorAll("*").forEach((i) => i.remove());
    let citiesList = storage.getCitiesList();

    citiesList.map((city) => {
        if (city === null) return;

        const li = document.createElement("li");
        li.textContent = city;
        li.dataset.id = city;
        locations__list.append(li);
    });
}

export default RenderLocations;
