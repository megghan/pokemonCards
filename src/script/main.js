

function pokemonToHtmlList(pokemon){
    return `
    <li class="pokemon">
                <span class="number">#001</span>
                <span class="name">${pokemon.name}</span>
                
                <div class="detail">
                    <ol class = "types">
                        <li class="type">Grass</li>
                        <li class="type">Poison</li>
                    </ol>
                    <img src="src/imagens/buba.svg" alt="${pokemon.name}"></div>
                
    </li>`
}

const pokemonList =document.getElementById("pokemonList");


pokeApi.getPokemons().then((pokemons) => {
        //debugger
        for (let index = 0; index < pokemons.length; index++) {
            const pokemon = pokemons[index];
            pokemonList.innerHTML += pokemonToHtmlList(pokemon);        
        }
    })
