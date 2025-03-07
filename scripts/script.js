let inputAdultos = document.getElementById("adultos");
let inputCriancas = document.getElementById("criancas");
let inputDuracao = document.getElementById("duracao");

function calcular(){
    let adultos = inputAdultos.value;
    let criancas = inputCriancas.value;
    let duracao = inputDuracao.value;

    let qtdTotalCarne = carnePP(duracao) * adultos + (carnePP(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPP(duracao) * adultos;
    let qtdTotalBebida = bebidaPP(duracao) * adultos + (bebidaPP(duracao) / 2 * criancas);

    resultado.innerHTML = `<h2>RESULTADO</h2>`
    resultado.innerHTML += `<p>${qtdTotalCarne / 1000}Kg de Carne</p}`  
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja</p}` 
    resultado.innerHTML += `<p>${Math.ceil(qtdTotalBebida / 2000)} Pet's de 2L de Bebidas </p}`   
}

function carnePP(duracao){
    if (duracao >= 6){
        return 650; 
    }else{
        return 400;
    }
}

function cervejaPP(duracao){
    if (duracao >= 6){
        return 2000; 
    }else{
        return 1200;
    }
}

function bebidaPP(duracao){
    if (duracao >= 6){
        return 1500; 
    }else{
        return 1000;
    }     
}