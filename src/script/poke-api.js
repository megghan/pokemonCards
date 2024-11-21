
const pokeApi = {}

pokeApi.getPokemons =(offset = 0, limit =10) => { 
    const url=`https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`;
    return fetch(url)
    .then((response)=> response.json())
        //o fetch é um processo assincrono e as outras partes do programa vão rodando até a resposta vir
    .then((jsonBody) => jsonBody.results)
    .catch((error) => console.log(error))
}  