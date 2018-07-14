//Golbat - https://pokeapi.co/api/v2/pokemon/42/
//Gastly - https://pokeapi.co/api/v2/pokemon/92/
//Haunter - https://pokeapi.co/api/v2/pokemon/93/







class Pokemon {
    constructor(name,abilities,moves,types) {
        this.name = name
        this.abilities = abilities
        this.moves = moves
        this.types = types
    }
}





let golbat;

// Golbat API Call
axios.get("https://pokeapi.co/api/v2/pokemon/42/").then((response) => {
    let data = response.data
    let pokemonName = data.name
    let abilities = data.abilities.map( (element) => element.ability.name)
    let moves = data.moves.map((element) =>  element.move.name)
    let types = data.types.map((element) => element.type.name)
  
     golbat = new Pokemon(pokemonName, abilities,moves,types)
})



let gastly;

//API Call for Gastly

axios.get("https://pokeapi.co/api/v2/pokemon/92/").then((response) => {
    let data = response.data
    let pokemonName = data.name
    let abilities = data.abilities.map( (element) => element.ability.name)
    let moves = data.moves.map((element) =>  element.move.name)
    let types = data.types.map((element) => element.type.name)
  
     gastly = new Pokemon(pokemonName, abilities,moves,types)
})






let haunter;

// API call for Haunter

axios.get("https://pokeapi.co/api/v2/pokemon/93/").then((response) => {
    let data = response.data
    let pokemonName = data.name
    let abilities = data.abilities.map( (element) => element.ability.name)
    let moves = data.moves.map((element) =>  element.move.name)
    let types = data.types.map((element) => element.type.name)


     haunter = new Pokemon(pokemonName, abilities,moves,types)
})
