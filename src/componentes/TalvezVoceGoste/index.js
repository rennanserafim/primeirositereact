import CardRecomenda from '../CardRecomenda'
import copaomorango from '../../imagens/produtos/copaomorango.jpg'
import minicopouva from '../../imagens/produtos/minicopouva.jpg'
import { TituloNovosProdutos } from '../TituloNovosProdutos'
import styled from 'styled-components'


const NovosProdutosFundo = styled.div`

    margin:2rem;
    padding:2rem;
    background:white;

`



const CardNovosFundos = styled.div`
display:flex;
flex-direction:row;
align-items:center;
justify-content:space-around;
flex-wrap: wrap;

    padding: 0rem 200rem;
    margin:2rem;
    background:white;
`


function TalvezVoceGoste() {
    return(

        
<NovosProdutosFundo>
<TituloNovosProdutos cor='#62463E'>Talvez você também goste:</TituloNovosProdutos>
    <CardNovosFundos>
    
    <CardRecomenda 
    titulo="Para quem gosta de morango, temos novidades:"
    subtitulo="Copão de morango"
    descricao="Copo de 400ml, recheado com: Brownie, Creme branco, morangos e Nutella."
    img={copaomorango}
            >

    </CardRecomenda>
    <CardRecomenda 
    titulo="O copão com o mesmo sabor, e em porção individual."
    subtitulo="Mini Copo de Uva"
    descricao="Copo de 250ml, recheado com: Brownie, Creme branco, uvas verdes e Nutella."
    img={minicopouva}
            >

    </CardRecomenda>
    </CardNovosFundos>
    </NovosProdutosFundo>

    )
}

export default TalvezVoceGoste