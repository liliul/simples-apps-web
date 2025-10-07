class EmailSender {
    send_email(nomeCompleto, message) {
        console.log(`Email enviado para: ${nomeCompleto}`)
        console.log(`Mensagem: ${message}`)
    }
}

class EmailService {
    send_email(nomeCompleto, message) {
        console.log(`Email enviado para: ${nomeCompleto}`)
        console.log(`Mensagem: ${message}`)
    }
}

class Notification {
    constructor(emailProvider) {
        this.emailProvider = emailProvider
    }

    notify(nomeCompleto, message) {
        this.emailProvider.send_email(nomeCompleto, message)
    }
}

const emailSender = new EmailSender()
const notification = new Notification(emailSender)
notification.notify('Som Goku', 'Olá eu sou o GOKU!!!')

const emailService = new EmailService()
const notificationService = new Notification(emailService)
notificationService.notify('Naruto Uzumaki', 'Eu so o NARUTO e meu sonho é ser hokage!!!')