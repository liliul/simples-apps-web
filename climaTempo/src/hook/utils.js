export function byId(id){
    return document.getElementById(id)
}

export function kelvinCelsius(tempDay) {
    return tempDay - 273.15
}

export function visibility(visible) {
    return visible / 1000;
}

export function timeStamp(codigo) {
    return new Date(codigo * 1000).getHours();
}