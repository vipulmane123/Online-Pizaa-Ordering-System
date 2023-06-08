import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';

function ReviewsList() {
    const params=useParams()
    const {id}=params;
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
        await axios.get(`http://localhost:8080/pizzadelivery/userreviews/${id}`).then((res)=>{
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

    const EditReview=(id)=>{
        history.push(`/editreview/${id}`)
    }


  return (
    //review, rating, user, pizza, postedOn
    <div className='container' style={{"marginTop":"70px","marginBottom":"40px"}}>
        <h1>MY REVIEW LIST</h1>
        {/* <button className='btn btn-primary' onClick={()=>{alert("Review Added Successfully!")}} style={{margin:"10px"}}>POST REVIEW</button> */}
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
                                    <td>
                                    <button className='btn btn-danger' onClick={
                                         ()=>{
                                            EditReview(review.id)
                                        }
                                    }>Edit</button>
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

export default ReviewsList