

function ordenarCrescente(valores) {
    return valores.sort(function(a, b) {
        return a - b;
    });
}


function main() {

    let valores = [5, 3, 9, 1, 7];


    let valoresOrdenados = ordenarCrescente(valores);

    
    
    for (let i = 0; i < 5; i++) {
        console.log(valoresOrdenados[i]);
    }
}


main();
