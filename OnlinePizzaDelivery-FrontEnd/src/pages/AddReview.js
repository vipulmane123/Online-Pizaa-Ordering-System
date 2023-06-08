import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

function ReviewsComponent(){
const [review,setReview]=useState("");
const [rating,setRating]=useState("");
const [pizza,setPizza]=useState("");
const { id } = useParams();
const user = sessionStorage.getItem("user");

useEffect(() => {
    getProductById();
}, []);

const getProductById = async () => {
    debugger;
    await axios.get(`http://localhost:8080/pizzadelivery/pizza/${id}`)
    .then((res)=>{
        if(res!=null){
            setPizza(res.data)
        } else {
            alert("Something went wrong, Please try again")
        }
    })
    .catch((e)=>{console.log(e)})
    
}

async function save(event)
    {
        event.preventDefault();
    try
        {
            debugger
         await axios.post("http://localhost:8080/pizzadelivery/review",
        {
        review: review,
        rating: rating,
        user: user,
        pizza: pizza
        }
        );
          alert("successfull rating");
          setReview("");
          setRating("");
        }
    catch(err)
        {
          alert("rating unsuccessful");
        }
   }

 return(
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
                <button class="btn btn-primary mt-4" onClick={()=>{save()}}>Reviews</button>
        </form>
        </div>
    );
}
export default ReviewsComponent;