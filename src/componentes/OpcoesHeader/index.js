
import styled from 'styled-components'

const Opcao = styled.li`
font-size: 2rem;
min-width: 10rem;
justify-content: center;
align-items: center;  
padding-left: 2rem;
text-decoration: none;
&:hover {
  color: #f190b6; 
  transition:0.5s;
  cursor:pointer;
 }

`

const Opcoes = styled.li`
display: flex;

`

const textoOpcoes = ['Categorias','Meus Produtos','Favoritos']

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