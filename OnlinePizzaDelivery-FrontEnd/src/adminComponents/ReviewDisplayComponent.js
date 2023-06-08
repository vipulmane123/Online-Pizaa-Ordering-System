// {
//     "id": 7,
//     "review": "qwertyu",
//     "rating": 8.0,
//     "user": {
//         "first_name": "Onkar",
//     },
//     "pizza": {
//         "name": "mrudulla",
//     },
//     "postedOn": "2022-08-12"
// },


import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import AdminNav from '../AdminNav';

function ReviewDisplayComponent()
{
    var [userName, setUserName] = useState("");
    const [allReview, setAllReview] = useState([
        {
            id: "",
            review: "",
            rating:"" ,
            user:"" ,
            pizza: "",
            postedOn: "",
        }
    ]);
    var history = useHistory();

    
    useEffect(()=>{
        axios.get("http://localhost:8080/pizzadelivery/reviews").then((res) =>{
            
            setAllReview(res.data)})
            console.log("This is review");
    }, []);

    var  Remove=(no)=>{
        axios.delete(`http://localhost:8080/pizzadelivery/review/${no}`);
        var filterReview = allReview.filter((offer)=>{
                                    return (offer.id != no);
                                });
                                setAllReview(filterReview);
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
        {/* <a href="/AllReviews" className="btn btn-info">ADD REVIEW</a> */}
 Welcome {" "} {userName} {" "}
 <button className='btn btn-primary' 
         onClick={Logout}>
     Log out
 </button>
</div>
<figure class="text-center"><h1>ALL REVIEW</h1></figure>
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                    {
},
                        <tr>
                            <th>id</th>
                            <th>review</th>
                            <th>rating</th>
                            <th>User Name</th>
                            <th>pizza Name</th>
                            <th>postedOn</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                                // "id": 7,
    // "review": "qwertyu",
    // "rating": 8.0,
    // "user": {
    //     "first_name": "Onkar",
    // },
    // "pizza": {
    //     "name": "mrudulla",
    // },
    // "postedOn": "2022-08-12"
    allReview.map((review)=>{
                                return(
                                    <tr key = {review.id}>
                                    <td>{review.id}</td>
                                    <td>{review.review}</td>
                                    <td>{review.rating}</td>
                                    <td>{review.user.first_name}</td>
                                    <td>{review.pizza.name}</td>
                                    <td>{review.postedOn}</td>
                                    <td>
                                    <button className='btn btn-danger'
                                                onClick=
                                                    {
                                                    ()=>{
                                                            Remove(review.id)
                                                        }
                                                    }>
                                                    Delete
                                                </button>
                                    </td>
                                    {/* <td>
                                    <button type="button" class="btn btn-outline-warning">
                                    <Link to={`/EditOfferComponent/${offer.id}`}>Edit</Link>
                                                </button>
                                    </td> */}
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

export default ReviewDisplayComponent;

