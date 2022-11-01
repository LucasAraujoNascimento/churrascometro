// Carne - 400 gr por pessoa + de 6 horas - 650
// Cerveja - 1200ml por pessoa + de 6 horas - 2000 ml
// Refrigerante - 1000ml por pessoa + de 6 horas 1500ml

// Criannças valem por 0,5


let botao = document.getElementById('calcular');

function carnePP(duracao) {
    if (duracao >= 6) {
        return 650;
    } else {
        return 400
    }
}

function cervejaPP(duracao) {
    if (duracao >= 6) {
        return 2000
    } else {
        return 1200
    }
}

function refriPP(duracao) {
    if (duracao >= 6) {
        return 1500
    } else {
        return 1000
    }
}

botao.addEventListener('click', function () {

    let adultos = document.getElementById('adultos').value;
    let criancas = document.getElementById('criancas').value;
    let duracao = document.getElementById('duracao').value;


    let resultado = document.getElementById('resultado');

    let rsCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let rsCerveja = cervejaPP(duracao) * adultos;
    let rsRefri = refriPP(duracao) * adultos + (refriPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<h3>Você vai precisar de:</h3>`
    resultado.innerHTML += `<p>${rsCarne / 1000} KG de Carne</p>`
    resultado.innerHTML += `<p>${Math.ceil(rsCerveja / 350)} Latas de Cerveja</p>`
    resultado.innerHTML += `<p>${Math.ceil(rsRefri / 2000)} Garrafas de Bebidas</p>`
});