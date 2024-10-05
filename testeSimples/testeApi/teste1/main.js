const urlRandomuser = 'https://randomuser.me/api/?results=15'

// fetch(urlRandomuser).then(console.log)

// fetch('/')
//     .then( res => res.text())
//     .then(console.log)

const controller = new AbortController()

const signal = controller.signal
console.log(signal)

fetch('/', { signal })
.then( res => res.text())
.then(console.log)
.catch(console.dir)


// controller.abort(new DOMException('(* *) mensagem'))
// controller.abort(42)
