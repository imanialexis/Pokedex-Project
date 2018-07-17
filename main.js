//Golbat - https://pokeapi.co/api/v2/pokemon/42/
//Gastly - https://pokeapi.co/api/v2/pokemon/92/
//Haunter - https://pokeapi.co/api/v2/pokemon/93/







class Pokemon {
    constructor(name,hp,attack,defense,abilities,image) {
        this.name = name;
        this.hp = hp;
        this.attack = attack;
        this.defense = defense;
        this.abilities = abilities;
        this.image = image


        // this.moves = moves
        // this.types = types
    }
}





let golbat;

// Golbat API Call
axios.get("https://pokeapi.co/api/v2/pokemon/42/").then((response) => {
    let data = response.data;
    let pokemonName = data.name;
    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let abilities = data.abilities.map( (element) => element.ability.name);
    let image = data.sprites.front_default;
    


    // let moves = data.moves.map((element) =>  element.move.name)
    // let types = data.types.map((element) => element.type.name)
   
    console.log(data)

     golbat = new Pokemon(name,hp,attack,defense,abilities,image)
})



let gastly;

//API Call for Gastly

axios.get("https://pokeapi.co/api/v2/pokemon/92/").then((response) => {
    let data = response.data;
    let pokemonName = data.name;
    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let abilities = data.abilities.map( (element) => element.ability.name);
    let image = data.sprites.front_default;
  
     gastly = new Pokemon(name,hp,attack,defense,abilities,image)
})






let haunter;

// API call for Haunter

axios.get("https://pokeapi.co/api/v2/pokemon/93/").then((response) => {
    let data = response.data;
    let pokemonName = data.name;
    let hp = data.stats[5].base_stat;
    let attack = data.stats[4].base_stat;
    let defense = data.stats[3].base_stat;
    let abilities = data.abilities.map( (element) => element.ability.name);
    let image = data.sprites.front_default;



     haunter = new Pokemon(name,hp,attack,defense,abilities,image)
})
