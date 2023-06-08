
import { useState } from "react";
import { useHistory } from "react-router-dom";
import axios from 'axios';
import AdminNav from "../AdminNav";

function Login()
{
    var [userName, setuserName] = useState("");
    var [user,setUser]  = useState({Email: "", password: ""})
    var [message, setMessage] = useState("");
    const history = useHistory();
    var handleChange = (args) =>{
        var changedUser = {...user};
        changedUser[args.target.name] = args.target.value;
        setUser(changedUser);
    }
    var signIn =async()=>
    {

debugger;
await axios.post('http://localhost:8080/pizzadelivery/login', {

        email: user.Email,
        password: user.password,
    }).then((res) =>
    {
     console.log(res.data);
                     if(res.data =="True")
            {
            
            setMessage("")
            sessionStorage.setItem("isLoggedIn", res.data);
            sessionStorage.setItem("userName",user);
            setMessage("Login successfull!")
           
            history.push('/allPizza');
            }
            else
            {
                setUser({Email: "", password: ""});
                setMessage("Something went wrong!")
            }
    });
}

var Logout = ()=>{
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userName");
    history.push("/ShopingCart");
}

     //form-group
 //form-control
    return         <div>
        <AdminNav/>
    <div className="table-responsive">
    <div style={{float: "right"}}>
Welcome {" "} {userName} {" "}
<button className='btn btn-primary' 
     onClick={Logout}>
 Log out
</button>
</div>

                <center>
                    <table>
                        <tbody>
                            <tr>   
                    
                                <td>Email</td>
                                <td>
                                    <input type={"text"} name="Email"
                                           value={user.Email}
                                           onChange={handleChange}/>
                                </td>
                            </tr>

                            <tr>
                                <td>Password</td>
                                <td>
                                    <input type={"password"} name="password"
                                           value={user.password}
                                           onChange={handleChange}/>
                                </td>
                            </tr>
                            <tr>  
                                <td style={{colspan: 2}}>
                                    <button onClick={signIn}>Sign In</button>
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
}

export default Login;