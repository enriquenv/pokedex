const poke_container = document.getElementById("poke_container");
const pokemons_number = 150;

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon);
    createPokemonCard(pokemon);
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    const {id, name, sprites, types} = pokemon;
    //if (types[1].type.name != )
    const type1 = types[0].type.name;

    if (types.length === 2) {
        var type2 = types[1].type.name;

        var pokeInnerHTML = `
        <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}" />
        </div>
        <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type1} / ${type2}</span></small>
        </div>
        `;
    } else {
        var pokeInnerHTML = `
        <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}" />
        </div>
        <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type">Type: <span>${type1}</span></small>
       </div>
       `;

       pokemonEl.classList.add("pokemon-type");

       switch (type1) {
        case "normal":
        pokemonEl.classList.add("pokemon-normal");
        break;
        case "fire":
        pokemonEl.style.backgroundColor = "#EE8130";
        break;
        case "water":
        pokemonEl.classList.add("pokemon-water");
        break;
        case "electric":
        pokemonEl.classList.add("pokemon-electric");
        break;
        case "grass":
        pokemonEl.classList.add("pokemon-grass");
        break;
        case "ice":
        pokemonEl.classList.add("pokemon-ice");
        break;
        case "fighting":
        pokemonEl.classList.add("pokemon-fighting");
        break;
        case "poison":
        pokemonEl.classList.add("pokemon-poison");
        break;
        case "ground":
        pokemonEl.classList.add("pokemon-ground");
        break;
        case "flying":
        pokemonEl.classList.add("pokemon-flying");
        break;
        case "psychic":
        pokemonEl.classList.add("pokemon-psychic");
        break;
        case "bug":
        pokemonEl.classList.add("pokemon-bug");
        break;
        case "rock":
        pokemonEl.classList.add("pokemon-rock");
        break;
        case "ghost":
        pokemonEl.classList.add("pokemon-ghost");
        break;
        case "dragon":
        pokemonEl.classList.add("pokemon-dragon");
        break;
        case "dark":
        pokemonEl.classList.add("pokemon-dark");
        break;
        case "steel":
        pokemonEl.classList.add("pokemon-steel");
        break;
        case "fairy":
        pokemonEl.classList.add("pokemon-fairy");
        break;
        default:
        pokemonEl.classList.add("pokemon-other");
      }

    }

    console.log(types.length);
    if (types.length > 1) {
        console.log(`${type1} / ${type2}`);
    } else console.log(type1);

    // console.log(type2);
    
    pokemonEl.innerHTML = pokeInnerHTML;
    poke_container.appendChild(pokemonEl);
}

// getPokemon(1);

fetchPokemons();