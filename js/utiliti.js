function getInputFieldValue(inputField) {
    const getInputFiled = document.getElementById(inputField);
    const getInputValue = parseFloat(getInputFiled.value);
    getInputFiled.value = '';
    return getInputValue;
}

function getInputElementValue(inputElement) {
    const getInputElement = document.getElementById(inputElement);
    const getInputValue = parseFloat(getInputElement.innerText);
    return getInputValue;
}

function setValue(inputElement, amount) {
    const setValueElement = document.getElementById(inputElement);
    setValueElement.innerText = amount;

}