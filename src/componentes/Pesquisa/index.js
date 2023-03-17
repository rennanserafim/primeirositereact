import Input from '../Input/'
import styled from 'styled-components'
import { ListaProdutos } from './dadosPesquisa'
import React from 'react'

const PesquisaSection = styled.div`
    background:white;
    color: #62463E;
    text-align:center;
    Padding: 5rem 0;
    height:15rem;
    width:100%;
`
const TituloPesquisa = styled.h3`
    color: ${(props => props.color)};
    font-size:36px;
    text-align:center;
    width:100%;

`
const TituloProduto = styled.div`
    display:flex;
    flex-direction:column;
    padding:2rem;
`

const ListaProdutosTotal = styled.div`
    display:flex;
    justify-content:space-around;

`

const CardProdutoLista = styled.div`
    display:flex;
    flex-direction:column;


`
const ImagemProdutoLista = styled.div`
    display:flex;
    flex-direction:column;
`

const ResultadoLista = styled.div`
    display:flex;
    flex-direction:row;
    flex-wrap:wrap;
    justify-content:space-around;
    margin:2rem;

    &:hover{
        transform: scale(110%);
        transition: 0.3s ease-out;
    }


    p{
        font-size:24pt;
        text-align:center;
        color:#62463E;
    }
    img{
        width:25rem;
        height:25rem;
    }
`



function Pesquisa() {
    // Produto pesquisado, e SetProdutos que ele ira pegar do input
    const [produtosPesquisados, setProdutosPesquisados] = React.useState("");

    console.log(produtosPesquisados)

    //Converte ProdutosPesquisados em lowercase
    const produtosPesquisadosLow = produtosPesquisados.toLowerCase();

    //Filtra tudo o que está incluido no input, com o que esta na lista com lowerCase
    const PesquisandoProduto = ListaProdutos.filter((produto) => produto.nome.toLowerCase().includes(produtosPesquisadosLow))

    return(
       <div>
        <PesquisaSection>

           <TituloPesquisa>Encontre o produto:</TituloPesquisa>
        <Input
            placeholder="Digite o nome do produto..."
            key={ListaProdutos.nome}
            type="text"
            value={ListaProdutos.id}
            //Pega o valor que foi digitado no input e seta como setProdutosPesquisados
            onChange={(evento) => setProdutosPesquisados(evento.target.value)}

        />
       
        <br></br>
        <br></br>
        </PesquisaSection>
       <TituloPesquisa color='#62463E'>Produtos:</TituloPesquisa>
    
        <ListaProdutosTotal>
         {PesquisandoProduto.map(produto => ( //map mostra o que foi filtrado com o includes
            <ResultadoLista>
            <CardProdutoLista>
            <TituloProduto>
            <p>{produto.nome}</p>
            </TituloProduto>
            <ImagemProdutoLista>
            <img src={produto.src}/>
            <p>R$ {produto.preco}</p>
            </ImagemProdutoLista>
            </CardProdutoLista>
            </ResultadoLista>
        ))}
        </ListaProdutosTotal> 

         </div>
     

    
       

    )
}



export default Pesquisa

