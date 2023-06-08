import axios from 'axios'
import { Button } from 'bootstrap'
import React,{useState} from 'react'
import { useHistory } from "react-router-dom";
// import {MdDelete} from 'react-icons/md'
// import {IoMdAdd,IoMdRemove} from 'react-icons/io'
// import { useDispatch } from 'react-redux'
// import { deleteItem, upadteCart } from '../actions/cart'

const CartItemCard = ({item},{onIncreament}) => {

    const handleClick = () => {
        onIncreament();
      };

    const [qty,setQty]=useState(item.quantity);
    const history = useHistory();
    var userId = sessionStorage.getItem("userId");
    // const dispatch = useDispatch()
    if(qty<1){
     setQty(1)
    }

    const increaseQty= async()=>{
        await axios.get(`http://localhost:8080/pizzadelivery/addtocart?user_id=${userId}&pizza_id=${item.pizza.id}`)
        // handleClick()
        console.log("increase")
        // history.push("/cart")
        window.location.reload()
    }
    const decreaseQty=async()=>{
        await axios.get(`http://localhost:8080/pizzadelivery/removefromcart?user_id=${userId}&pizza_id=${item.pizza.id}`)
        // handleClick()
        window.location.reload()
    }
    const deletecartitem=async()=>{
        await axios.delete(`http://localhost:8080/pizzadelivery/cartitems/${item.id}`)
        // handleClick();
        window.location.reload()
    }

    

const reomveFormCartHandler =()=>{
// delte action
    deletecartitem();
    console.log("Item Removed");
}

    return (
        <div className='cart-card'>
            <div className="img">
               <img src={item.pizza.imagePath} alt={item.pizza.name} />
            </div>
            <div className="des">
               <h3>{item.pizza.name}</h3>
               <p>qty:{item.quantity}</p>
               <div className="handle">
                   <div className="qty">
                      <button type="button" class="btn btn-light" onClick={decreaseQty}>-</button>
                       <div className='item-qty'>{qty}</div>
                       <button type="button" class="btn btn-light" onClick={increaseQty}>+</button>
                   </div>
                   <div className="delete" onClick={reomveFormCartHandler}>
                   <button type="button" class="btn btn-danger">
                   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-trash" viewBox="0 0 16 16">
                                <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"/>
                                <path fill-rule="evenodd" d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"/>
                                </svg>
                   </button>
                   </div>
               </div>
            </div>
            <div className="price">
              <h2><span>Rs.</span>{item.pizza.price}</h2>
            </div>
        </div>
    )
}

export default CartItemCard
