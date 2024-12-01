function Usuario(name, email) {
    return new Promise((resolve, reject) => {
        const erro = false

        if (erro) {
            console.log(erro);
            
            reject(new Error('Erro na função'))
        }

        console.log('name e email');
        resolve({ name, email })
    })
}

Usuario('Som Goku', 'goku123@email.com')
    .then((infos) => console.log(infos))
    .catch((erro) => console.log(erro))