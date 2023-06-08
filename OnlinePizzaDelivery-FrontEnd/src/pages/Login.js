import React, { useState } from 'react';
import { useHistory } from "react-router-dom";
import axios from 'axios';
import {
  MDBInput,
  MDBCol,
  MDBRow,
  MDBCheckbox,
  MDBBtn,
  MDBIcon
} from 'mdb-react-ui-kit';

export default function App() {
    
    var [userName, setuserName] = useState("");
    var [user,setUser]  = useState({email: "", password: ""})
    var [message, setMessage] = useState("");
    const history = useHistory();

    function redirectToAnotherWebsite() {
        window.location.href = 'https://www.google.com/';
    }

    var handleChange = (args) =>{
        var changedUser = {...user};
        changedUser[args.target.name] = args.target.value;
        setUser(changedUser);
    }

    var Register=()=>{
        history.push("/register")
    }

    var signIn =async()=>
    {
    await axios.post('http://localhost:8080/pizzadelivery/login', {
            email: user.email,
            password: user.password,
        }).then((res) =>
        {
          debugger;
            console.log(res.data);
            if(res.data.userRole=="CUSTOMER")
            {
            setMessage("")
            sessionStorage.setItem("isLoggedIn", "True");
            console.log(res.data)
            sessionStorage.setItem("userName",res.data.first_name);
            console.log(res.data.first_name)
            sessionStorage.setItem("userId",res.data.id);
            console.log(res.data.id)
            sessionStorage.setItem("userRole",res.data.userRole);
            console.log(res.data.userRole)
            const objectString = JSON.stringify(res.data);
            sessionStorage.setItem("user",objectString);
            console.log(res.data.userRole)
            setMessage("Login successfull!")
        
            history.push('/allPizza');
            }
            else if (res.data.userRole=="ADMIN"){
            setMessage("")
            sessionStorage.setItem("isLoggedIn", "True");
            console.log(res.data)
            sessionStorage.setItem("userName",res.data.first_name);
            console.log(res.data.first_name)
            sessionStorage.setItem("userId",res.data.id);
            console.log(res.data.id)
            sessionStorage.setItem("userRole",res.data.userRole);
            console.log(res.data.userRole)
            const objectString = JSON.stringify(res.data);
            sessionStorage.setItem("user",objectString);
            console.log(res.data.userRole)
            setMessage("Login successfull!")
            history.push('/adminhome');
            // redirectToAnotherWebsite();
            }
            else
            {
                setUser({email: "", password: ""});
                setMessage("Something went wrong!")
            }
        });
    }

    var Logout = ()=>{
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("userName");
        sessionStorage.removeItem("userId");
        sessionStorage.removeItem("userRole");
        history.push("/");
    }

  return (
    <div className='login-form shadow' style={{margin:"70px", padding:"50px"}}>
        <h2 style={{style:"10px"}}>LOGIN</h2>
        <div className="table-responsive">
                    {/* <div style={{float: "right"}}>Welcome {" "} {userName} {" "}
                    <button className='btn btn-primary'onClick={Logout}>Log out</button>
                    </div> */}
                <center>
                    <table>
                        <tbody>
                            <tr>   
                                <td>Email</td>
                                <td>
                                    <input className='form-control' type={"text"} name="email"
                                           value={user.email}
                                           onChange={handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>Password</td>
                                <td>
                                    <input className='form-control' type={"password"} name="password"
                                           value={user.password}
                                           onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>  
                                <td style={{colspan: 2, alignContent: 'center'}}>
                                    <button style={{margin:"10px"}} className='btn btn-success' onClick={signIn}>Sign In</button>
                                    <button style={{margin:"10px"}} className='btn btn-info' onClick={Register}>Register</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div>
                        {message}
                    </div>
                </center>
           </div>
    </div>
  );
}