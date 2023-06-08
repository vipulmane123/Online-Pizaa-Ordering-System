import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import AdminNav from '../AdminNav';
 

// id: "",
// totalItems: "",
// totalOrderPrice:"" ,
// orderOreatedOn:"" ,
// cartOwner: "",
// orderItems: "",
// placedOn: "",
// status: "",
// address: ""


const EditCategoryComponent = () => {
// const [id,setId]=useState('');
const [categoryName,setCategoryName]=useState("");
const [description,setDescription]=useState("");

    const history = useHistory();
    const { id } = useParams();
 
    const updateCategory = async (e) => {
        e.preventDefault(); 
        console.log(id);
        debugger;
        try{
        await axios.put(`http://localhost:8080/pizzadelivery/category`,{
            id:id,
            categoryName: categoryName,
            description: description,
        }).then((res)=>{
            if(res.data != null){
              debugger;
              alert("category updated successfully");
              console.log("category updated successfully")
              
            } else {
              alert("Could not be updadated category");
              console.log("Could not be updated category")
        }})
    }catch(e){
        console.log(e);
    } 
        history.push("/displaycategories");
    }
 
    useEffect(() => {
        getCategoryById();
    }, []);
 

    const getCategoryById = async () => {
        debugger;
        const response = await axios.get(`http://localhost:8080/pizzadelivery/categories/${id}`);
        setCategoryName(response.data.categoryName);
        setDescription(response.data.description);
    }
 
    return (
        <div>
            <AdminNav/>
            <form onSubmit={ updateCategory }>

                <div className="form-group">
                    <label className="label">categoryName</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="categoryName"
                        value={ categoryName }
                        onChange={ (e) => setCategoryName(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">description</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="description"
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                </div>

                
 
                <div className="form-group">
                <button className="btn btn-primary mt-4">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditCategoryComponent