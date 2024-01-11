export function byId(id){
    return document.getElementById(id)
}

export function kelvinCelsius(tempDay) {
    return tempDay - 273.15
}

export function visibility(visible) {
    return visible / 1000;
}

export function timeStamp(codigo, timezone) {
    const data = new Date((timezone + codigo) *1000);
    
    const h = data.getUTCHours();
    const m = data.getUTCMinutes();

    const hr = ("0" + h).slice(-2)
    const mr = ("0" + m).slice(-2)

    return `${hr}:${mr}`;
}

export function formatDateWeather(country, date) {
    const data = new Date(date);
    const intlDate = Intl.DateTimeFormat(country, {dateStyle: 'short'}).format(data);

    return intlDate;
} 

export function convertWindSpeedKm(km) {
    return km * 3.6
}
