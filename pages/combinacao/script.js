const n = document.querySelector('#total-elementos')
const p = document.querySelector('#numero-combinacao')
const submit = document.querySelector('#submit')
const resultado = document.querySelector('#resultado')

submit.addEventListener('click', (e) => {
  e.preventDefault()
  const divisor = calculaFatorial(p.value) * calculaFatorial(n.value - p.value)
  const resul = calculaFatorial(n.value) / divisor;

  if (resul < 0 || !resul) {
    resultado.innerHTML = 'Tem algo errado com sua conta!'
    resultado.classList.add('erro')
    resultado.classList.remove('resultado')
  } else {
    resultado.innerHTML = `É possível formar ${resul} combinações!`
    resultado.classList.remove('erro')
    resultado.classList.add('resultado')
  }

})

const calculaFatorial = (n) => {
  let arranjo = n;
  for (let i = 1; i < n; i++) {
    arranjo *= i;
  }
  if (n === 0) {
    return 1;
  }
  return arranjo;
}
