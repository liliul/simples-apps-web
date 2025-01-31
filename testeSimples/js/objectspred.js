const User1 = {
	name: "lililu",
	idade: 19,
	status: true,
	email: 'lilu@email.com'
}


function objectSpred(user) {
	return {
		...user,
		status: user.status ? 'Ativo' : 'Inativo',
		idade: user.idade < 20 ? 'Idade menor que 20' : 'Idade maior que 20'
	}
}

let r = objectSpred(User1)

console.log('User1', r)

console.log('---------------------------------------------------------------------')

const User = [
	{
		name: "lililu",
		idade: 25,
		status: true,
		email: 'lilu@email.com'
	},
	{
		name: "naruto",
		idade: 19,
		status: true,
		email: 'uzumaki@email.com'
	},
	{
		name: "Som Goku",
		idade: 36,
		status: false,
		email: 'goku@email.com'
	},
	{
		name: "Vegeta",
		idade: 36,
		status: true,
		email: 'vegeta@email.com'
	}
]


const formt = {
	birthYear: age => {
		const currentYear = new Date().getFullYear()
		return currentYear - age
	},

	userStructure: user => 	({
		...user,
		birthYear: formt.birthYear(user.idade),
		status: user.status ? "Ativo" : "Inatico"
	})
}

const novoArray = User.map(formt.userStructure)

console.log(novoArray)