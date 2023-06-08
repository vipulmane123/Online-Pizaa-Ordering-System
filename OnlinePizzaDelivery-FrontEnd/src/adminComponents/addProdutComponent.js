import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AdminNav from "../AdminNav";

function addProductComponent(){

const [id,setId]=useState('');
const [name,setName]=useState("");
const [price,setPrice]=useState("");
const[avg_rating,setAvg_rating]=useState("");
const[summary,setSummary]=useState("");
const[isveg,setIsveg]=useState("");
const[instock,setInstock]=useState("");

async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/pizzadelivery/pizza",
        {
        id:id,
        name: name,
        price: price,
        avg_rating: avg_rating,
        summary: summary,
        isVeg : isveg,
        inStock:instock
        
        });
          alert("user Registation Successfully");
          setId("");
          setName("");
          setPrice("");
          setAvg_rating("");
          setSummary("");
          setIsveg("");
          setInstock("");
        
        
        }
    catch(err)
        {
          alert("User Registation Failed");
        }
   }


    return(
    <div>
        <AdminNav/>
<div class="container mt-4">
        <form>
        <div class="form-group">
            <label>name</label>
            <input type="text" class="form-control"placeholder="enter name"
            value={name}
            onChange={(event)=>{
                setName(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>price</label>
            <input type="text" class="form-control"placeholder="enter price"
            value={price}
            onChange={(event)=>{
                setPrice(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>avg_rating</label>
            <input type="number" class="form-control"placeholder="enter avg rating"
            value={avg_rating}
            onChange={(event)=>{
                setAvg_rating(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>summary</label>
            <input type="text" class="form-control"placeholder="enter summary"
            value={summary}
            onChange={(event)=>{
                setSummary(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>IsVeg</label>
            <input type="text" class="form-control"placeholder="enter is veg"
            value={isveg}
            onChange={(event)=>{
                setIsveg(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>InStock</label>
            <input type="text" class="form-control"placeholder="enter in stock"
            value={instock}
            onChange={(event)=>{
                setInstock(event.target.value);
            }}
            />
        </div>

        
        <button class="btn btn-primary mt-4" onClick={save}>addpizza</button>
        </form>
</div>
</div>
    );
}
export default addProductComponent;