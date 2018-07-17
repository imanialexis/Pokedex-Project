let leftButton =  document.getElementById('left-button');
let rightButton = document.getElementById('right-button');
let startButton = document.getElementById('start-button');
let pictureFrame = document.getElementById('picFrame');
let name = document.getElementById('pokemonName');
let hp = document.getElementById('hp');
let attack = document.getElementById('attack');
let defense = document.getElementById('defense');
let abilities = document.getElementById('abilities');


let counter = -1;

rightButton.addEventListener('click', (event) => {
    counter++
    if (counter > pokemonCounter.length -1) {
        counter = 0;
    }
    name.innerText = pokemonCounter[counter].name;
    hp.innerText = `HP : ${pokemonCounter[counter].hp}`;
    attack.innerText = `Attack : ${pokemonCounter[counter].attack}`;
    defense.innerText = `Defense : ${pokemonCounter[counter].defense}`;
    abilities.innerText =  `Ability : ${pokemonCounter[counter].abilities[0]}`;
    pictureFrame.innerHTML = `<img src =${pokemonCounter[counter].image}>`;
    

})

leftButton.addEventListener('click', (event) => {
    counter--
    if (counter < 0) {
       counter = pokemonCounter.length -1
    }
    name.innerText = pokemonCounter[counter].name;
    hp.innerText = `HP : ${pokemonCounter[counter].hp}`;
    attack.innerText = `Attack : ${pokemonCounter[counter].attack}`;
    defense.innerText = `Defense : ${pokemonCounter[counter].defense}`;
    abilities.innerText =  `Ability : ${pokemonCounter[counter].abilities[0]}`;
    pictureFrame.innerHTML = `<img src =${pokemonCounter[counter].image}>`;

})