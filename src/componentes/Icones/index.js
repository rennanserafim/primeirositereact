import profile from '../../imagens/profile.svg'
import carrinho from '../../imagens/carrinho.svg'
import styled from 'styled-components'

const Icone = styled.li`
padding-left:2rem;
`
const IconesFiguras = styled.ul`
     display: flex;
`

const icones = [profile, carrinho]

function Icones(){
    return(
        <IconesFiguras>
        {icones.map ((icone)=>(
          <Icone><img className='icone' alt='icone' src='icone'></img></Icone>
        ))}
        
    </IconesFiguras>
    )
}

export default Icones;