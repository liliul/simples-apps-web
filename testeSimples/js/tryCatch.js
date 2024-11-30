/**
 * Como funciona:
    O código no try tenta realizar uma divisão por zero, que não gera um erro no JavaScript por si só, mas criamos um erro manualmente com throw new Error("Divisão por zero!").
    O erro é capturado no catch, onde ele é tratado.
    O bloco finally sempre será executado, independentemente de um erro ter ocorrido ou não.
 * 
 * Quando usar:
    try: Quando você sabe que algo pode gerar um erro e quer tratá-lo.
    catch: Para capturar e tratar esses erros de forma controlada.
    finally: Quando você quer garantir que algumas ações sejam sempre realizadas, como liberar recursos ou fazer limpeza, mesmo quando um erro acontece.
 * */

try {

    let divisor = 0;
    let resultado = 10 / divisor;
    if (divisor === 0) {
        throw new Error("Divisão por zero!");
    }

} catch (erro) {
    console.error("Erro capturado:", erro.message);
} finally {
    console.log("O bloco finally sempre será executado.");
}
