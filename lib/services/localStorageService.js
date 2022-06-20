// Known keys
export const darkThemeKey = 'darkTheme'

const localStorageService = {
    setKeyValue(key, value) {
        localStorage.setItem(key, JSON.stringify(value)) // Save in local storage
    },
    getValue(key) {
        return JSON.parse(localStorage.getItem(key)) // Retrieve all
    },
    hasValue(key) {
        return localStorage.hasOwnProperty(key) // Check if key exists
    }
}

export default localStorageService
