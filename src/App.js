import './App.css';
import React, {useState, useEffect} from 'react'
import axios from 'axios'

function App() {
const [loading, setLoging]=useState(false)
const [posts,setPosts] =useState([])
const [searchTitle, setSearchTitle]=useState('')

const loadingPost=async()=>{
  setLoging(true)
  const res= await axios.get('https://jsonplaceholder.typicode.com/posts')
  setPosts(res.data)
  setLoging(false)
}

useEffect(()=>{
 loadingPost()
},[])

  return (
    <div className="App">
      <h4>Search filter</h4>
      <input 
      style={{width:"30%",height:"35px"}}
      type="text"
      placeholder='Searc ...'
      onChange={(e)=> setSearchTitle(e.target.value)}/>
      {loading ? (<h4>Loading ...</h4>):(
        (posts.filter((value)=>{
          if(searchTitle ===""){
            return value
          }else if(
            value.title.toLowerCase().includes(searchTitle.toLocaleLowerCase())
          ){
            return value
          }
        }).map(post=>
        <h5 key={post.id}>{post.title}</h5>))
      )}
    </div>
  );
}

export default App;
