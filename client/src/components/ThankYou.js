import {useContext} from 'react'
import { AppContext } from '../App' 
import styled from 'styled-components'


const ThankYou = ()=> {
    const {form}=useContext(AppContext)
    return (
        <ContainerT>
            <p>Congrats {form.name}</p>
            <p>Your order number:{form.order}</p>
            <p>We'll be in touch with you soon</p>

        </ContainerT>
    )

}

export default ThankYou

const ContainerT = styled.div`
width: 30%;
margin: 0 auto;
display: flex;
flex-direction: column;
text-align: center
`