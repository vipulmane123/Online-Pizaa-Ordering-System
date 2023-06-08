
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';
import AdminNav from '../AdminNav';

function ShopingCartComponent()
{
    var [userName, setuserName] = useState("");
    const [ShopingCarts, setShopingCarts] = useState([
        {
            "totalItems" : "",
            "totalCartPrice" : "",
            "createdOn" : "",
            "lastUpdatedOn" : ""
        }
    ]);
    var history = useHistory();

    
    useEffect(()=>{
        setuserName(sessionStorage.getItem("userName"));
        axios.get("http://localhost:8080/pizzadelivery/pizzas").then((res) =>{
            
            setShopingCarts(res.data)})
            console.log("This is pizza");
    }, []);

    var  Remove=(no)=>{
        axios.delete(`http://localhost:8080/pizzadelivery/pizza/${no}`);
        var filterShopingCart = ShopingCarts.filter((ShopingCart)=>{
                                    return (ShopingCart.id != no);
                                });
        setShopingCarts(filterShopingCart);
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
            <h1>MY SHOPING CART </h1>
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>totalItems</th>
                            <th>totalCartPrice</th>
                            <th>createdOn</th>
                            <th>lastUpdatedOn</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            ShopingCarts.map((ShopingCart)=>{
                                return(
                                    <tr key = {ShopingCart.id}>
                                    <td>{ShopingCart.id}</td>
                                    <td>{ShopingCart.totalItems}</td>
                                    <td>{ShopingCart.totalCartPrice}</td>
                                    <td>{ShopingCart.createdOn}</td>
                                    <td>{ShopingCart.lastUpdatedOn}</td>
                                    <td>
                                    <button className='btn btn-danger'
                                                onClick=
                                                    {
                                                    ()=>{
                                                            Remove(ShopingCart.id)
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

export default ShopingCartComponent;