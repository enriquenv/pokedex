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
    const {id, name, sprites, types, height, weight, ability} = pokemon;
    console.log(pokemon);
    const type1 = types[0].type.name;
   
    // Adding modal
    pokemonEl.addEventListener("click", createModal);
    function createModal() {
        console.log(pokemonEl);
        pokemonEl.classList.toggle('active');
      }    

    // Pokemon type colors defined
    const pokemonTypeColors = {
        normal: '#A8A77A',
        fire: '#EE8130',
        water: '#6390F0',
        electric: '#F7D02C',
        grass: '#7AC74C',
        ice: '#96D9D6',
        fighting: '#C22E28',
        poison: '#A33EA1',
        ground: '#E2BF65',
        flying: '#A98FF3',
        psychic: '#F95587',
        bug: '#A6B91A',
        rock: '#B6A136',
        ghost: '#735797',
        dragon: '#6F35FC',
        dark: '#705746',
        steel: '#B7B7CE',
        fairy: '#D685AD'
    }

    // Different behavior depending on two or just one type
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

        /* pokemonEl.style.background = linear-gradient(to right, #FF0000, #D4D3DD, #ffc600); */
        /* pokemonEl.style.backgroundImage = getCssValuePrefix() + 'linear-gradient('
        + orientation + ', ' + colorOne + ', ' + colorTwo + ')'; */

        pokemonEl.style.backgroundImage = `linear-gradient(-45deg, ${pokemonTypeColors[type1]} 50%, ${pokemonTypeColors[type2]} 50%)`;
        console.log("pokemonTypeColors.type1: " + pokemonTypeColors[type1]);
        console.log("pokemonTypeColors.type2: " + pokemonTypeColors[type2]);

        /* `
        linear-gradient(to right, ${pokemonTypeColors.type1}, ${pokemonTypeColors.type2});
        `; */

        

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

       switch (type1) {
        case "normal":
        pokemonEl.style.backgroundColor = pokemonTypeColors.normal;
        break;
        case "fire":
        pokemonEl.style.backgroundColor = pokemonTypeColors.fire;
        break;
        case "water":
        pokemonEl.style.backgroundColor = pokemonTypeColors.water;
        break;
        case "electric":
        pokemonEl.style.backgroundColor = pokemonTypeColors.electric;
        break;
        case "grass":
        pokemonEl.style.backgroundColor = pokemonTypeColors.grass;
        break;
        case "ice":
        pokemonEl.style.backgroundColor = pokemonTypeColors.ice;
        break;
        case "fighting":
        pokemonEl.style.backgroundColor = pokemonTypeColors.fighting;
        break;
        case "poison":
        pokemonEl.style.backgroundColor = pokemonTypeColors.poison;
        break;
        case "ground":
        pokemonEl.style.backgroundColor = pokemonTypeColors.ground;
        break;
        case "flying":
        pokemonEl.style.backgroundColor = pokemonTypeColors.flying;
        break;
        case "psychic":
        pokemonEl.style.backgroundColor = pokemonTypeColors.psychic;
        break;
        case "bug":
        pokemonEl.style.backgroundColor = pokemonTypeColors.bug;
        break;
        case "rock":
        pokemonEl.style.backgroundColor = pokemonTypeColors.rock;
        break;
        case "ghost":
        pokemonEl.style.backgroundColor = pokemonTypeColors.ghost;
        break;
        case "dragon":
        pokemonEl.style.backgroundColor = pokemonTypeColors.dragon;
        break;
        case "dark":
        pokemonEl.style.backgroundColor = pokemonTypeColors.dark;
        break;
        case "steel":
        pokemonEl.style.backgroundColor = pokemonTypeColors.steel;
        break;
        case "fairy":
        pokemonEl.style.backgroundColor = pokemonTypeColors.fairy;
        break;
        default:
        pokemonEl.style.backgroundColor = pokemonTypeColors.normal;
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