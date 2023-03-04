import Logo from '../../componentes/Logo';
import OpcoesHeader from '../../componentes/OpcoesHeader'
import Icones from '../../componentes/Icones'
import styled from 'styled-components';

const HeaderContainer = styled.header `

    background-color: #282c34;
    min-height: 10vh;
    display: flex;
    color: white;
    font-size: 3rem;
    padding-left: 2rem;
    align-items: center;
    justify-content: center;
    


`

function Header(){
    return(
        <HeaderContainer>
        <Logo/>
        <OpcoesHeader/>
        <Icones/>
  
        </HeaderContainer>
    )
}

export default Header;