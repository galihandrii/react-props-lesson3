
import './App.css';
import { useState } from 'react';
import Header from './components/Header';
import Body from './components/Body';

function App() {
   const [ data,setdata] = useState("Galih");
   const [ login,setLogin] = useState(true);
   const [compName,setCompName] = useState("ngikngik");
   const [product,setProduct] = useState([
    {
      no: 1,
      name: "susu UHT",
      price:"30.000",
    },
    {
      no: 1,
      name: "susu Formula",
      price:"70.000",
    },
    {
      no: 1,
      name: "susu Kaleng",
      price:"10.000",
    }
   ]);
   

   const handleLogin = () =>{
    setLogin(!login);
   }



  return (
    <div className="App">
      <Header name={data} login={login} compName={compName} handleLogin={handleLogin}/>
      <Body product={product}/>
      <h1>Hello nama saya {data}</h1>

      
    </div>
  );
}

export default App;
