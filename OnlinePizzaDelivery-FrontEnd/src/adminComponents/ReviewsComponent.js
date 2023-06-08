import { useState } from "react";
import axios from "axios";
import AdminNav from "../AdminNav";

function ReviewsComponent(){
const [id,setId]=useState('');
const [review,setReview]=useState("");
const [rating,setRating]=useState("");

async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/pizzadelivery/review",
        {
        review: review,
        rating: rating,
        user: {
            id: 7,
            first_name: "Onkar",
            last_name: "Mahamuni",
            email: null,
            password: "abc",
            mobile_no: null,
            userRole: "CUSTOMER"
        },
        pizza: {
            id: 3,
            name: "mrudulla",
            price: 784.0,
            avg_rating: 3.8,
            summary: "extra large",
            inStock: false,
            pizzaCategory: null,
            veg: false
        }
        
        });
          alert("successfull rating");
          setId("");
          setReview("");
          setRating("");
          
        
        
        }
    catch(err)
        {
          alert("rating unsuccessful");
        }
   }
 return(
    <div>
        <AdminNav/>
        <div class="container mt-4">
        <form>
                <div class="form-group">
                    <label>reviews</label>
                    <input type="text" class="form-control"placeholder="enter review"
                    value={review}
                    onChange={(event)=>{
                        setReview(event.target.value);
                    }}
                    />
                </div>

                <div class="form-group">
                    <label>rating</label>
                    <input type="number" class="form-control"placeholder="enter rating"
                    value={rating}
                    onChange={(event)=>{
                        setRating(event.target.value);
                    }}
                    />
                </div>
                <button class="btn btn-primary mt-4" onClick={save}>Reviews</button>
        </form>
        </div>
    </div>
    );
}
export default ReviewsComponent;