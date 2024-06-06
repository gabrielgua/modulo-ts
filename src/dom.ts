const nome = document.getElementById('nome'); //HTMLElement | null
const form = document.getElementsByTagName('form'); //HTMLCollectionOf<HTMLFormElement>
const button = document.getElementById('btn');

button?.addEventListener('click', (e: MouseEvent) => {
    console.log(e.target);
})

const olar = "ola" + 10;

