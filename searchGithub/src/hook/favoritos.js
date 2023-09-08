import {search} from "./api.js";

/**
    @class {string}
    @augments {root}
    @descriptions crud ex save add delete update do projeto
*/

export class Favoritos {

    constructor(root) {
        this.root = document.querySelector(root)
        this.load()
        
    }


    load() {

        this.entries = JSON.parse(localStorage.getItem('@github-favorites:')) || []

        }
    
    save() {
        localStorage.setItem('@github-favorites:', JSON.stringify(this.entries))
    }




    async add(username) {
        try {

            const userExists = this.entries.find(entry => entry.login === username)

            if(userExists){
                throw new Error('Usuário já cadastrado')
            }



            const user = await search(username)

            if(user.login === undefined) {
                throw new Error('Usuário não encontrado!')
            }

            this.entries = [user, ...this.entries]
            this.update()
            this.save()


            } catch(error) {
                alert(error.message)
            }        

    }



    
    delete(user) {
        const filteredEntries = this.entries.filter(entry => entry.login !== user.login)

        this.entries = filteredEntries
        this.update()
        this.save()
    }



}
