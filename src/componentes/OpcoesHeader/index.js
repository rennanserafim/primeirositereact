
import styled from 'styled-components'

const Opcao = styled.li`
font-size: 2rem;
min-width: 10rem;
justify-content: center;
align-items: center;  

`

const Opcoes = styled.li`
display: flex;
padding-left: 10rem;
`

const textoOpcoes = ['Categorias','Meus Produtos','Favoritos','Ranking']

function OpcoesHeader(){
return(
    <Opcoes>
    {textoOpcoes.map((texto) => (
      <Opcao><p>{texto}</p></Opcao>
      ))}
  </Opcoes>
  )

}

export default OpcoesHeader