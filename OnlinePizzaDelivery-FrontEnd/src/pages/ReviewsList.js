import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

function ReviewsList() {
    const history = useHistory();
    const userId = sessionStorage.getItem("userId")
    const [reviews, setReviews]=useState([])

    useEffect(() => {
      getReviews()
    }, [])

    useEffect(() => {
        if(userId==null){
            history.push("/login")
        }
      }, [])
    

    const getReviews=async()=>{
        try {
            debugger;
        await axios.get(`http://localhost:8080/pizzadelivery/reviews`).then((res)=>{
            if(res!=null){
                setReviews(res.data)
            } else {
                alert("Something went wrong, Please try again")
            }
        })
        } catch(e) {
            console.log(e);
        }
    }

    const viewOrder=(id)=>{
        history.push(`/review/${id}`)
    }


  return (
    //review, rating, user, pizza, postedOn
    <div className='container' style={{"marginTop":"70px","marginBottom":"40px"}}>
        <h1>REVIEW LIST</h1>
            <div className="row">
                <table className="table table-bordered shadow ">
                    <thead>
                        <tr>
                            <th>Id</th>
                            <th>Rating</th>
                            <th>Review</th>
                            <th>User</th>
                            <th>PostedOn</th>
                            {/* <th>orderItems</th> */}
                            <th>Product Name</th>
                            {/* <th>Status</th>
                            {/* <th>address</th>
                            <th>Delete</th> */}
                        </tr>
                    </thead>
                    <tbody>
                        {
                            reviews.map((review)=>{
                                return(
                                    <tr key = {review.id}>
                                    <td>{review.id}</td>
                                    <td>{review.rating}</td>
                                    <td>{review.review}</td>
                                    <td>{review.user.first_name}</td>
                                    <td>{review.postedOn}</td>
                                    <td>{review.pizza.name}</td>
                                    {/*<td>{order.status}</td> */}
                                    {/* <td>
                                    <button className='btn btn-danger' onClick={
                                         ()=>{
                                            viewOrder(review.id)
                                        }
                                    }>View</button>
                                    </td> */}
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

export default ReviewsList