const database = {
	user: [{
		id: "1314",
		name: "Naruto"
	}]
}

function getUser(id) {
	if (!database.user[id]){
		throw new Error("Usuario nao encontrado")
	}

	return database.user[id]
}

try {
	const user = getUser(1)
	console.log(user)
} catch (error) {
	console.error(error.message)
}