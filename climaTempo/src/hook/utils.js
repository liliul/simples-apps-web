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
    const data = new Date((timezone + codigo) *1000).toUTCString();
    
    // const h = data.getHours()
    // const m = data.getMinutes()

    // return `${h}:${m}`
    return data
}