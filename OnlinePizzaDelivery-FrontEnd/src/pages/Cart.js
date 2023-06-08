import axios from 'axios';
import React, { useEffect, useState } from 'react'
import CartItemCard from '../layout/CartItemCard';
import emtycart from '../assests/emtycart.gif'
import '../styles/cart.css'
import { useHistory } from 'react-router-dom'


function Cart() {
    const history = useHistory();
    const [count,setCount]=useState();
    const [userId, setUserId] = useState(sessionStorage.getItem("userId"))
    const [cartId, setCartId] = useState(sessionStorage.getItem("cartId"))
    const [cart, setCart] = useState({id:3})
    const [cartItems, setCartItems] = useState([])
    const [deleviryPrice, setDeliveryPrice] = useState(0)
    const [auth, setAuth] = useState(true);

    const handleCount = () => {
        // update the count state variable
        setCount(count + 1);
    };

    useEffect(()=>{
        loadCart();
        loadItems();
        // loadItems();
        console.log("Carts: ")
        console.log(cart)
    },[count]);

    const loadCart= async ()=>(
        
        await axios.get(`http://localhost:8080/pizzadelivery/cart/${userId}`).then((res)=>{
            setCart(res.data)
            console.log("Inside Total cart price")
            console.log(cart.totalCartPrice)
            setDeliveryPrice((res.data.totalCartPrice>500||res.data.totalCartPrice===0)?0:50)
            console.log("Inside Cart")
            console.log("res.data")
            console.log(res.data)
            console.log("res")
            console.log(res)
            console.log("Cart")
            console.log(cart)
            sessionStorage.setItem("cartId",res.data.id)
        })
    );

    const loadItems= async ()=>(
        
        await axios.get(`http://localhost:8080/pizzadelivery/cartitems/${cartId}`).then((res)=>{
            setCartItems(res.data)
            console.log("Inside CartItems")
            console.log("res.data")
            console.log(res.data)
            console.log("res")
            console.log(res)
            console.log("CartItems")
            console.log(cartItems)
        })
    );

    const checkoutHandler =()=>{
        if(sessionStorage.getItem("isLoggedIn")){
            sessionStorage.setItem("deliveryPrice", deleviryPrice);
            history.push(`/shipping`)
        }
        else{
            history.push(`login`)
        }
    }


  return (            
        <div>
            <div className='cart-screen'>
                <h1>MY CART</h1>
                {
                    cartItems?.length>0?(
                    <div className='cart-area'>
                        <div className="all-items">
                        {cartItems.map((item)=>(
                            <CartItemCard key={item.product} item={item} onIncreament={handleCount}/>
                        ))}
                        </div>
                        <div className="checkout-area">
                            
                        <div className="billing">
                            <h4>PRICE DETAILS</h4>
                            <div className="details">
                                <div className="item">
                                    <p>Price</p>
                                    <p><span>₹</span>{cart.totalCartPrice}</p>
                                </div>
                            
                                <div className="item">
                                    <p>Delivery Charges</p>
                                    <p>{deleviryPrice===0?<span className='free'>Free</span>:<span>₹{deleviryPrice}</span>}</p>
                                </div>
                            </div>
                            <div className="total">
                                <h3>Total</h3>
                                <h3><span>₹</span>{cart.totalCartPrice+parseFloat(deleviryPrice)}</h3>
                            </div>
                        </div>
                        <button type="button" class="btn btn-primary" onClick={checkoutHandler} disabled={cart.totalCartPrice===0?true:false}>PROCEED TO CHECKOUT</button>
                        checkout
                        </div>
                    </div>
                    ):(
                        <>
                        <img src={emtycart} alt="" />
                        <h2>Hey, it feels so light!</h2>
                        <p>There is nothing in your bag. Let's add some items.</p>
                        {/* <Link to="/"><button>Go Back</button></Link> */}
                        <button type="button" class="btn btn-primary">Go Back</button>
                        Go back
                        </>
                    )
                }
        
            </div>
        </div>
  )
}

export default Cart