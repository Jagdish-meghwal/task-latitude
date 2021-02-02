
import axios from 'axios';

//const url = 'http://localhost:5000/posts';
const url ='https://jsonplaceholder.typicode.com/posts';
const fetchPosts=()=>axios.get(url);

export const getPosts=()=>async(dispatch)=>{
    
    try{
        const {data} =await fetchPosts();
        dispatch({
            type:'FETCH_ALL',
            payload:data
        })
    }
    catch(error){
        console.log(error.message);

    }
}
