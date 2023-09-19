export const getUserLanguage = (): string => {
    switch (window.navigator.language) {
        case "uk":
            return "UA"
        default:
            return "EN"
    }
}

