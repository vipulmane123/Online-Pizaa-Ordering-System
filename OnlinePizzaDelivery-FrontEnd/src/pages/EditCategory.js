import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
 

// id: "",
// totalItems: "",
// totalOrderPrice:"" ,
// orderOreatedOn:"" ,
// cartOwner: "",
// orderItems: "",
// placedOn: "",
// status: "",
// address: ""


const Editcategory = () => {
// const [id,setId]=useState('');
const [categoryName,setCategoryName]=useState("");
const [description,setDescription]=useState("");

    const history = useHistory();
    const { id } = useParams();
 
    const updateCategory = async(e)=>{
        e.preventDefault(); 
        console.log(id);
        debugger;
        await axios.put(`http://localhost:8080/pizzadelivery/category`,{
            id:id,
            categoryName: categoryName,
            description: description,
        }).then(alert("Catrgory added successfully"))
        history.push("/displaycategory");
    };
        
    
 
    useEffect(() => {
        getCategoryById();
    }, []);
 

    const getCategoryById = async () => {
        debugger;
        const response = await axios.get(`http://localhost:8080/pizzadelivery/displaycategory/${id}`);
        setCategoryName(response.data.categoryName);
        setDescription(response.data.description);
    }
 
    return (
        <div>
            <form onSubmit={ updateCategory }>

                <div className="field">
                    <label className="label">categoryName</label>
                    <input 
                        className="categoryName"
                        type="text"
                        placeholder="categoryName"
                        value={ categoryName }
                        onChange={ (e) => setCategoryName(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">description</label>
                    <input 
                        className="description"
                        type="text"
                        placeholder="description"
                        value={ description }
                        onChange={ (e) => setDescription(e.target.value) }
                    />
                </div>

                
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default Editcategory