class JuntarArrays {
    constructor (array1 = ['Naruto','Sasuke','Itachi','Kakashi'], array2 = ['Goku','Vegeta','Gohan','Kururin','Picolo']) {
        this.array1 = array1
        this.array2 = array2
    }

    juntandoOsArrays(conter) {
        const spad = [...this.array1,...this.array2]
        console.log(typeof spad);
        
        spad.forEach((arr) => {
          console.log(arr);
          
        })

        spad.filter((nome) => {
            console.log(nome === conter);
        
        })

        
    }
}

const ver = new JuntarArrays()
ver.juntandoOsArrays('Itachi')