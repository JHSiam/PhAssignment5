function getValueById(id) {
    const value = document.getElementById(id).value;
    return value;
}

function getInnerTextById(id) {
    const text = document.getElementById(id).innerText
    return text;
}

function setInnerTextById(id, text) {
    document.getElementById(id).innerText = text;
}