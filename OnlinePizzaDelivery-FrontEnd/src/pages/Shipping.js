import React, { useEffect, useState } from 'react';
import {RiAddFill} from 'react-icons/ri'
import AddressModal from '../components/AddressModal'
import {useHistory,useLocation} from 'react-router-dom'
import '../styles/shipping.css'
import axios from 'axios';

const Shipping = () => {
    const history = useHistory()
    const [cartItems, setCartItems] = useState([])
    const [allAdresses, setAllAdresses] = useState([])
    const allAdress = useState([]);
    const [cart, setCart] = useState({id:3})
    const userId = sessionStorage.getItem("userId"); 
    const userName = sessionStorage.getItem("userName"); 
    const cartPrice=cartItems.reduce((total,itm)=>total+itm?.price*itm?.qty,0)
    const deleviryPrice = parseFloat(sessionStorage.getItem("deliveryPrice"))
    const discount = 0;
    
    // const auth = useSelector(state=>state.user.user)
    const location = useLocation();
    const path = location.pathname
    const [show,setShow]=useState(false)
    const [selected,setSelected]=useState(0)
    const [addressToEdit,setAddressToEdit]=useState()

    useEffect(()=>{
        if(userId==null){
            history.push('/signin')
        }
    },[])
    
    
    useEffect(()=>{
        getAddressesByUser();

    },[])

    const getAddressesByUser = async()=>{
        await axios.get(`http://localhost:8080/pizzadelivery/addressbyuser/${userId}`).then((res)=>{
            setAllAdresses(res.data)
            console.log("All Addresses")
            console.log(res.data)
            loadItems();
            loadCart();
        })
    }

    const loadCart= async ()=>(
        
        await axios.get(`http://localhost:8080/pizzadelivery/cart/${userId}`).then((res)=>{
            setCart(res.data)
            console.log("Inside Cart")
            console.log("res.data")
            console.log(res.data)
            console.log("res")
            console.log(res)
            console.log("Cart")
            console.log(cart)
            sessionStorage.setItem("cartId",res.data.id)
            loadItems();
        })
    );

    const loadItems= async ()=>{
        await axios.get(`http://localhost:8080/pizzadelivery/cartitems/${cart.id}`).then((res)=>{
            setCartItems(res.data)
            console.log("Inside CartItems")
            console.log("res.data")
            console.log(res.data)
            console.log("res")
            console.log(res)
            console.log("CartItems")
            console.log(cartItems)
        })
    };

    const deleteAddress = async(id)=>{
        try{
        await axios.delete(`http://localhost:8080/pizzadelivery/address/${id}`).then((res)=>{
            setAllAdresses(res.data)
            console.log("Address Deleted")
            alert("Address Deleted Successfully")
            console.log(res.data)
            loadItems();
            window.location.reload();
        })
        }catch(e){
            console.log(e);
        }
    }

    const proceedToPayment =()=>{
        sessionStorage.setItem("cartPrice", cart.totalCartPrice)
        history.push('/payment')
    }

    const handleUpdateAddress=(id)=>{
        history.push(`/editaddress/${id}`)
    }
  
    const handleSelectAddress=(address,i)=>{
    setSelected(i)
    sessionStorage.setItem("selectedAddress", JSON.stringify(address));
    }

    const totalPrice= ((cart.totalCartPrice+deleviryPrice)-discount);

    const addAddress =()=>{
        history.push('/addaddress')
    }
    
  return (
    <>
  <div className='shipping'>
   <div className="progress">
        <div className="status">
            <p>Bag</p>
            <div className={`divider`}></div>
            <p className={` ${path==='/shipping'&& 'active'}`}>Shipping</p>
            <div className="divider"></div>
           <p className={` ${path==='/payment'&& 'active'}`}>Payment</p>
        </div>
   </div>
   <div className="shipping-details">
       <div className="address">
        <h3>Select Delivery Address</h3>
        <div className="add-sec-area">
            {
            allAdress.length>0?(allAdresses.map((address,i)=>(
                <div onClick={()=>handleSelectAddress(address,i)} className={`og-add ${selected===i&& 'selected'}`} key={address.id}>
                <p>{userName}</p>
                <span>{address.house_no},{address.street}</span>
                <span>{address.city},{address.state} -{address.pincode} </span>
                <span>{address.country}</span>
                <span><b>Mobile No:</b>{address.mobNo}</span>
                <div className="btns">
                    <button className='btn' onClick={()=>deleteAddress(address.id)}>Remove</button>
                    <button className='btn' onClick={()=>handleUpdateAddress(address.id)}>Edit</button>
                </div>
               </div>
            ))
            ):<h3 style={{padding:'20px 0'}}>No Address found! Add one</h3>}
           
            <div className="add-address" onClick={addAddress}>
             <div className="add">
                 <RiAddFill/>
                 <p style={{"margin-top":"10px"}}>Add Address</p>
             </div>
            </div>
        </div>
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
                            <h3><span>₹</span>{totalPrice}</h3>
                        </div>
                      </div>
                      <button onClick={proceedToPayment} disabled={totalPrice===0?true:false}>PROCEED TO PAYMENT</button>
        </div>
   </div>
  </div>
  {/* <AddressModal show={show} setShow={setShow} addressToEdit={addressToEdit}/> */}
  </>
  );
};

export default Shipping;
