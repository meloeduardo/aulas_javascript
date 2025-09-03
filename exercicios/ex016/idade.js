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

function calcidade () {
  const agora = new Date()
  const ano = agora.getFullYear()

  const nasc = Number(window.prompt('Em que ano você nasceu?'))
  const idade = ano - nasc

  const saida = document.getElementById('saida')
  saida.innerHTML = `<p>Quem nasceu em ${nasc} vai completar <strong>${idade}</strong> anos em ${ano}.</p>`
}
