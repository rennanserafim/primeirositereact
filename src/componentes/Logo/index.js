import logo from '../../logo.png';
import styled from 'styled-components';

const LogoContainer = styled.div`
display: flex;
padding-right:10rem;
align-items: center;
`

const LogoImage = styled.img`
height: 3.75rem;
padding: 2rem;
justify-content: left;
`
const textLogo = styled.h1`
    font-size:2rem;
`

function Logo (){
    return(
        <LogoContainer>
        <LogoImage src={logo} alt="logo" />
        <textLogo>Estação Brownies</textLogo>
        </LogoContainer>
    )
}
export default Logo;