const textBoxModels = document.getElementsByClassName("text-box-model");
const textBoxArea = document.getElementsByClassName("text-box-area");

for (let i in textBoxModels) {
  textBoxModels[i].addEventListener("focusout", null);
}

const setDefaultValues = () => {
  for (let i in document.getElementsByClassName("text-box-area")) {
    document.getElementsByClassName("text-box-area")[i].value = "stuff";
  }
}

setDefaultValues();