import { tabsBtns, tabsItems } from "./consts.js";

function onTabClick(event) {
    let currentBtn = event.target;
    let tabId = currentBtn.dataset.tab;
    let currentTab = document.querySelector(tabId);

    if (!currentBtn.classList.contains("active")) {
        tabsBtns.forEach((btn) => {
            btn.classList.remove("active");
        });
        tabsItems.forEach((tab) => {
            tab.classList.remove("active");
        });
    }

    currentBtn.classList.add("active");
    currentTab.classList.add("active");
}

export default onTabClick;
