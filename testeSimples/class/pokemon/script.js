class ApiPokemon {

    async GetApi(pokemon) {
        const req = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}`)
        if (!req.ok) {
            throw new Error(`Erro: ${req.status}`)
        }
        const res = await req.json()

        return res;
        
    }
}

class Call extends ApiPokemon {

    async render () {
        this.html()

        document.getElementById('formPokemon').addEventListener('submit', async (e) => {
            e.preventDefault()
    
            document.getElementById('container').innerHTML = ''
            
            const pokemonName = document.getElementById('input').value.trim()
            if (pokemonName) {
                
                try {
                    const res = await this.GetApi(pokemonName)  
                    
                    console.log(res)

                    const div = document.createElement('div')
                    
                    div.innerHTML = `<h1>Pokémon: ${res.name}</h1>`
                    
                    document.getElementById('container').appendChild(div) 
                }
                catch(e) {
                    document.getElementById('container').innerHTML = `
                        <p>Erro na api pokemon. Status: ${e}</p>
                    `
                }
                
                } else {
                alert('Por favor, insira o nome de um Pokémon.')
            }
        });
        
    }

    html () {
        const section = document.createElement('section')

        section.innerHTML = `
            <form id="formPokemon">
                <input id="input" type="text" placeholder="Pokemon" />
                <button type="submit">pokemon</button>
            </form>

            <section id="container"></section>
        `
        document.getElementById('root').appendChild(section)

    }

}

const api = new Call()
api.render();
