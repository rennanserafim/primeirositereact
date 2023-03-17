import styled from 'styled-components'

const Card = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
flex-wrap: wrap;
margin:1.5rem 3rem;
padding: 1rem 2rem;
width: 50rem;
font-family: Quicksand, arial, sans-serif;
box-shadow: 0 0 20px rgba(0, 0, 0, 0.05), 0 0px 40px rgba(0, 0, 0, 0.08);
border-radius: 1.5rem;

`

const TituloCardRecomenda = styled.h1`
    justify-content:center;
    font-family: Quicksand, arial, sans-serif;
    font-size:1.5rem;
    color:#62463E;
`
const SubTituloCard = styled.h2`
font-family: Quicksand, arial, sans-serif;
font-size:1.25rem;
color:#62463E;
`
const DescricaoCard = styled.p`
font-family: Quicksand, arial, sans-serif;
font-size:1rem;
color:#62463E;
`
const ImagemCard = styled.img`
    margin:2rem;
    width:15rem;
    height:auto;
    border-radius:1.10rem;
`
const BotaoCard = styled.button`
    padding: 1rem;
    font-size:1.5rem;
    font-weight: 500;
    margin:1rem;
    color:white;
    background:#62463E;
    border-radius:1rem;

    &:hover {
        cursor: pointer;
        background:transparent;
        color:#62463E;
        transition:0.2s;
    }
`

const CardTexto = styled.div`
    display:flex;
    flex-direction:column;
    align-items:flex-start;
    width:50%;

`

function CardRecomenda({titulo,subtitulo, descricao, img}){
    return(
        <Card>

        <CardTexto>
        <TituloCardRecomenda>{titulo}</TituloCardRecomenda>
        <SubTituloCard>{subtitulo}</SubTituloCard>
        <DescricaoCard>{descricao}</DescricaoCard>
        </CardTexto>
        <ImagemCard src={img}/>
        <br/>
        <BotaoCard>Saiba Mais</BotaoCard>
        
        </Card>
    )
}

export default CardRecomenda