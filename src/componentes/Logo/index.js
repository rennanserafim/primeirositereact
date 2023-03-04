import logo from '../../logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
display: flex;
justify-content: center;
align-items: center;
`

const LogoImage = styled.img`
height: 5rem;
`
function Logo (){
    return(
        <LogoContainer>
        <LogoImage src={logo} alt="logo" />
        <p>Estação brownies</p>
        </LogoContainer>
    )
}
export default Logo;