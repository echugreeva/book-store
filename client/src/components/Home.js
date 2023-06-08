// import stores from '../stores.json'
import styled from 'styled-components'
import {useNavigate} from 'react-router-dom'
import {useState, useContext} from 'react'
import {Container,PurpleButton} from '../App'
import books from '../books.json'
import { AppContext } from '../App'

const Home = () => {
    const navigate = useNavigate()
   
    const [stores, setStores] = useState([...new Set(books.books.map(e=>e.store_id))])
    const {storeId, setStoreId}=useContext(AppContext)

    return (
        <Container>
            {
                stores.map((item, i) => {
                    return (
                        <StoreCard key={i}>
                            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRNedE5sJ5R9cBowmWJBuCnRaVkWAsUuK_gWg&usqp=CAU"></img>
                            <p>{item}</p>
                           
                            <PurpleButton 
                                onClick={()=>{
                                setStoreId(item)
                                navigate('/store')
                                }}
                            
                            >Go to store</PurpleButton>


                        </StoreCard>
                    )
                })
            }
        </Container>
    )
}

export default Home 

// const Container = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-around;
//   margin: 0 auto;
// `;

const StoreCard = styled.div`
width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  text-align: center
`;