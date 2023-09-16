import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {route} from './routes/route'
import Layout from './components/Layout';
import Home from './pages/Home';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  // http://localhost:1337/api/auth/local
  // test manager (ctrl + shift + escape)
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout/>}>
          <Route index  element={<Home/>}/>
          {
            route.map((item,index)=>{
              return (
                <Route  key={index} path={item.path} element={item.component}></Route>
              )
            })
          }
         
       </Route>
       <Route path="login" element={<Login/>}/>
       <Route path="register" element={<Register/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
