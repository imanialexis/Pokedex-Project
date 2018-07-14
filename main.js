//Golbat - https://pokeapi.co/api/v2/pokemon/42/
//Gastly - https://pokeapi.co/api/v2/pokemon/92/
//Haunter - https://pokeapi.co/api/v2/pokemon/93/







class Pokemon {
    constructor(name)
    let name = this.name
}






axios.get('https://pokeapi.co/api/v2/pokemon/42/').then((response) => {
    let data = response.data
    let name = data.name
    console.log(name)

})
