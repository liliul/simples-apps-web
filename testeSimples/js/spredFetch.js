function spred(headers, method) {
	return {...headers, ...method}
}

const spredd = spred({
	method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    }
},{
	 body: JSON.stringify('naruto')
})
console.log(spredd)