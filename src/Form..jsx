import { useState } from "react"

export default function Form(){
    let[formData,setFormData]=useState({fullName:"",userName:"",password:""});

   let handleInputChange= (event)=>{
        setFormData((currData)=>{
            return {...currData, [ event.target.name]: event.target.value};
        });
   }
   let handleSubmit=(event)=>{
     event.preventDefault();
     console.log(formData);
     setFormData({fullName:"",userName:"",password:""})
   }
    return (<form onSubmit={handleSubmit}>
        <label htmlFor="fullName">FullName:</label> &nbsp;&nbsp;
        <input placeholder="enter your Full Name" type="text" value={formData.fullName} onChange={handleInputChange} id="fullName" name="fullName"/>
        <button>Submit</button> <br/>

        <label htmlFor="username">Username</label> &nbsp;&nbsp;
        <input placeholder="enter your user Name" type="text" value={formData.userName} onChange={handleInputChange} id="username" name="userName"/>
        <button>Submit</button> <br/>

        <label htmlFor="password">Password</label> &nbsp;&nbsp;
        <input placeholder="enter your password" type="password" value={formData.password} onChange={handleInputChange} id="password" name="password"/>
        <button>Submit</button>
    </form>)
}