import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function RegistrationComponent(){

const [id,setId]=useState('');
const [firstname,setFirstName]=useState("");
const [lastname,setLastName]=useState("");
const[email,setEmail]=useState("");
const[password,setPassword]=useState("");
const[mobile,setMobile]=useState("");
const[userRole,setUserRole]=useState("");
// "userRole": "MANAGER"

async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/pizzadelivery/register",
        {
        id:id,
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
        mobile_no : mobile,
        userRole  : "CUSTOMER"
        
        });
          alert("user Registation Successfully");
          setId("");
          setFirstName("");
          setLastName("");
          setEmail("");
          setPassword("");
          setMobile("");
        
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }


    return(
<div class="container mt-4">
        <form>
        <div class="form-group">
            <label>first name</label>
            <input type="text" class="form-control"placeholder="enter first name"
            value={firstname}
            onChange={(event)=>{
                setFirstName(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>last name</label>
            <input type="text" class="form-control"placeholder="enter last name"
            value={lastname}
            onChange={(event)=>{
                setLastName(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>email</label>
            <input type="email" class="form-control"placeholder="enter email"
            value={email}
            onChange={(event)=>{
                setEmail(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>password</label>
            <input type="password" class="form-control"placeholder="enter password"
            value={password}
            onChange={(event)=>{
                setPassword(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>mobile number</label>
            <input type="text" class="form-control"placeholder="enter mobile number"
            value={mobile}
            onChange={(event)=>{
                setMobile(event.target.value);
            }}
            />
        </div>

        
        <button class="btn btn-primary mt-4" onClick={save}>Register</button>
        </form>
</div>
    );
}
export default RegistrationComponent;