let valores = []
let number = document.getElementById('number')
let lista = document.getElementById('lista')
let res = document.getElementById('res')

function isNumero(n) {
  if (Number(n) >= 1 && Number(n) <= 100) {
    return true
  } else {
    return false
  }
}
function inLista(n, l) {
  if (l.indexOf(Number(n)) != -1) {
    return true
  } else {
    return false
  }
}

function adicionar() {
  if (isNumero(number.value) && !inLista(number.value, valores)) {
    valores.push(Number(number.value))
    lista.innerHTML += `<option>Valor ${number.value} adicionado.</option>`
    res.innerHTML = ''
  } else {
    window.alert('Número inválido ou já está na lista!')
  }
  number.value = ''
  number.focus()
}

function finalizar() {
  if (valores.length == 0) {
    window.alert('Adicione valores antes de finalizar!')
  } else {
    let tot = valores.length
    let maior = valores[0]
    let menor = valores[0]
    let soma = 0
    let media = 0

    for (let pos in valores) {
      soma += valores[pos]
      media = soma / tot
      if (valores[pos] > maior) {
        maior = valores[pos]
      } else if (valores[pos] < menor) {
        menor = valores[pos]
      }
    }

    res.innerHTML = ''
    res.innerHTML += `Ao todo, temos ${tot} elemento(s)! <br>`
    res.innerHTML += `O maior valor informado foi ${maior}! <br>`
    res.innerHTML += `O menor valor informado foi ${menor}! <br>`
    res.innerHTML += `A soma de todos os valores é ${soma}! <br>`
    res.innerHTML += `A média de todos os valores é ${media}! <br>`
  }
}
