import React,{useState,useEffect} from 'react'
import axios from 'axios'

function DataFetchingHookEffect2() {
    const [post,setPost] = useState({})
    const [id,setId] = useState(1)

    useEffect(() =>{
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
        .then(res =>{
            console.log(res)
            setPost(res.data)
        }).catch(error =>{
            console.error(error)
        })
    },[id])

    return (
        <div>
            <label> id : </label>
            <input type="text"  value ={id} onChange={event => setId(event.target.value)}/>
            <h2>{post.title}</h2>
            {/* <ul>
                {                 
                posts.map(post => 
                    <li key={post.id}>{post.title}</li>
                )
                }
            </ul> */}
        </div>
    )
}

export default DataFetchingHookEffect2
