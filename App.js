import {useState} from 'react';
import { Route, Routes } from 'react-router-dom';
import { AuthContextProvider } from './context/AuthContext';
import ProtectedRoutes from './pages/ProtectedRoutes';

import { Container, Navbar, Row, Col } from "react-bootstrap";

import Home from './pages/Home';
import Signin from './pages/Signin';
import Signup from './pages/Signup';
import Account from './pages/Account';
import FormSubmit from './pages/FormSubmit';
import Admin from './pages/Admin';
import AddToDo from './pages/AddToDo';
import ToDoList from './pages/ToDoList';
import Funerals from './pages/Funerals';
import Caterers from './pages/Caterers';
import Products from './pages/Products';
import LatestProducts from './pages/LatestProducts';
import Grants from './pages/Grants';
import Testimonials from './pages/Testimonials';

function App() {
  return (
    <div className='Routes'>
       
        <AuthContextProvider>
          <Routes>
          
          <Route path='/' exact element={<Home />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/signin' element={<Signin />} />
          <Route path='/funerals' element={<Funerals />} />
          <Route path='/caterers' element={<Caterers />} />
          <Route path='/products' element={<Products />} />
          <Route path='/latestproducts' element={<LatestProducts />} />
          <Route path='/grants' element={<Grants />} />
          <Route path='/account' element={<Account />} />
          <Route path='/formsubmit' element={<FormSubmit />} />
          <Route path='/admin' element={<Admin />} />
          <Route path='/addtodo' element={<AddToDo />} />
          <Route path='/todolist' element={<ToDoList />} />
          <Route path='/testimonials' element={<Testimonials />} />

          <Route path='/protectedroutes' element={
            <ProtectedRoutes>
              
              <></>  
            </ProtectedRoutes>
           }
         />
            </Routes>
          </AuthContextProvider>
      </div>
  )
 } 

 const Todo = () => {
  const [todoId, setTodoId] = useState("");

  const getTodoIdHandler = (id) => {
    console.log("The ID of document to be edited: ", id);
    setTodoId(id);
  };
  return (
    <>
      <Navbar bg="dark" variant="dark" className="header">
        <Container>
          <Navbar.Brand href="#home">Todo - Firebase </Navbar.Brand>
        </Container>
      </Navbar>

      <Container style={{ width: "400px" }}>
        <Row>
          <Col>
            <AddToDo id={todoId} setTodoId={setTodoId} />
          </Col>
        </Row>
      </Container>
      <Container>
        <Row>
          <Col>
            <ToDoList getTodoId={getTodoIdHandler} />
          </Col>
        </Row>
      </Container>
    </>
  );
}


export default App;
