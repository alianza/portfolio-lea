const localStorageService = {
    setKeyValue(key, value) {
        localStorage.setItem(key, JSON.stringify(value)) // Save in local storage
    },

    getValue(key) {
        return JSON.parse(localStorage.getItem(key)) // Retrieve all
    },
}

export default localStorageService
