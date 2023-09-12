function setLocalStorage(nameValue, value) {
    return JSON.stringify(window.localStorage.setItem(nameValue, value))
}

function getLocalStorage(nameValue) {
    return JSON.parse(window.localStorage.getItem(nameValue))
}

export const localStorage = {
    setLocalStorage,
    getLocalStorage
}