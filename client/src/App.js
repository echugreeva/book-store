import {createContext, useState} from 'react'
import {Routes, Route} from 'react-router-dom'
import styled from 'styled-components'
import Nav from './components/Nav'
import Home from './components/Home'
import StorePage from './components/StorePage'
import Book from './components/Book'
import Cart from './components/Cart'
import Form from './components/Form'
import ThankYou from './components/ThankYou'
export const AppContext = createContext();

function App() {
  const [storeId, setStoreId] = useState('')
  const [book, setBook] = useState('')
  const [cart, setCart] = useState([])
  const [form, setForm] = useState('')
  return (
    <AppContext.Provider value={{book, setBook, cart, setCart,form, setForm,storeId, setStoreId}}>
      <div className="App">
        <Nav/>
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/store' element ={<StorePage/>}></Route>
          <Route path='/book' element ={<Book/>}></Route>
          <Route path='/cart' element ={<Cart/>}></Route>
          <Route path='/form' element ={<Form/>}></Route>
          <Route path='/thankyou' element ={<ThankYou/>}></Route>
        </Routes>
      </div>
    </AppContext.Provider>
  );
}

export default App;


export const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  margin: 0 auto;
`;

export const PurpleButton = styled.button`
  background-color: purple;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  font-size: 16px;
  cursor: pointer;

  &:hover {
    background-color: #6f42c1;
  }
`;
