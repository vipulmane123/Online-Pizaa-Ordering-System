import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import AdminNav from '../AdminNav';
 
const EditProduct = () => {
// const [id,setId]=useState('');
const [name,setName]=useState("");
const [price,setPrice]=useState("");
const[avg_rating,setAvg_rating]=useState("");
const[summary,setSummary]=useState("");
const[isVeg,setIsVeg]=useState("");
const[inStock,setInStock]=useState("");
const[imagePath,setImagePath]=useState("");
const[pizzaCategory,setPizzaCategory]=useState("");
const[category,setCategory]=useState([]);
    const history = useHistory();
    const { id } = useParams();
 
    const updateProduct = async (e) => {
        e.preventDefault(); 
        console.log(id);
        await axios.put(`http://localhost:8080/pizzadelivery/pizza`,{
            id:id,
            name: name,
            price: price,
            avg_rating: avg_rating,
            summary: summary,
            isVeg : isVeg,
            inStock  : inStock,
            imagePath : imagePath,
            pizzaCategory: pizzaCategory
        });
        history.push("/allPizza");
    }

    useEffect(()=>{
        const getCategory=async()=>{
            const reqData=await fetch("http://localhost:8080/pizzadelivery/categories");
            const resData=await reqData.json();
            setCategory(resData);
            console.log(reqData);
        }
        getCategory();
    },[]);
 
    useEffect(() => {
        getProductById();
    }, []);

    const handleOptionChange = (event) => {
        debugger;
        const selectedCategory = category.find(cat => cat.categoryName === event.target.value);
        setPizzaCategory(selectedCategory);
       // setPizzaCategory(event.target.value);
    }
 

    const getProductById = async () => {
        debugger;
        const response = await axios.get(`http://localhost:8080/pizzadelivery/pizza/${id}`);
        // setId(response.data.id);
        setName(response.data.name);
        setPrice(response.data.price);
        setAvg_rating(response.data.avg_rating);
        setSummary(response.data.summary);
        setIsVeg(response.data.isVeg);
        setInStock(response.data.inStock);
        setImagePath(response.data.imagePath);
        setPizzaCategory(response.data.pizzaCategory);
    }
 //form-group
 //form-control
    return (
        <div>
            <AdminNav/>
        <div class="container mt-4">
            <form onSubmit={ updateProduct }>
                <div className="form-group">
                    <label className="label">name</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">price</label>
                    <input 
                        className="form-control"
                        type="number"
                        placeholder="price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">avg_rating</label>
                    <input 
                        className="form-control"
                        type="number"
                        placeholder="avg_rating"
                        value={ avg_rating }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">summary</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="summary"
                        value={ summary }
                        onChange={ (e) => setSummary(e.target.value) }
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

                <div className="form-group">
                    <label className="label">isVeg</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="veg / NonVeg"
                        value={ isVeg }
                        onChange={ (e) => setIsVeg(e.target.value) }
                    />
                </div>
 
                <div className="form-group">
                    <label className="label">inStock</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="AVAILABLE"
                        value={ inStock }
                        onChange={ (e) => setInStock(e.target.value) }
                    />
                </div>
 
                <div className="form-group">
                    <button className="btn btn-primary mt-4">Update</button>
                </div>
            </form>
        </div>
    </div>
    )
}
 
export default EditProduct