import {Link, useNavigate} from 'react-router-dom'
import {useContext } from 'react'
import { AppContext } from '../App' 
import styled from 'styled-components'


const Nav = () => {
    const navigate = useNavigate()
    const {cart}=useContext(AppContext)
    return (
        <Header className ='nav' >
            <Link to='/'><img style={{height: '100px'}} src="https://static.vecteezy.com/system/resources/previews/000/596/678/original/circle-line-logo-template-vector-icon.jpg"></img></Link>
            <div style={{margin: '2%'}}
                onClick={()=>{
                    navigate('/cart')
                }}
            >
                
                <img style={{height: '50px'}}  src="https://static.vecteezy.com/system/resources/previews/004/999/463/original/shopping-cart-icon-illustration-free-vector.jpg"></img>
                <Badge>{cart.reduce((acc,curr)=>acc + curr.quantity,0)}</Badge>
            </div>
        </Header>
    )
}
export default Nav

const Header =styled.div`
display: flex;
justify-content: space-between;
width: 100%
`;

const Badge = styled.span`
  display: inline-block;
  background-color: purple;
  color: white;
  padding: 5px 10px;
  border-radius: 10px;
  font-size: 12px;
`;