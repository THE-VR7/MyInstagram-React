import React,{useEffect,useState,useContext} from 'react';
import { Usercontext } from '../../App';

const Profile = ()=>{
    const [mypics,setPics]=useState([])
    const {state,dispatch} = useContext(Usercontext)
    useEffect(() => {
        fetch('/mypost', {
            headers: {
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res => res.json())
            .then(result => { 
                // console.log(result)
                setPics(result.posts)
            })
    }, [])

    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
           <div style={{
              margin:"18px 0px",
               borderBottom:"1px solid grey"
           }}>

           
               <div>
                   <img style={{width:"160px",height:"160px",borderRadius:"80px"}}
                   src="https://images.unsplash.com/photo-1503249023995-51b0f3778ccf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"
                   alt=""  />
                 
               </div>
               <div>
                   <h4>{state?state.name:"loading"}</h4>
                   {/* <h5>{state?state.email:"loading"}</h5> */}
                   <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                       <h6>16 posts</h6>
                       <h6>16 followers</h6>
                       <h6>16 following</h6>
                   </div>

               </div>
           
        
            <div className="file-field input-field" style={{margin:"10px"}}>
            <div className="btn #64b5f6 blue darken-1">
                <span>Update pic</span>
                <input type="file" />
            </div>
            <div className="file-path-wrapper">
                <input className="file-path validate" type="text" />
            </div>
            </div>
            </div>      
           <div className="gallery">
               {
                   mypics.map(item=>{
                        return (
                            <img alt="" key={item._id} src={item.photo} />
                       )
                   })
               }
               

           </div>
       </div>
    )
}




export default Profile;