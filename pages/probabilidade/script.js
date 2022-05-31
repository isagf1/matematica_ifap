const espacoAmostral = document.querySelector('#espaco-amostral')
const evento = document.querySelector('#evento')
const submit = document.querySelector('#calcular')
const resultado = document.querySelector('#resultado')

submit.addEventListener('click', (e) => {
  e.preventDefault()

  const prob = calculaProbabilidade(espacoAmostral.value, evento.value);
  const porcent = calculaPorcentagem(prob)

  resultado.innerHTML = `A sua probabilidade é de ${prob} ou seja, ${porcent}%`
})

const calculaProbabilidade = (espacoAmostral, evento) => {
  const prob = evento / espacoAmostral;
  return Number(prob.toFixed(2))
}

const calculaPorcentagem = (prob) => {
  return prob * 100;
}