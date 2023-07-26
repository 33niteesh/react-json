import logo from './logo.svg';
import './App.css';
import { useState,useEffect } from 'react';
import axios from 'axios';
function App() {
  const [mobiledata,setMobiledata]=useState([]);
  const [booksdata,setBooksdata]=useState([]);
  const [shoedata,setShoedata]=useState([]);
  const fetchData=()=>{
    axios.get("http://localhost:3001/mobiles").then(e=>setMobiledata(e.data))
    axios.get("http://localhost:3001/books").then(e=>setBooksdata(e.data))
    axios.get("http://localhost:3001/shoes").then(e=>setShoedata(e.data))
  }
  useEffect(()=>{
    fetchData();
  },[])
  const onlymobile=()=>{
    axios.get("http://localhost:3001/mobiles").then(e=>setMobiledata(e.data))
    axios.get("http://localhost:3001/books").then(e=>setBooksdata([]))
    axios.get("http://localhost:3001/shoes").then(e=>setShoedata([]))
  }
  const onlyshoe=()=>{
    axios.get("http://localhost:3001/mobiles").then(e=>setMobiledata([]))
    axios.get("http://localhost:3001/books").then(e=>setBooksdata(e.data))
    axios.get("http://localhost:3001/shoes").then(e=>setShoedata([]))
  }
  const onlybooks=()=>{
    axios.get("http://localhost:3001/mobiles").then(e=>setMobiledata([]))
    axios.get("http://localhost:3001/books").then(e=>setBooksdata([]))
    axios.get("http://localhost:3001/shoes").then(e=>setShoedata(e.data))
  }
  return (
    <div className="App">
      <nav className='nav'><div className='div' onClick={onlymobile}>Mobile</div><div className='div' onClick={onlybooks}>Books</div><div className='div' onClick={onlyshoe}>Shoes</div></nav>
      <div>
        {
          mobiledata?.map((data,index)=>{
            return(
              <div key={index}>
                {data?.companyName}
                <br></br>
                {data?.modelName}
                <br></br>
                {data?.warranty}
                <br></br>
                {data?.price}
                <br></br><br></br>
                <hr/>
                </div>
            )
          })
        }
        {
          booksdata?.map((data,index)=>{
            return(
              <div key={index}>
                {data?.bookTag}
                <br></br>
                {data?.bookName}
                <br></br>
                {data?.authorName}
                <br></br>
                {data?.price}
                <br></br><br></br>
                <hr/>
                </div>
            )
          })
        }{
          shoedata?.map((data,index)=>{
            return(
              <div key={index}>
                {data?.companyName}
                <br></br>
                {data?.color}
                <br></br>
                {data?.type}
                <br></br>
                {data?.price}
                <br></br><br></br>
                <hr/>
                </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default App;
