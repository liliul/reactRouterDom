// import { useEffect, useState } from 'react'
// import logo from './logo.svg'
// import './App.css'

// import {Form} from './components/Form.jsx'
// import {Card} from './components/Card'



// function App() {
//   const [count, setCount] = useState(2)

//   const [enviar, setEnviar] = useState('Baixar')
  
//   useEffect(() => {
//     document.title = `teste do useEffect ${enviar}`
//     if(enviar === 'Enviar'){
//       console.log('Enviar true')
//     }else{
//       console.log('Enviar falsos')
//     }
//   })
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>Hello Vite + React!: {count}</p>
//         <p>
//           <button type='button' onClick={() => setCount(0)}>initialReser</button>
//           <button type="button" onClick={() => setCount((count) => count + 1)}>
//             +
//           </button>
//           <button type="button" onClick={() => setCount((count) => count - 1)}>
//             -
//           </button>
//         </p>
//         <p>
//           Edit <code>App.jsx</code> and save to test HMR updates.
//         </p>
//         <p>
//           <a
//             className="App-link"
//             href="https://reactjs.org"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Learn React
//           </a>
//           {' | '}
//           <a
//             className="App-link"
//             href="https://vitejs.dev/guide/features.html"
//             target="_blank"
//             rel="noopener noreferrer"
//           >
//             Vite Docs
//           </a>
//         </p>


//         <Form name2="React components"></Form>
          
        
//         <Card name='Naruto uzumaki' vila="konoha" ninja="Kakashi hatake" />
        

//         <div onClick={() => setEnviar('Enviar')}>
//           {enviar}
//         </div>
//       </header>
//     </div>
//   )
// }

// export default App


import React from 'react';

import { Link as L} from 'react-router-dom'
import { useParams } from 'react-router-dom'
import { BrowserRouter, Route,Routes,Outlet } from 'react-router-dom';
import Card from './components/Card'
import Form from './components/Form'
import Home from './components/Home'



function PageA(){
  return (
    <>
      <h1>Page A Testando</h1>
    </>
  )

}

const App = () =>  {

  const {id} = useParams()
  console.log('P :',id)

return( 
  <>
    <BrowserRouter>
     
     <div>
      <header className='head-c'>
        <L to="/">
          <div className="quadrado"></div>
        </L>




        <ul>
          <L to="narutolug">
            <li>Card</li>
          </L>
          <L to="formlug">
            <li>Login</li>
          </L>

          <li>Dom</li>
          <li>JS</li>
        </ul> 
      </header>
    
      


      <Routes>
          <Route path='/' element={<Home />} >
            <Route path='a' element={<PageA />} />
          </Route>      
          <Route path='narutolug' element={<Card />} />
          <Route path='formlug' element={<Form />} />
      </Routes>


      <Outlet />
      </div>
        
    </BrowserRouter>
  </>   

)
}
export default App