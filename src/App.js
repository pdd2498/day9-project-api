import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import Component from './Component';

function App() {
const [aipData , setApiData] = useState([]);
const [filterData , setFiData] = useState([]);



async function claaApi(){
  const options = {
      method: 'GET',
      url: 'https://exercisedb.p.rapidapi.com/exercises',
      params: {limit: '50'},
      headers: {
        'X-RapidAPI-Key': '1e937caf07msh7a9dcba0f4720c1p1a2718jsnce428543581b',
        'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com'
      }
    };
  
  try {
    const response = await axios.request(options);
    console.log(response.data);
    console.log("api call al")
    localStorage.setItem("preyesh", JSON.stringify(response.data));
    const localDa = localStorage.getItem("preyesh");
    setApiData(JSON.parse(localDa));
    
  } catch (error) {
    console.error(error);
  }
}


useEffect(() => {
  const localData = localStorage.getItem("preyesh");
  if(!localData){
    claaApi();
  }
  setApiData(JSON.parse(localData));
  // compair();
}, []);



const compair = (e)=>{
  const a = [...aipData];
  const data = a.filter(p => p.bodyPart.toLowerCase().includes(e.target.value));
  console.log(a);
  if(e.target.value === ''){
    setFiData(a);
  }
  else {
    setFiData(data);
  }
}



  return (
    <div className="App">
      <header >
        <div className='maindiv'>
            <img src="https://i.ytimg.com/vi/KBpoBc98BwM/maxresdefault.jpg" alt="" />
            <button id='start-but' onClick={compair}>Let's start</button>
        </div>
        <input type="text" name="" id="inputBox" placeholder='Search by target, body part, or exercise' onChange={compair} />
        <div className='itms'>
              {
                filterData.map((e , idx) =>{
                  return  <Component key={idx} imag = {e.gifUrl} name = {e.name} body = {e.bodyPart} equipment = {e.equipment}/>
                })
              }
        </div>
      </header>
    </div>
  );
}

export default App;
