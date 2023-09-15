import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import {route} from './routes/route'

function App() {
  // http://localhost:1337/api/auth/local
  return (
    <>
      <BrowserRouter>
        <Routes>
          {
            route.map((item)=>{
              return (
                <Route path={item.path} element={item.component}></Route>
              )
            })
          }
       
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
