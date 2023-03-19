function formatTime(unix) {
    let date = new Date(unix * 1000);
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let time = hours + ":" + minutes;

    return time;
}
//TODO: переделать функцию округления

function toRoundUp(num) {
    return Math.floor(num);
}

export { formatTime, toRoundUp };
