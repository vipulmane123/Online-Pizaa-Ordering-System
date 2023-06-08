import React,{useEffect,useState} from 'react';
// import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
// import { getOrderDetails } from '../actions/orders';
import OrderDetail from '../skeleton/OrderDetailSk';
// import Message from '../components/Message'
// import SideBar from '../components/SideBar';
import axios from 'axios';
const OrderDetails = () => {
    const params=useParams()
    const {id}=params;
    // const dispatch = useDispatch()
    const [user, setUser] = useState()
    const [address, setAddress] = useState();
    const [order, setOrder] = useState();
    const [orderItems, setOrderItems] = useState([])
    const [cartprice, setCartPrice] = useState();
    const [totalprice, setTotalPrice] = useState();
    const [shippingPrice, setShippingPrice] = useState();
    const [paymentMethod, setPaymentMethod] = useState();
    const loading = false;

    useEffect(()=>{
      loadCart();
    },[])

    // const {order={},loading,}= useSelector(state=>state.orderDetails)
    // const {sucess}=useSelector(state=>state.order)
    
    // const {shippingAddress,orderItems,totalprice,shippingPrice,itemsPrice,_id,paymentMethod
    // } =order 

    // const [show,setShow]=useState(sucess)
    // console.log(sucess)

    const loadCart= async ()=>{
        
      await axios.get(`http://localhost:8080/pizzadelivery/order/${id}`).then((res)=>{
          setAddress(res.data.address)
          setUser(res.data.cartOwner)
          setOrder(res.data)
          setPaymentMethod(res.data.paymentType)
          setTotalPrice(res.data.totalOrderPrice)
          setCartPrice(res.data.cartPrice)
          setShippingPrice(res.data.deliveryPrice)
          loadItems();
      })
    };
  
    const loadItems= async ()=>{
        await axios.get(`http://localhost:8080/pizzadelivery/orderitemsbyorder/${id}`).then((res)=>{
            setOrderItems(res.data)
            console.log("Inside Order")
            console.log("res.data")
            console.log(res.data)
            console.log("res")
            console.log(res)
            console.log("OrderItems")
            console.log(orderItems)
        })
    };





  return (
      <>
    <div className='shipping' style={{marginTop: "70px"}}>
{!loading?(<div className="shipping-details">
<div className="shippingshippingAddress">
<h3>ORDER DETAILS</h3>
<div className="add-sec-area">
    {/* <h4 style={{margin:'20px 0'}}>Order ID:{order.id}</h4> */}
    <h4>Shipping</h4>
      {address&&(
          <div  className={`og-add`}>
              <p>{user.first_name}</p>
                  <span>{address.house_no},{address.street}</span>
                  <span>{address.city},{address.state} -{address.pincode} </span>
                  <span>{address.country}</span>
                  <span><b>Mobile No:</b>{address.mobNo}</span>
            </div>
              )}
     </div>
     <h4>Products</h4>
                  <div className="cart-area">
                  <div className="all-items">
                          {orderItems.map((item)=>(
                              <div className='cart-card' key={item.id}>
                              <div className="img">
                                <img src={item.pizza.imagePath} alt={item.name} />
                              </div>
                              <div className="des">
                                <h3>{item.pizza.name}</h3>
                                <p>qty:{item.quantity}</p>
                                <p className='des'>{item.pizza.summary?item.pizza.summary:'Treat your taste buds with Double Pepper Barbecue Chicken, Peri-Peri Chicken, Chicken Tikka & Grilled Chicken Rashers'}</p>
                              </div>
                              <div className="price">
                                <h2><span>Rs.</span>{item.totalPrice}</h2>
                              </div>
                          </div>
                          ))}
                        </div>
                   </div>
                   <h4>Payment Method</h4>
                   <div className="payments-opts">
                 <div className="payment-method">
                 <div className='select-opt'>
                     <label htmlFor="cod">{paymentMethod?.toUpperCase()}</label>
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
                             <p><span>₹</span>{cartprice}</p>
                         </div>
                        
                         <div className="item">
                             <p>Delivery Charges</p>
                             <p>{shippingPrice===0?<span className='free'>Free</span>:<span>₹{shippingPrice}</span>}</p>
                         </div>
                     </div>
                     <div className="total">
                         <h3>Total</h3>
                         <h3><span>₹</span>{totalprice}</h3>
                     </div>
                   </div>
     </div>
</div>):<OrderDetail/>}

</div>
{/* <Message
 showModal={show}
 msg={"Order Placed Successfuly"}
 img={"https://cdn.dribbble.com/users/335541/screenshots/7102045/media/5b7237fe7bbfa31531d6e765576f1bc4.jpg?compress=1&resize=400x300"}
 type="error"
 closeModal={setShow}
/> */}
</>
  );
};
export default OrderDetails;