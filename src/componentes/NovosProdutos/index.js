import { ListaProdutos, produtos } from './dadosNovosProdutos'
import { TituloNovosProdutos } from '../TituloNovosProdutos'
import TalvezVoceGoste from '../TalvezVoceGoste'
import styled from 'styled-components'




const CardNovoProduto = styled.div` 

    padding:2rem;

    &:hover{
        background:#f190b6;
        cursor:pointer;
        transform:translateY(-1rem);
        transition:1s;
        border-radius:1rem;

    }

    &:hover p{
        color:#62463E;
    }

    p{
        font-size:24pt;
        text-align:center;
        color:white;

    }
    img{
        display:flex;
        align-items:center;
        justify-content:center;
        width:25rem;
        height:25rem;



    }

`

const NovosProdutosFundo = styled.div`
    padding:2rem;
    width:100%;
    background:#62463E;

`



const ResultadoNovosProdutos = styled.section`
display:flex;
    flex-direction:space-around;
  justify-content:center;
  flex-wrap: wrap;


`




function NovosProdutos(){
    return(
        <NovosProdutosFundo>
            <TituloNovosProdutos 
        cor="white"
        tamanhoFonte="42pt"
        alinhamento="justify">Novos Produtos</TituloNovosProdutos>
        <ResultadoNovosProdutos>
        
        {ListaProdutos.map( produto =>(
    
            <CardNovoProduto>
            <p>{produto.nome}</p>
            <img src={produto.src}/>
            </CardNovoProduto>
        
        ))}
        <TalvezVoceGoste/>
        </ResultadoNovosProdutos>

        

        </NovosProdutosFundo>

    )
}

export default NovosProdutos