//Golbat - https://pokeapi.co/api/v2/pokemon/42/
//Gastly - https://pokeapi.co/api/v2/pokemon/92/
//Haunter - https://pokeapi.co/api/v2/pokemon/93/


class Trainer {
    constructor(name) {
        this.name = name
        this.pokedex = [];
    }

    all() {
        return this.pokedex;
    }

    add(pokemonObject) {
        this.pokedex.push(pokemonObject);
    }

    get(pokemonName) {
         this.pokedex.find((element) => {
            return element.name == name
        })
    }

}


let lordFinesse = new Trainer('Imani');

pokemonCounter = [];


class Pokemon {
    constructor(name, hp, attack, defense, abilities, image) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.image = image;

        // this.moves = moves
        // this.types = types
    }
}





let golbat;

// Golbat API Call
axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/42.json").then((response) => {
    let data = response.data;
    let name = data.name;
    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let abilities = data.abilities.map((element) => element.ability.name);
    let image = data.sprites.front_default;

    // let moves = data.moves.map((element) =>  element.move.name)
    // let types = data.types.map((element) => element.type.name)

    golbat = new Pokemon(name, hp, attack, defense, abilities, image)
    pokemonCounter.push(golbat)

    lordFinesse.add(golbat)
    console.log(lordFinesse)

})



let gastly;

//API Call for Gastly

axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/92.json").then((response) => {
    let data = response.data;
    let name = data.name;
    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let abilities = data.abilities.map((element) => element.ability.name);
    let image = data.sprites.front_default;
    console.log(name)


    gastly = new Pokemon(name, hp, attack, defense, abilities, image)

    pokemonCounter.push(gastly)
    lordFinesse.add(gastly)

})






let haunter;
//"https://pokeapi.co/api/v2/pokemon/93/
// API call for Haunter

axios.get("https://pokeapi-nycda.firebaseio.com/pokemon/93.json").then((response) => {
    let data = response.data;
    let name = data.name;
    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let abilities = data.abilities.map((element) => element.ability.name);
    let image = data.sprites.front_default;
    console.log(name)


    haunter = new Pokemon(name, hp, attack, defense, abilities, image)
    pokemonCounter.push(haunter)
    lordFinesse.add(haunter)
})




