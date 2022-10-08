import React, { useEffect, useState } from 'react';
import './App.css';
import Card from './components/cards/Card';
import SkeletonCard from './components/cards/SkeletonCard';
function App() {

  const [users, setUsers] = useState([])
  const [isLoading, setLoading] = useState(true)

  useEffect(()=>{
    let URL = `https://jsonplaceholder.typicode.com/users`
    fetch(URL).then(
      res => res.json()
    ).then(
      data => setUsers(data)
    )
    setTimeout(()=>{
      setLoading(false)
    }, 3000)
  },[])

  return (
    <div className="App">
    
      {
        isLoading ? 
         <>
        <SkeletonCard/> 
        <SkeletonCard/> 
        <SkeletonCard/> 
        <SkeletonCard/> 
        <SkeletonCard/> 
        <SkeletonCard/> 
        <SkeletonCard/> 
        <SkeletonCard/> 
        <SkeletonCard/> 
        <SkeletonCard/> 
        </> 
        :
        users.map(user => <Card data={user} key={user.id}/>)
      }
      
    </div>
  );
}

export default App;
