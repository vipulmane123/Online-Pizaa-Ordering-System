
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AdminNav from '../AdminNav';

function CartItemComponent()
{
    var [userName, setuserName] = useState("");
    const [CartItems, setCartItems] = useState([
        {
            quantity : "",
            totalPrice : "",
            cart : "",
            pizza : ""
        }
    ]);
    var history = useHistory();

    useEffect(()=>{
        ////////////////////////////////////
        //we have to implement this method//
        ////////////////////////////////////
        axios.get("http://localhost:8080/pizzadelivery/DisplayCart").then((res) =>{
            setCartItems(res.data)})
            console.log("This is pizza");
    }, []);

    var  Remove=(no)=>{
        ////////////////////////////////////
        //we have to implement this method//
        ////////////////////////////////////
 axios.delete(`http://localhost:8080/pizzadelivery/pizza/Carts/${no}`)
.then(response => {
  console.log(response.data);
}) 
        var filterCartItems = CartItems.filter((CartItem)=>{
                                    return (CartItem.id != no);
                                });
        setCartItems(filterCartItems);
    }

    var Logout = ()=>{
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("userName");
        history.push("/ShopingCart");
    }

    return(
        <div>
            <AdminNav/>
        <div class="container mt-4">
        <div style={{float: "right"}}>
 Welcome {" "} {userName} {" "}
 <button className='btn btn-primary' 
         onClick={Logout}>
     Log out
 </button>
</div>
<figure class="text-center"><h1>MY CARTITEMS LIST</h1></figure>
            
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>quantity</th>
                            <th>totalPrice</th>
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            CartItems.map((CartItem)=>{
                                return(
                                    <tr key = {CartItem.id}>
                                    <td>{CartItem.id}</td>
                                    <td>{CartItem.quantity}</td>
                                    <td>{CartItem.totalPrice}</td>
                                    <td>
                                    <button className='btn btn-danger'
                                                onClick=
                                                    {
                                                    ()=>{
                                                            Remove(CartItem.id)
                                                        }
                                                    }>
                                                    Delete
                                                </button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default CartItemComponent;