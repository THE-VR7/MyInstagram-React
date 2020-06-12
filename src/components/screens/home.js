import React, { useState, useEffect,useContext } from 'react';
import { Usercontext } from '../../App';


const Home = () => {
    const [data,setData] = useState([])
    const {state,dispatch} = useContext(Usercontext)
    useEffect(() => {
        fetch('/allpost', {
            headers: {
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => { 
                // console.log(result)
                setData(result.posts)
            })
    }, [])
    const likepost = (id)=>{
        fetch('/like',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        })
            .then(res=>res.json())
            .then(result=>{
                // console.log(result)
                const newdata = data.map(item=>{
                    if(item._id===result._id)
                    {
                        return result
                    }
                    else{
                        return item
                    }
                })
                setData(newdata)
            })
        
    }
    const unlikepost = (id)=>{
        fetch('/unlike',{
            method:"put",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({
                postId:id
            })
        }).then(res=>res.json())
            .then(result=>{
                // console.log(result)
                const newdata = data.map(item=>{
                    if(item._id===result._id)
                    {
                        return result
                    }
                    else{
                        return item
                    }
                })
                setData(newdata)
            })
    
    }


    return (
        <div className="Home">
            {
                data.map((item)=>{
                    return(
                        <div className="card home-card" key={item._id}>
                            <h5>{item.postedby.name}</h5>
                            <div className="card-image">
                                <img
                                    src={item.photo}
                                     alt="" />
                            </div>
                            <div className="card-content">
                                {
                                (item.likes.includes(state._id))
                                ?
                                <i className="material-icons" 
                                onClick={()=>{unlikepost(item._id)}}
                                >thumb_down</i>
                                :
                                <i className="material-icons" style={{ color: "red" }}
                                onClick={()=>{likepost(item._id)}}
                                >thumb_up</i>
                                }
                                
                                
                                
                                <h6>{item.likes.length} Likes</h6>
                                <h6>{item.title}</h6>
                                <p>{item.body}</p>
                                <input type="text" placeholder="add a comment" />
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}




export default Home;