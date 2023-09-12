function setLocalStorage(nameValue, value) {
    return window.localStorage.setItem(nameValue, value)
}

function getLocalStorage(nameValue) {
    return window.localStorage.getItem(nameValue)
}

export const localStorage = {
    setLocalStorage,
    getLocalStorage
}