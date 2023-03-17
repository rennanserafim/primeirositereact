import styled from "styled-components";

export const TituloNovosProdutos = styled.h2`
    display:flex;
    justify-content:center;
    font-size:36pt;
    color:${props => props.cor || 'black'};
    font-size:${props => props.tamanhoFonte || '36pt'};
    text-align:${props => props.alinhamento || 'center'};
`
