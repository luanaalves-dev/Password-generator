// Select of Elements
const generatePasswordButton = document.querySelector("#generate-password");
const generatePasswordElement = document.querySelector("#generated-password");

// Functions
const getLetterLowerCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
};

const getLetterUpperCase = () => {
    return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
};

const getNumber = () => {
    return Math.floor(Math.random() * 10).toString();
};

const getSymbol = () => {
    const symbols = "(){} []=<>/,.!@#$%&*+-";
    return symbols[Math.floor(Math.random() * symbols.length)];
};

console.log(getSymbol());


// Events
generatePasswordButton.addEventListener("click", () => {
    console.log("teste");
});
