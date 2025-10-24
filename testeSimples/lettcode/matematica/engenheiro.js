/**
Uma empresa de engenharia foi contratada para realizar um serviço no valor de R$71250,00.
Os socios da empresa decidiram que 40% desse valor seria destinado ao pagamento de tres engenheiros que gerenciaram o serviço.
O pagamento para cada um deles sera feito de forma diretemante proporcional ao total de horas trabalhadas.
O numero de dias e o numero de horas diarias trabalhadas
pelos engenheiros foram, respectivamente:

engenheiro 1: 4 dias, numa jornada de 5 horas e meia por dia;

engenheiro 2: 5 dias, numa jornada de 4 horas por dia;

engenheiro 1: 6 dias, numa jornada de 2 horas e meia por dia;

Qual a maior diferença, em real, entre os valores recebidos por esse serviço entre dois desses engenheiros?
*/


function salarioProporcional(valorTotal, porcentagemPagaParaOsEngenheirosDoValorTotal) {
	console.log('Calculando quanto cada engenheiro vão ganhar por dias e horas trabalhados (Proporcional).')
	console.log('-')

	console.log('Calculando porcentagem Paga Para Os Engenheiros e Valor Total')
	const restadoValorPorcentagem = valorTotalDoServico(valorTotal, porcentagemPagaParaOsEngenheirosDoValorTotal)
	console.log(`Valor total: ${valorTotal}. porcentagem: ${porcentagemPagaParaOsEngenheirosDoValorTotal}%. resultado final: ${restadoValorPorcentagem}`)
	console.log('-')

	console.log('Calculando dias e horas trabalhados')
	const resultadoDiasHoras = calculandoDiasEhorasComResultadoDaPorcentagem()
	console.log('Resultado da multiplicação de dias e horas trabalhados')
	console.log('R: ', resultadoDiasHoras)
	console.log('-')

	console.log('Somando dias e horas trabalhados')
	const reduceSomandoDiasHoras = resultadoDiasHoras.reduce((cum, index) => {
		return cum + index
	},0)
	console.log('R: ', reduceSomandoDiasHoras)
	console.log('-')

	console.log(`Dividino ${restadoValorPorcentagem} e ${reduceSomandoDiasHoras}`)
	const dividirRestadoValorPorcentagemReduceSomandoDiasHoras = restadoValorPorcentagem / reduceSomandoDiasHoras
	console.log('R: ', dividirRestadoValorPorcentagemReduceSomandoDiasHoras)
	console.log('-')

	console.log('Resultado final quanto cada engenheiro vai ganhar.')
	const calcularQuantoCadaEngenheiroGanhaPorDia = resultadoDiasHoras.map((i) => {
		return i * dividirRestadoValorPorcentagemReduceSomandoDiasHoras
	})

	const resultadoFinal = calcularQuantoCadaEngenheiroGanhaPorDia.map((item, index) => {
		console.log(index + 1, 'primeiro engenheiro vai ganhar: ', item)
	})

}
salarioProporcional(71250, 40)

function calcularDiasEhorasTrabalhados(dias, horas) {
	//console.log('Calculando dias e horas trabalhados')

	const diasXhoras = dias * horas 
	const resulatadoDiasXhoras = `Resultado de dias e horas trabalhados: ${diasXhoras}`

	return diasXhoras
}

function valorTotalDoServico(valor, porcentagem) {
	const restadoValorPorcentagem = (porcentagem * valor) / 100

	return restadoValorPorcentagem
}

function calculandoDiasEhorasComResultadoDaPorcentagem() {
	// let resultado = []
	let diasEhoras = [
		{
			dias: 4,
			hora: 5.5
		},
		{
			dias: 5,
			hora: 4
		},
		{
			dias: 6,
			hora: 2.5
		}
	]

	const pegandoDiasEhoras = diasEhoras.map((item) => {
		return calcularDiasEhorasTrabalhados(item.dias, item.hora)
	})

	// console.log(pegandoDiasEhoras)

	return pegandoDiasEhoras
}

// calculandoDiasEhorasComResultadoDaPorcentagem()