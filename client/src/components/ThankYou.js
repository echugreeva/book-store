import {useContext} from 'react'
import { AppContext } from '../App' 
const ThankYou = ()=> {
    const {form}=useContext(AppContext)
    return (
        <div>
            <p>Congrats {form.name}</p>
            <p>Your order number:{form.order}</p>
            <p>We'll be in touch with you soon</p>

        </div>
    )

}

export default ThankYou