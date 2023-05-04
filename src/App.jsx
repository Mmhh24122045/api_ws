import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Weather from './Weather';

function App() {
//   const [users, setUsers] = useState([])
// const [counter, setCounter] = useState(0)
// const [loading, setLoading] = useState(true)

// useEffect(() => {
// const fetchData = ()=> {
//   fetch('https://jsonplaceholder.typicode.com/users')
//   .then(response => response.json())
//   .then(json => setUsers(json))
//   .catch(err=>clg(err))
 
  
// }
// fetchData()
// setLoading(false)
// }, [])



// useEffect(() => {
//   const fetchData  = async() => {
//     // axios : used for sending HTTP requests (POST,GET,PUT,DELETE)
//     try {
//       const res = await axios.get('https://jsonplaceholder.typicode.com/users')
//     console.log(res)
//     setUsers(res.data)
//     setLoading(false)
//     } catch (error) {
//       console.log(error)
//     }
    
//   }

// fetchData()
// }, [])


  return (
    <div className="App">

      {/* {counter}
      <button onClick={()=>setCounter(counter+1)} >+</button> */}
     {/* {
      loading ? <h3>loading...</h3>
      :
      users.map(el=>
        <>
        <li>{el.name}</li>
        </>
        )
     } */}
     
<Weather />
    </div>
  );
}

export default App;
