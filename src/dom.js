"use strict";
const nome = document.getElementById('nome'); //HTMLElement | null
const form = document.getElementsByTagName('form'); //HTMLCollectionOf<HTMLFormElement>
const button = document.getElementById('btn');
button === null || button === void 0 ? void 0 : button.addEventListener('click', (e) => {
    console.log(e.target);
});
const olar = "ola" + 10;
