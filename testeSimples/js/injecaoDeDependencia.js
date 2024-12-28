class MensagemPura {
	log(msg) {
		console.log(msg)
	}
}
class MensagemInfos {
	log(msg) {
		console.log(`Qual o seu nome? [ ${msg} ]`)
	}
}

class LogService {
	constructor(Logger) {
		this.logger = Logger;
	}

	createMensagem(msg) {
		this.logger.log(`Mostrando a mensagem: ${msg}`)
	}
}

function main() {
	const msg = new MensagemPura()
	const mostrarMsgPura = new LogService(msg)

	mostrarMsgPura.createMensagem('Esta mensagem é para o dev') 

	const msg2 = new MensagemInfos()
	const mostrarMsgInfos = new LogService(msg2)

	mostrarMsgInfos.createMensagem('(Som Goku)')
}

main()