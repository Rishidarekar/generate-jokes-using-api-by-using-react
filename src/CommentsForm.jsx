import { useState } from "react"

export default function CommentsForm(){
    let [formData,setFormData]= useState({username:"",remark:"",rating:1})
    let handleInputChange=(event)=>{
        setFormData((currval)=>{
            return{...currval, [ event.target.name]: event.target.value};
        })
    }
    let handleSubmit=(event)=>{
       event.preventDefault();
       console.log(formData);
       setFormData({username:"",remark:"",rating:1});
    }
    return(<div>
         <h4>Give a Comment!</h4>
         <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username</label>&nbsp;&nbsp;
            <input placeholder="username" value={formData.username} onChange={handleInputChange}type="text" name="username" /> <br/><br/>
            <label htmlFor="remark">Remarks</label>&nbsp;&nbsp;
            <textarea  placeholder="remark" value={formData.remark} onChange={handleInputChange}type="text"name="remark" >Remarks</textarea><br/><br/>
            <label htmlFor="rating">Ratings</label>&nbsp;&nbsp;
            <input placeholder="rating" type="number" value={formData.rating} onChange={handleInputChange} min={1} max={5} name="rating"/> <br/><br/>
            <button>Add Comment</button>
         </form>
        </div>)
}