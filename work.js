var showcaseImgs = document.getElementsByClassName(`project`);
var selectedImg = document.getElementsByClassName(`selectedImage`)[0];
var wideImg = selectedImg.getElementsByClassName(`wideImg`)[0];

Array.from(showcaseImgs).forEach(element => {
    element.addEventListener("mousedown", function() {
        var projectImg = element.getElementsByClassName("projectImg")[0].getAttribute(`src`);

        wideImg.setAttribute(`src`, projectImg);
        selectedImg.classList.remove(`hidden`);
    });
});

selectedImg.addEventListener(`mousedown`, function() {
    wideImg.setAttribute(`src`, "");
    selectedImg.classList.add(`hidden`);
});