// Create a function named getFullYear that will return the current year

// Function that will return the current year
function getFullYear() {
    return new Date().getFullYear();
}
// Function that change footer
function getFooterCopy(isIndex) {
    if (isIndex) {
        return "Holberton School";
    }
    else {
        return "Holberton School main dashboard"
        }
}
