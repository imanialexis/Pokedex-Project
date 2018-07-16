//Golbat - https://pokeapi.co/api/v2/pokemon/42/
//Gastly - https://pokeapi.co/api/v2/pokemon/92/
//Haunter - https://pokeapi.co/api/v2/pokemon/93/




let pokemonCounter = [];


class Pokemon {
    constructor(name,hp,attack,defense,abilities) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        // this.moves = moves
        // this.types = types
    }
}





let golbat;

// Golbat API Call
axios.get("https://pokeapi.co/api/v2/pokemon/42/").then((response) => {
    let data = response.data;
    let name = data.name;
    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let abilities = data.abilities.map( (element) => element.ability.name);
    // let moves = data.moves.map((element) =>  element.move.name)
    // let types = data.types.map((element) => element.type.name)
    // console.log(data)

     golbat = new Pokemon(name,hp,attack,defense,abilities)

     pokemonCounter.push(golbat)

    //  console.log(pokemonCounter.length)
})



let gastly;

//API Call for Gastly

axios.get("https://pokeapi.co/api/v2/pokemon/92/").then((response) => {
    let data = response.data;
    let name = data.name;
    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let abilities = data.abilities.map( (element) => element.ability.name)
  
     gastly = new Pokemon(name,hp,attack,defense,abilities)

     pokemonCounter.push(gastly)

    //  console.log(pokemonCounter.length)
})






let haunter;

// API call for Haunter

axios.get("https://pokeapi.co/api/v2/pokemon/93/").then((response) => {
    let data = response.data;
    let name = data.name;
    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let abilities = data.abilities.map( (element) => element.ability.name);


     haunter = new Pokemon(name,hp,attack,defense,abilities)

     pokemonCounter.push(haunter)

    //  console.log(pokemonCounter)
})


class Trainer  {
    constructor(pokedex) {
        this.pokedex =[];

    }
        all() {
            return pokemonCounter
        };

        get(name) {
            return this.name
        };

        add(pokemonObject) {
            // ??
        };
    }

