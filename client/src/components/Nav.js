import {Link, useNavigate} from 'react-router-dom'
import {useContext } from 'react'
import { AppContext } from '../App' 

const Nav = () => {
    const navigate = useNavigate()
    const { cart}=useContext(AppContext)
    return (
        <div className ='nav' >
            <Link to='/'><img style={{height: '100px'}} src="https://static.vecteezy.com/system/resources/previews/000/596/678/original/circle-line-logo-template-vector-icon.jpg"></img></Link>
            <div 
                onClick={()=>{
                    navigate('/cart')
                }}
            >
                <img style={{height: '100px'}}  src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"></img>
                <p>{cart.length}</p>
            </div>
        </div>
    )
}
export default Nav