import axios from 'axios';
import React from 'react';
import { useHistory } from "react-router-dom";
import Stars from '../components/Stars'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ProductCard({product}) {
  const history = useHistory();
  var userId = sessionStorage.getItem("userId");
  console.log(userId);
  const notify = () => toast("Wow so easy!");

  const add = ()=>{
    if(userId===null){
      alert("Please login in to add");
      notify("Please login in to add")
      history.push("/login")
    } else {
      addToCart();
    }
  }

  const reviews=()=>{
    history.push(`/productreview/${product.id}`)
  }

  const addToCart= async ()=>{
      try{
        await axios.get(`http://localhost:8080/pizzadelivery/addtocart?user_id=${userId}&pizza_id=${product.id}`)
        .then((res)=>{
            if(res.data != null){
              debugger;
              alert("Pizza added successfully");
              console.log("Pizza added successfully")
              
            } else {
              alert("Could not be added");
              console.log("Could not be added")
            }
        })
      }catch(e){
        console.log(e);
      }
  };

  return (
    <div className="card" style={{"width": "18rem"}}>
    <img src = {product.imagePath} className="card-img-top" alt="..." style={{Width:"290px"}}/>
    <div className="card-body">
        <h5 className="card-title">{product.name}</h5>
        <h6>Rating: {product.avg_rating}</h6>
        <h6>Price : ₹ {product.price}</h6>
        <p className="card-text">{product.summary}</p>
        <button type="button" class="btn btn-primary" onClick={add}>Add To Cart</button>
        <br/>
        <button type="button" class="btn btn-light" onClick={reviews} style={{marginTop:"10px"}}>Reviews</button>
    </div>
    </div>
  )
}

export default ProductCard

// avg_rating
// id
// inStock
// name
// pizzaCategory
// price
// summary
// veg