/*
    ## IMPORTANTE ##
    Você tem todo o direito de usar esse material
    para seu próprio aprendizado. Professores também
    podem ter acesso a todo o conteúdo e usá-los com
    seus alunos. Porém todos os que usarem esse
    material - seja para qual for a finalidade - deverão
    manter a referência ao material original, disponível
    em https://github.com/gustavoguanabara/javascript. Este
    material não poderá ser utilizado em nenhuma hipótese
    para ser replicada - integral ou parcialmente -
    por autores/editoras/instituições para criar livros
    ou apostilas, com finalidades de obter ganho financeiro
    com ele.
*/

function info () {
  const meses = new Array('Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez')
  const semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb')
  const agora = new Date()
  const saida = document.getElementById('saida')
  const dia = agora.getDate()
  const mes = agora.getMonth() // Jan = 0 | Fev = 1 | Mar = 2 e assim vai...
  const ano = agora.getFullYear()
  const sem = agora.getDay() // Dom = 0 | Seg = 1 | Ter = 2 e assim vai...
  const hora = agora.getHours()
  const min = agora.getMinutes()
  const seg = agora.getSeconds()
  saida.innerHTML = `<p>Dia: <mark>${dia}</mark></p>`
  saida.innerHTML += `<p>Mês: <mark>${meses[mes]}</mark></p>`
  saida.innerHTML += `<p>Ano: <mark>${ano}</mark></p>`
  saida.innerHTML += `<p>Dia da semana: <mark>${semana[sem]}</mark></p>`
  saida.innerHTML += `<p>Hora: <mark>${hora}</mark></p>`
  saida.innerHTML += `<p>Minutos: <mark>${min}</mark></p>`
  saida.innerHTML += `<p>Segundos: <mark>${seg}</mark></p>`
}
