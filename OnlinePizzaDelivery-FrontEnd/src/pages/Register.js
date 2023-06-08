import React, { useState } from 'react';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  // MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';
import { MDBRadio, MDBBtnGroup } from 'mdb-react-ui-kit';
import axios from 'axios';

export default function App() {
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
          console.log(err)
          alert("User Registation Failed");
        }
   }


  return (
    <div style={{"margin-top":"70px", "margin":"100px"}}>
        <h1 style={{"margin":"50px"}}>Register</h1>
    <form>
      <MDBRow className='mb-4'>
        <MDBCol>
          <MDBInput id='form3Example1' label='First Name' name='firstname' value={firstname}
            onChange={(event)=>{
                setFirstName(event.target.value);
            }}/>
        </MDBCol>
        <MDBCol>
          <MDBInput id='form3Example2' label='Last Name' name='lastname' value={lastname}
            onChange={(event)=>{
                setLastName(event.target.value);
            }}/>
        </MDBCol>
      </MDBRow>
      <MDBInput className='mb-4' type='email' id='form3Example3' label='Email Address' name='email' value={email}
            onChange={(event)=>{
                setEmail(event.target.value);
            }}/>
      <MDBInput className='mb-4' type='password' id='form3Example4' label='Password' name='password' value={password}
            onChange={(event)=>{
                setPassword(event.target.value);
            }}/>
      <MDBInput className='mb-4' type='number' id='form3Example5' label='Mobile Number' name='mobile' value={mobile}
            onChange={(event)=>{
                setMobile(event.target.value);
            }}/>
        <div style={{margin:"10px"}}>
        <div class="dropdown">
        
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault1" checked/>
          <label class="form-check-label" for="flexRadioDefault1">
            CUSTOMER
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="flexRadioDefault" id="flexRadioDefault2"/>
          <label class="form-check-label" for="flexRadioDefault2">
            USER
          </label>
        </div>

        </div>
        </div>
      <MDBBtn type='submit' className='mb-4' block onClick={save}>
        Sign Up
      </MDBBtn>

      <div className='text-center'>
        <p>
          Already a member? <a href='http://localhost:3000/login'>Login</a>
        </p>
        <p>or sign up with:</p>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='facebook-f' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='google' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='twitter' />
        </MDBBtn>

        <MDBBtn floating color="secondary" className='mx-1'>
          <MDBIcon fab icon='github' />
        </MDBBtn>
      </div>
    </form>
    </div>
  );
}