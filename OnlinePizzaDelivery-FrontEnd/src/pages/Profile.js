import React, {  useEffect, useState } from 'react';
// import SideBar from '../components/SideBar';
// import Header from '../components/Header';
// import LeftSide from '../components/LeftSide';
import '../styles/profile.css';
import { Link, useHistory, useParams } from 'react-router-dom';
import axios from 'axios';
const Profile = () => {

  const history = useHistory()
  const params=useParams()
  const {id}=params;

  const [user, setUser] = useState(
    {
        id: 0,
        first_name: "",
        last_name: "",
        email: "",
        password: "",
        mobile_no: "",
        userRole: ""
    }
  )
  const [name,setName]=useState()
  const [mobNo,setMobNo]=useState()
  const [showBtn,setShowBtn]=useState(false)

  const handleSubmit=(e)=>{
    e.preventDefault();
    updateUser();
    setShowBtn(false)

  }

  useEffect(() => {
    loadUser()
  }, [])
  

  const loadUser= async ()=>{
    await axios.get(`http://localhost:8080/pizzadelivery/user/${id}`).then((res)=>{
        setUser(res.data)
        console.log("Inside User")
        console.log("res.data")
        console.log(res.data)
        console.log("res")
        console.log(res)
        console.log("User")
        console.log(res.data)
    })
  };




  const updateUser=async()=>{
    try{
      await axios.put('http://localhost:8080/pizzadelivery/user',{
        
          id: 2,
          first_name: user.first_name,
          last_name: user.last_name,
          email: user.email,
          password: user.password,
          mobile_no: user.mobile_no,
          userRole: user.userRole
      }
      ).then((res) =>
      {
          if(res!=null){
            alert("User Updated Successfully");
            history.push(`/profile/${id}`)
          } else {
            alert("User could not be Updated, Null Response From Server");
          }
      }); 
  } catch (error) {
      console.error(error);
      alert("User could not be Updated, Error Occourred");
    }

  }

const handleInputChange=(value,text)=>{
  setShowBtn(true)
if(text==='name'){
  setName(value)
}
if(text==='mob'){
  setMobNo(value)
}
}

  return(
      <>
       <div className='shadow' style={{margin:"90px"}}>
         <div className="profile-section">
           {
             user?(
               <>
               <h2 style={{margin:"10px"}}>My Profile</h2>
               <div className="profile-photo" src>
               <h1>{user?.name?.charAt(0)}</h1>
               {/* <img src='https://www.google.com/imgres?imgurl=https%3A%2F%2Ficons.veryicon.com%2Fpng%2Fo%2Fmiscellaneous%2Ftwo-color-icon-library%2Fuser-286.png&imgrefurl=https%3A%2F%2Fwww.veryicon.com%2Ficons%2Fmiscellaneous%2Ftwo-color-icon-library%2Fuser-286.html&tbnid=nE8xjx2gbi_fTM&vet=12ahUKEwif76WPns39AhVv2XMBHUOYBcAQMygXegUIARCZAg..i&docid=IaPlF0XHOj-6TM&w=512&h=512&q=user%20image%20icon&ved=2ahUKEwif76WPns39AhVv2XMBHUOYBcAQMygXegUIARCZAg'/> */}
             </div>
             <div className="profile-detail">
                 <form onSubmit={handleSubmit}>
                     <div className="profile-input">
                        <label htmlFor="name">First Name</label>
                        <input type="text" id='first_name' onChange={(e)=>handleInputChange(e.target.value,'first_name')} value={user.first_name} />
                     </div>
                     <div className="profile-input">
                        <label htmlFor="name">Last Name</label>
                        <input type="text" id='last_name' onChange={(e)=>handleInputChange(e.target.value,'last_name')} value={user.last_name} />
                     </div>
                     <div className="profile-input">
                        <label htmlFor="email">Email</label>
                        <input type="text" id='email' value={user.email} />
                     </div>
                     <div className="profile-input">
                        <label htmlFor="name">Password</label>
                        <input type="text" id='password' onChange={(e)=>handleInputChange(e.target.value,'password')} value={user.password} />
                     </div>
                     <div className="profile-input">
                        <label htmlFor="mob">Mobile No.</label>
                        <input type="text" id='mobile_no' onChange={(e)=>handleInputChange(e.target.value,'mobile_no')} value={user.mobile_no} />
                     </div>
                     <div className="profile-input">
                        <label htmlFor="email">User Role</label>
                        <input type="text" id='userRole' value={user.userRole} />
                     </div>
                     {showBtn&&<button type='submit' className='btn btn-danger'>UPDATE</button>}
                 </form>
             </div>
             </>
             ):(
               <div>
                 <h1>You are not Logged In!,Please Login</h1>
                 <Link to="/login"><button>Login</button></Link>
                 </div>
             )
           }
             
         </div>
       </div>
      </>
  );
};

export default Profile;
