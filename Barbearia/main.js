let total = 0

const botoes = document.querySelectorAll('.adicionar')
const totalEl = document.getElementById('total')
const listaPedido = document.getElementById('lista-de-pedido')

botoes.forEach(function(botao) {
  botao.addEventListener('click', function() {

    const produto = botao.closest('.produto')
    const nome = produto.querySelector('h3').textContent
    const precoTexto = produto.querySelector('.preco').textContent
    const preco = parseFloat(precoTexto.replace('R$', '').replace(',', '.').trim())

    total = total + preco

    const li = document.createElement('li')
    li.textContent = nome + ' — R$ ' + preco.toFixed(2).replace('.', ',')
    listaPedido.appendChild(li)

    totalEl.textContent = 'Total: R$ ' + total.toFixed(2).replace('.', ',')

  })
})

document.getElementById('finalizar-pedido').addEventListener('click', function() {
  if (total === 0) {
    alert('Adicione pelo menos um serviço!')
  } else {
    alert('Pedido finalizado! Total: R$ ' + total.toFixed(2).replace('.', ','))
  }
})