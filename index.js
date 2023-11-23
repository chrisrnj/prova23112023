let soma = 0;
let quantidade = 0;
let maior = 0;

function calcular() {
    var terminou = false;

    while (!terminou) {
        var nome = prompt('Digite o nome do usuário')
        var altura = parseFloat(prompt('Digite a altura de ' + nome + ' em metros'))
        var peso = parseFloat(prompt('Digite o peso de ' + nome + ' em kilos'))
        var imc = (peso / altura ** 2);
        var classificacao = getClassificacao(imc)

        alert(`Dados de ${nome}
  IMC: ${imc.toFixed(2)}
  Classificação: ${classificacao}
Pressione OK para continuar`)

        var tabela = document.getElementById('tabela')

        removerElementoNuloDaTabela();

        var novoElemento = document.createElement('tr')
        var novoNome = document.createElement('td')
        var novaAltura = document.createElement('td')
        var novoPeso = document.createElement('td')
        var novoIMC = document.createElement('td')
        var novaClassificacao = document.createElement('td')

        novoNome.innerHTML = nome
        novaAltura.innerHTML = altura
        novoPeso.innerHTML = peso
        novoIMC.innerHTML = imc.toFixed(2)
        novaClassificacao.innerHTML = classificacao

        novoElemento.appendChild(novoNome)
        novoElemento.appendChild(novaAltura)
        novoElemento.appendChild(novoPeso)
        novoElemento.appendChild(novoIMC)
        novoElemento.appendChild(novaClassificacao)
        tabela.appendChild(novoElemento)

        soma += imc
        quantidade++
        if (imc > maior) maior = imc

        atualizarInformacoes()

        if (prompt('Adicionar mais um usuário? (S)im / (N)ão').toLowerCase() !== 's') {
            terminou = true
        }
    }
}

let contemElementoNulo = true;

function removerElementoNuloDaTabela() {
    if (contemElementoNulo) {
        document.getElementById('nulo').remove()
        contemElementoNulo = false
    }
}

function getClassificacao(imc) {
    if (imc < 18.5) {
        return "Abaixo do peso normal"
    } else if (imc < 25) {
        return "Peso normal"
    } else if (imc < 30) {
        return "Excesso de peso"
    } else if (imc < 35) {
        return "Obesidade classe I"
    } else if (imc < 40) {
        return "Obesidade classe II"
    } else {
        return "Obesidade classe III"
    }
}

function atualizarInformacoes() {
    document.getElementById('quantidade').innerHTML = 'Usuários coletados: ' + quantidade
    document.getElementById('media').innerHTML = 'Média IMCs: ' + (soma / quantidade).toFixed(2)
    document.getElementById('maior').innerHTML = 'Maior IMC registrado: ' + maior.toFixed(2)
}