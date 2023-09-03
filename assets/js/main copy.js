const pokedex_container = document.getElementById("pokedex_container");
const pokemons_number = 50;

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemons_number; i++) {
        await getPokemon(i);
    }
}

const getPokemon = async id => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url);
    const pokemon = await res.json();
    console.log(pokemon.name);
    createPokemonCard(pokemon);
}

const createPokemonCard = (pokemon) => {
    const pokemonEl = document.createElement("div");
    pokemonEl.classList.add("pokemon");
    const {id, name, sprites, types, height, weight, abilities} = pokemon;
    const type1 = types[0].type.name;

    var extrainfoSelector = document.getElementById("extra-info");
   
    // Adding modal
    pokemonEl.addEventListener("click", createModal);
    function createModal() {
        var modalInfo = pokemonEl;
        console.log(modalInfo);
        pokemonEl.append = modalInfo;
        pokemonEl.classList.toggle('active');
        pokemonEl.classList.contains('active')? (this.querySelector(".extra-info").style.display = "block") : (this.querySelector(".extra-info").style.display = "none");
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

    // Pokemon type icons defined
    const pokemonTypeIcons = {
        normal: 'assets/img/types/normal.png',
        fire: 'assets/img/types/fire.png',
        water: 'assets/img/types/water.png',
        electric: 'assets/img/types/electric.png',
        grass: 'assets/img/types/grass.png',
        ice: 'assets/img/types/ice.png',
        fighting: 'assets/img/types/fighting.png',
        poison: 'assets/img/types/poison.png',
        ground: 'assets/img/types/ground.png',
        flying: 'assets/img/types/flying.png',
        psychic: 'assets/img/types/psychic.png',
        bug: 'assets/img/types/bug.png',
        rock: 'assets/img/types/rock.png',
        ghost: 'assets/img/types/ghost.png',
        dragon: 'assets/img/types/dragon.png',
        dark: 'assets/img/types/dark.png',
        steel: 'assets/img/types/steel.png',
        fairy: 'assets/img/types/fairy.png'
    }

    // Different behavior depending on two or just one type
    if (types.length === 2) {
        var type2 = types[1].type.name;

        /* console.log(abilities[0]["ability"]["name"]); */
        
        if (abilities.length === 2) {
        var pokeInnerHTML = `
        <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}" />
        </div>
        <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type"><span><img src="${pokemonTypeIcons[type1]}" width="15%"> <img src="${pokemonTypeIcons[type2]}" width="15%"></span></small>
        </div>
        <div class="extra-info">
        <p class="type"><strong>Type:</strong> <span>${type1} / ${type2}</span></p>
        <p class="type"><strong>Height:</strong> <span>${height}</span></p>
        <p class="type"><strong>Weight:</strong> <span>${weight}</span></p>
        <p class="type"><strong>Abilities:</strong> <span>${abilities[0]["ability"]["name"]} / ${abilities[1]["ability"]["name"]} </span></p>
        </div>
        `;} else {
            var pokeInnerHTML = `
            <div class="img-container">
            <img src="${sprites.front_default}" alt="${name}" />
            </div>
            <div class="info">
            <span class="number">${id}</span>
            <h3 class="name">${name}</h3>
            <small class="type"><span><img src="${pokemonTypeIcons[type1]}" width="15%"> <img src="${pokemonTypeIcons[type2]}" width="15%"></span></small>
            </div>
            <div class="extra-info">
            <p class="type"><strong>Type:</strong> <span>${type1} / ${type2}</span></p>
            <p class="type"><strong>Height:</strong> <span>${height}</span></p>
            <p class="type"><strong>Weight:</strong> <span>${weight}</span></p>
            <p class="type"><strong>Abilities:</strong> <span>${abilities[0]["ability"]["name"]} </span></p>
            </div>
            `;
        }

        pokemonEl.style.backgroundImage = `linear-gradient(-45deg, ${pokemonTypeColors[type2]} 50%, ${pokemonTypeColors[type1]} 50%)`;
        /* console.log("pokemonTypeColors.type1: " + pokemonTypeColors[type1]);
        console.log("pokemonTypeColors.type2: " + pokemonTypeColors[type2]); */

        

    } else {

        if (abilities.length === 2) {
        var pokeInnerHTML = `
        <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}" />
        </div>
        <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type"><span><img src="${pokemonTypeIcons[type1]}" width="15%"></span></small>
        </div>
        <div class="extra-info">
        <p class="type"><strong>Type:</strong> <span>${type1}</span></p>
        <p class="type"><strong>Height:</strong> <span>${height}</span></p>
        <p class="type"><strong>Weight:</strong> <span>${weight}</span></p>
        <p class="type"><strong>Abilities:</strong> <span>${abilities[0]["ability"]["name"]} / ${abilities[1]["ability"]["name"]} </span></p>
        </div>
       `;} else {
        var pokeInnerHTML = `
        <div class="img-container">
        <img src="${sprites.front_default}" alt="${name}" />
        </div>
        <div class="info">
        <span class="number">${id}</span>
        <h3 class="name">${name}</h3>
        <small class="type"><span><img src="${pokemonTypeIcons[type1]}" width="15%"></span></small>
        </div>
        <div class="extra-info">
        <p class="type"><strong>Type:</strong> <span>${type1}</span></p>
        <p class="type"><strong>Height:</strong> <span>${height}</span></p>
        <p class="type"><strong>Weight:</strong> <span>${weight}</span></p>
        <p class="type"><strong>Abilities:</strong> <span>${abilities[0]["ability"]["name"]}</span></p>
        </div>
       `;
       }

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

/*     console.log(types.length);
    if (types.length > 1) {
        console.log(`${type1} / ${type2}`);
    } else console.log(type1); */

    // console.log(type2);
    
    pokemonEl.innerHTML = pokeInnerHTML;
    pokedex_container.appendChild(pokemonEl);
}

// getPokemon(1);

fetchPokemons();