import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

function OrdersList() {
    const history = useHistory();
    const userId = sessionStorage.getItem("userId")
    const [orders, setOrders]=useState([])

    useEffect(() => {
      getAllOrders()
    }, [])

    useEffect(() => {
        if(userId==null){
            history.push("/login")
        }
      }, [])
    

    const getAllOrders=async()=>{
        try {
            debugger;
        await axios.get(`http://localhost:8080/pizzadelivery/orderbyuser/${userId}`).then((res)=>{
            if(res!=null){
                setOrders(res.data)
            } else {
                alert("Something went wrong, Please try again")
            }
        })
        } catch(e) {
            console.log(e);
        }
    }

    const viewOrder=(id)=>{
        history.push(`/order/${id}`)
    }


  return (
    <div className='container' style={{"marginTop":"70px","marginBottom":"40px"}}>
        <h1>MY ORDER LIST</h1>
            <div className="row">
                <table className="table table-bordered shadow ">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>totalItems</th>
                            <th>totalOrderPrice</th>
                            <th>orderCreatedOn</th>
                            <th>cartOwner</th>
                            {/* <th>orderItems</th> */}
                            <th>placedOn</th>
                            <th>status</th>
                            {/* <th>address</th> */}
                            <th>Delete</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            orders.map((order)=>{
                                return(
                                    <tr key = {order.id}>
                                    <td>{order.id}</td>
                                    <td>{order.totalItems}</td>
                                    <td>{order.totalOrderPrice}</td>
                                    <td>{order.orderOreatedOn}</td>
                                    <td>{order.cartOwner.first_name}</td>
                                    <td>{order.placedOn}</td>
                                    <td>{order.status}</td>
                                    <td>
                                    <button className='btn btn-danger' onClick={
                                         ()=>{
                                            viewOrder(order.id)
                                        }
                                    }>View</button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
    </div>
  )
}

export default OrdersList