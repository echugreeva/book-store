import {useContext } from 'react'
import { AppContext } from '../App' 
import styled from 'styled-components'
import {Container,PurpleButton} from '../App'
import {BookCard,BookCardRow} from './StorePage'
import {useNavigate} from 'react-router-dom'
import Rating from './Rating'

const Book = () => {
    const {book, setBook, cart, setCart}=useContext(AppContext)
    const navigate = useNavigate()
    return (
        <>
        <Button onClick={()=>{                           
            navigate('/store')
            }}>Back to store
        </Button>
        <Container>
            <BookDetails>
                <div key = {book.id}>
                    <h2>Name{book.name}</h2>
                    <p>by: {book.author}</p>
                    <Rating times={book.stars}/>
                    <span> by {book.ratings} users</span>
                    <p>Description:{book.description}</p>
                    <h3>Product details</h3>
                    <p>{book.language}</p>
                    <p>{book.publisher}</p>
                    <p>{book.paperback}</p>
                </div>
           
                    <BookCard>
                    <BookCardRow>
                    <p>Buy for </p>
                    <p>${book.price}</p>
                    </BookCardRow>
                    
                    <p>sdfjgdfghjdhjskhjndkhjndhidfgf</p>
                    <PurpleButton
                    onClick={()=>{
                        if (cart.filter(e=>e.id===book.id).length > 0) {
                            const id = book.id
                            console.log(id)
                                const newCart = [...cart]
                                const objIndex = newCart.findIndex(obj=>obj.id == id)
                                newCart[objIndex].quantity ++

                            setCart(newCart)
                            console.log(cart)
                        } else {
                            console.log(book)
                            setCart([...cart, {...book, quantity: 1}])
                            
                        }
                    
                        console.log(cart)
                    }} 
                    >add to cart</PurpleButton>
                    </BookCard>
        
                    
                
                
        
            </BookDetails>
            
        </Container>
        </>
    )
}
export default Book

const BookDetails = styled.div`
display: flex;
  flex-direction: row;
  width: 75%;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  text-align: left
`;


const Button = styled.button`
margin: 0 auto;
width: 10%;
background-color: #ffffff;
border-radius: 8px;
box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
padding: 16px;
margin: 16px;

`;