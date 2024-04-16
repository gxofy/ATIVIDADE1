
function verificarPar(numero) {
    return numero % 2 === 0;
}


function main() {
    
    let valor = 7; 

    
    if (verificarPar(valor)) {
        console.log(valor + " é um número par.");
    } else {
        console.log(valor + " não é um número par.");
    }
}


main();
