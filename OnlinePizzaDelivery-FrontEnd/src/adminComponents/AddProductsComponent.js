import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddProductsComponent(){

const [id,setId]=useState('');
const [name,setName]=useState("");
const [price,setPrice]=useState("");
const[avg_rating,setAvg_rating]=useState("");
const[summary,setSummary]=useState("");
const[isVeg,setIsVeg]=useState("");
const[pizzaCategory,setPizzaCategory]=useState("");
const[category,setCategory]=useState([]);
const[inStock,setInStock]=useState("");
const[imagePath,setImagePath]=useState("");
useEffect(()=>{
    const getCategory=async()=>{
        const reqData=await fetch("http://localhost:8080/pizzadelivery/categories");
        const resData=await reqData.json();
        setCategory(resData);
        console.log(reqData);
    }
    getCategory();
},[]);

const handleOptionChange = (event) => {
    debugger;
    const selectedCategory = category.find(cat => cat.categoryName === event.target.value);
    setPizzaCategory(selectedCategory);
   // setPizzaCategory(event.target.value);
  }

async function save(event)
    {
        event.preventDefault();
    try
        {
            // "id": 3,
            // "name": "mrudulla",
            // "price": 784.0,
            // "avg_rating": 3.8,
            // "summary": "extra large",
            // "inStock": false,
            // "pizzaCategory": null,
            // "veg": false
            debugger;
         await axios.post("http://localhost:8080/pizzadelivery/pizza",
        {
        id:id,
        name: name,
        price: price,
        avg_rating: avg_rating,
        summary: summary,
        isVeg : isVeg,
        pizzaCategory: pizzaCategory,
        inStock  : inStock,
        imagePath : imagePath
        });
          alert("Pizza added successfully");
          setId("");
          setName("");
          setPrice("");
          setAvg_rating("");
          setSummary("");
          setIsVeg("");
          setPizzaCategory("");
          setInStock("");
          setImagePath("");
        }
    catch(err)
        {
          alert("pizza added successful");
        }
   }


    return(
<div class="container mt-4">
        <form>
        <div class="form-group">
            <label>name</label>
            <input type="text" class="form-control"placeholder="enter pizza name"
            value={name}
            onChange={(event)=>{
                setName(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>Price</label>
            <input type="number" class="form-control"placeholder="enter Price"
            value={price}
            onChange={(event)=>{
                setPrice(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>Avg_rating</label>
            <input type="number" class="form-control"placeholder="enter Rating"
            value={avg_rating}
            onChange={(event)=>{
                setAvg_rating(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>summary</label>
            <input type="text" class="form-control"placeholder="enter Summary"
            value={summary}
            onChange={(event)=>{
                setSummary(event.target.value);
            }}
            />
        </div>

        <div className="form-group">
                    <label className="label">Image Path</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="Image Path"
                        value={ imagePath }
                        onChange={ (e) => setImagePath(e.target.value) }
                    />
        </div>

        <div class="form-group">
            <label>IsVeg</label>
            <input type="text" class="form-control"placeholder="enter ver or non veg"
            value={isVeg}
            onChange={(event)=>{
                setIsVeg(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>pizzaCategory</label>
            {/* <input type="text" class="form-control"placeholder="Select categories"
            value={pizzaCategory}
            onChange={(event)=>{
                setIsVeg(event.target.value);
            }}
            /> */}
        <select id="dropdown" class="form-control" value={pizzaCategory} onChange={handleOptionChange}>
        <option value="">Choose an category</option>
        {category.map(categ => (
          <option key={categ.id} value={categ.value}>{categ.categoryName}</option>
        ))}
      </select>

        </div>

        <div class="form-group">
            <label>InStock</label>
            <input type="text" class="form-control"placeholder="enter stock"
            value={inStock}
            onChange={(event)=>{
                setInStock(event.target.value);
            }}
            />
        </div>

        
        <button class="btn btn-primary mt-4" onClick={save}>Register</button>
        </form>
</div>
    );
}
export default AddProductsComponent;