import stores from '../stores.json'
import styled from 'styled-components'
import {Link} from 'react-router-dom'

const Home = () => {
    return (
        <Container>
            {
                stores.stores.map((store, i) => {
                    return (
                        <StoreCard key={i}>
                            <p>{store.name}</p>
                            <p>{store.address}</p>
                            <Link to ='/store'><button>Go to store</button></Link>


                        </StoreCard>
                    )
                })
            }
        </Container>
    )
}

export default Home 

const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin: 0 auto;
`;

const StoreCard = styled.div`
width: 300px;
  background-color: #ffffff;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 16px;
  margin: 16px;
  text-align: center
`;