import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function AddCategoryComponent(){

    // this.categoryName = categoryName;
    // this.description = description;

const [id,setId]=useState('');
const [categoryName,setCategoryName]=useState("");
const [description,setDescription]=useState("");

async function save(event)
    {
        event.preventDefault();
    try
        {
         await axios.post("http://localhost:8080/pizzadelivery/category",
        {

        id:id,
        categoryName: categoryName,
        description: description,
        });
          alert("Pizza added successfully");
          setId("");
          setCategoryName("");
          setDescription("");
        }
    catch(err)
        {
          alert("category added successful");
        }
   }


    return(
<div class="container mt-4">
        <form>
        <div class="form-group">
            <label>CategoryName</label>
            <input type="text" class="form-control"placeholder="enter Category name"
            value={categoryName}
            onChange={(event)=>{
                setCategoryName(event.target.value);
            }}
            />
        </div>

        <div class="form-group">
            <label>description</label>
            <input type="text" class="form-control"placeholder="enter Description"
            value={description}
            onChange={(event)=>{
                setDescription(event.target.value);
            }}
            />
        </div>

        <button class="btn btn-primary mt-4" onClick={save}>Added</button>
        </form>
</div>
    );
}
export default AddCategoryComponent;