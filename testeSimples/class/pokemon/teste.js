class ApiPokemon {
    async getPokemonData(pokemon) {
        const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`);
        
        if (!req.ok) {
            throw new Error(`Erro ao buscar o Pokémon. Status: ${req.status}`);
        }

        const data = await req.json();
        return data;
    }
}

class DomManipulator {
    static renderForm() {
        const section = document.createElement('section');

        section.innerHTML = `
            <form id="formPokemon">
                <input id="input" type="text" placeholder="Digite o nome do Pokémon" />
                <button type="submit">Pesquisar Pokémon</button>
            </form>
            <section id="container"></section>
        `;
        document.getElementById('root').appendChild(section);
    }

    static displayPokemon(pokemon) {
        const container = document.getElementById('container');
        const div = document.createElement('div');
        div.innerHTML = `<h1>Pokémon: ${pokemon.name}</h1>`;
        container.appendChild(div);
    }

    static displayError(message) {
        const container = document.getElementById('container');
        container.innerHTML = `<p>${message}</p>`;
    }
}

class Call extends ApiPokemon {
    constructor() {
        super();
    }

    // Método que inicia o processo de renderização e configuração de eventos
    async init() {
        // function da class DomManipulator sendo chamada via static
        DomManipulator.renderForm(); 
        this.addFormEventListener();  
    }

  
    addFormEventListener() {
        document.getElementById('formPokemon').addEventListener('submit', async (e) => {
            e.preventDefault(); 

            document.getElementById('container').innerHTML = '';

            const pokemonName = document.getElementById('input').value.trim();

            if (pokemonName) {
                try {
                   
                    const pokemonData = await this.getPokemonData(pokemonName);

                    DomManipulator.displayPokemon(pokemonData);
                } catch (e) {
                    
                    DomManipulator.displayError(`Erro ao buscar o Pokémon: ${e.message}`);
                }
            } else {
                
                alert('Por favor, insira o nome de um Pokémon.');
            }
        });
    }
}

const api = new Call();
api.init();
