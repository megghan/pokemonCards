function convertPokemonTypesLi(pokemonTypes){
    return pokemonTypes.map((typeSlot) => `<li class="type">${typeSlot.type.name}</li>`)
}

function pokemonToHtmlList(pokemon){
    return `
    <li class="pokemon">
                <span class="number">#00${pokemon.order}</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class = "types">
                        ${convertPokemonTypesLi(pokemon.types).join("")}
                    </ol>
                    <img src="${pokemon.sprites.other.dream_world.front_default}" alt="${pokemon.name}"></div>
                
    </li>`
}

const pokemonList =document.getElementById("pokemonList");


pokeApi.getPokemons().then((pokemons = []) => {
        //debugger
        const newHTML = pokemons.map(pokemonToHtmlList).join("");
        pokemonList.innerHTML =  newHTML;
    })
