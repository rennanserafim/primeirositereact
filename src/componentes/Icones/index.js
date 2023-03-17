
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faUser } from '@fortawesome/free-solid-svg-icons'

const Icone = styled.li`
  font-size:2rem;
  padding-left:2rem;
  &:hover {
    color:#f190b6;
    transition:1s;
    cursor:pointer;
   }

`
const IconesFiguras = styled.ul`
     display: flex;
     margin-left:10rem;

`



function Icones(){
    return(
        <IconesFiguras>
            <Icone><FontAwesomeIcon icon={faUser} /></Icone>
            <Icone><FontAwesomeIcon icon={faEnvelope} /></Icone>
    </IconesFiguras>
    )
}

export default Icones;