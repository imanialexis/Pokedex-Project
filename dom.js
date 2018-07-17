let leftButton =  document.getElementById('left-button');
let rightButton = document.getElementById('right-button');
let startButton = document.getElementById('start-button');
let pictureFrame = document.getElementById('picFrame');
let name = document.getElementById('pokemonName');
let hp = document.getElementById('hp');
let attack = document.getElementById('attack');
let defense = document.getElementById('defense');
let abilities = document.getElementById('abilities');




rightButton.addEventListener('click', (event) => {
    for(let i = 0; i < pokemonCounter.length; i++) {
        name.innerText = pokemonCounter[i].name;
        hp.innerText = pokemonCounter[i].hp;
        attack.innerText = pokemonCounter[i].attack;
        defense.innerText = pokemonCounter[i].defense;
        abilities.innerText = pokemonCounter[i].abilities[i]
        pictureFrame.innerHTML = `<img src =${pokemonCounter[i].image}>`
    }

})


