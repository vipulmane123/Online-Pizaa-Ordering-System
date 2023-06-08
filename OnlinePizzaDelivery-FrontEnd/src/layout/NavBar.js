import React, { useEffect, useState } from 'react';
import {
  MDBNavbar,
  MDBContainer,
  MDBIcon,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBNavbarBrand,
  MDBCollapse
} from 'mdb-react-ui-kit';
import { MDBDropdown, MDBDropdownMenu, MDBDropdownToggle, MDBDropdownItem } from 'mdb-react-ui-kit';
import { useHistory } from "react-router-dom";


export default function App({selectCat}) {
  const [showNavColor, setShowNavColor] = useState(false);
  const userId = sessionStorage.getItem("userId")
  const history = useHistory();  
  const[pizzaCategory,setPizzaCategory]=useState("");
  const[category,setCategory]=useState([]);

  useEffect(()=>{
    const getCategory=async()=>{
        const reqData=await fetch("http://localhost:8080/pizzadelivery/categories");
        const resData=await reqData.json();
        setCategory(resData);
        console.log(reqData);
    }
    getCategory();
  },[]);

  var OrdersPage=()=>{
    history.push("/orderbyuser");
  }

  var ReviewsPage=()=>{
    history.push(`/userreviews/${userId}`);
  }

  var Logout = ()=>{
    sessionStorage.removeItem("isLoggedIn");
    sessionStorage.removeItem("userName");
    sessionStorage.removeItem("userId");
    sessionStorage.removeItem("userRole");
    history.push("/login");
}

var profilePage=()=>{
  if(userId!=null){
  history.push(`/profile/${userId}`)
  }else{
  alert("Please login to check profile")
  history.push("/login")
  }
}

  var Login = () => {
    history.push("/login");
  }

  var Register = () => {
    history.push("/register");
  }

const handleOptionChange = (event) => {
  // debugger;
  const selectedCategory = category.find(cat => cat === event.target.value);
  console.log("selected cat id")
  console.log(selectedCategory.id)
  // selectCat(selectedCategory.id)
  // console.log("selectedCategory.id")
  // console.log(selectedCategory.id)
  // setPizzaCategory(selectedCategory);
  // setPizzaCategory(event.target.value);
}

const updateCat = (id)=>{
  console.log("selected cat id")
  console.log(id)
  selectCat(id)
}

  return (
   <div>
      <div style={{background:"#e74c3c"}}>
      <MDBNavbar expand='lg' dark bgColor='primary' className='fixed-top'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='http://localhost:3000/'>PIZZATERIA</MDBNavbarBrand>
          <MDBNavbarToggler
            type='button'
            data-target='#navbarColor02'
            aria-controls='navbarColor02'
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setShowNavColor(!showNavColor)}
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse show={showNavColor} navbar>
            <MDBNavbarNav className='me-auto mb-2 mb-lg-0'>
              <MDBNavbarItem className='active'>
                <MDBNavbarLink aria-current='page' href='http://localhost:3000/'>
                  Home
                </MDBNavbarLink>
              </MDBNavbarItem>
              
              <MDBNavbarItem>
                <MDBNavbarLink href='http://localhost:3000/aboutus'>About</MDBNavbarLink>
              </MDBNavbarItem>

              <MDBNavbarItem>
                <MDBNavbarLink href='http://localhost:3000/contactus'>Contact Us</MDBNavbarLink>
              </MDBNavbarItem>

              {/* <div className='dropdown'>
                    <label>Category</label>
                        <input type="text" class="form-control"placeholder="Select categories"
                        value={pizzaCategory}
                        onChange={(event)=>{
                            setIsVeg(event.target.value);
                        }}
                        />
                    <select id="dropdown" className="btn btn-secondary dropdown-toggle" value={pizzaCategory} onChange={handleOptionChange}>
                    <option value="">Choose a category</option>
                    {category.map((categ) => (
                    <option key={categ.id} value={categ} onClick={()=>{updateCat(categ.id)}}>{categ.categoryName}</option>
                    ))}
                    </select>
              </div> */}
              
              <div class="dropdown" style={{marginLeft:"10px"}}>
              <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                Select A Category
              </button>
              <ul class="dropdown-menu">
                    <li><a key={0} value={0} onClick={()=>{updateCat(0)}} class="dropdown-item" href="#">All</a></li>
                {category.map((categ) => (
                    // <option key={categ.id} value={categ} onClick={()=>{updateCat(categ.id)}}>{categ.categoryName}</option>
                    <li><a key={categ.id} value={categ} onClick={()=>{updateCat(categ.id)}} class="dropdown-item" href="#">{categ.categoryName}</a></li>
                ))}
                {/* <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li> */}
              </ul>
              </div>
              


            </MDBNavbarNav>

              

              <a href='http://localhost:3000/cart' className='btn btn-secondary' bgColor=''>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-cart" viewBox="0 0 16 16">
                <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l1.313 7h8.17l1.313-7H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"/>
              </svg>
              </a>

              

              {/* <div class="dropdown">
                <button class="btn btn-secondary dropdown-toggle" type="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown button
                </button>
                <ul class="dropdown-menu">
                  <li><a class="dropdown-item" onClick={()=>{setFilter = ""}}>All Categories</a></li>
                  {category.map((cat, index) => {
                  return (
                    <li><a class="dropdown-item" onClick={()=>{setFilter = ""}}>All Categories</a></li>
                  )
                })}
                </ul>
              </div>               */}

              <MDBDropdown>
                <MDBDropdownToggle>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person" viewBox="0 0 16 16">
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z"/>
                  </svg>
                </MDBDropdownToggle>
                <MDBDropdownMenu>
                  <MDBDropdownItem link onClick={profilePage}>Profile</MDBDropdownItem>
                  <MDBDropdownItem link onClick={OrdersPage}>My Orders</MDBDropdownItem>
                  <MDBDropdownItem link onClick={ReviewsPage}>My Reviews</MDBDropdownItem>
                  <MDBDropdownItem link onClick={Logout}>Login/Logout</MDBDropdownItem>
                </MDBDropdownMenu>
              </MDBDropdown>


          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
      </div>
   </div>
  );
}