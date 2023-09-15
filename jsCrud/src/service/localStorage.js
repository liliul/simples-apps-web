function setLocalStorage(nameValue, value) {
    return window.localStorage.setItem(nameValue, JSON.stringify(value))
}

function getLocalStorage(nameValue) {
    return JSON.parse(window.localStorage.getItem(nameValue)) ?? []
}

export const localStorage = {
    setLocalStorage,
    getLocalStorage
}