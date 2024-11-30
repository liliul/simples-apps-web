function Email(verificar, email) {

	if (verificar === "recuperar_senha") {
		return 'Recuperar senha do email, ' + email
	}

	if (verificar === "enviar_email") {
		return 'Enviando o email ' + email
	}


}

const r = Email('recuperar_senha', 'gokuSom#email')
console.log(r)