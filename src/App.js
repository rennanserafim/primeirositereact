import './App.css';
import Header from './componentes/Header'
import styled from 'styled-components'
import Pesquisa from './componentes/Pesquisa'
import NovosProdutos from './componentes/NovosProdutos';

const AppContainer = styled.div`
    .App{
      background: #acacac;
      width: 100vw;
      height: 100vh;

    }


    li{
      list-style: none;
    }


`



function App() {
  return (
 
      <AppContainer>
      <Header/>
      <Pesquisa/>
      <NovosProdutos/>
      </AppContainer>
    
  );
}

export default App;
