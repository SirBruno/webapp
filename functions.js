const ctButton = document.getElementsByClassName("ct-text-field-btn");
const ctContainer = document.getElementsByClassName("ct-container");
const ctTextFld = document.querySelectorAll(".ct-text-field");

var countr = 0;

ctButton[0].addEventListener("click", () => {
    if (ctTextFld[0].value != "") {
        const newNode = document.createElement("span");
        document.getElementsByClassName("ct-main")[0].appendChild(newNode);
        const ctMainP = document.querySelectorAll(".ct-main span");
        ctMainP[countr].innerHTML = `<div><p class="ct-text">${ctTextFld[0].value}</p></div>`;

        countr++;
    }

    const ctText = document.getElementsByClassName("ct-text");
    const ctTextChecked = document.getElementsByClassName("checked");

    // adiciona os event listeners nos textos
    for (let i in ctText) {
        ctText[i].onclick = () => {
            if (ctText[i].classList.contains("checked")) {
                ctText[i].setAttribute("class", "ct-text");
            } else {
                ctText[i].setAttribute("class", "ct-text checked");
            }
        }
    }

    document.getElementsByClassName("ct-clear")[0].onclick = () => {
        for (let i in document.querySelector(".ct-main span")) {
            document.getElementsByClassName(`ct-main`)[0].removeChild(document.querySelectorAll(".ct-main span")[0]);
            countr = 0;
        }
    }
});