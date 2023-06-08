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
            inStock  : inStock
        });
        history.push("/allPizza");
    }
 
    useEffect(() => {
        getProductById();
    }, []);
 

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
    }
 
    return (
        <div>
            <AdminNav/>
            <form onSubmit={ updateProduct }>
                <div className="field">
                    <label className="label">name</label>
                    <input 
                        className="name"
                        type="text"
                        placeholder="name"
                        value={ name }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">price</label>
                    <input 
                        className="price"
                        type="number"
                        placeholder="price"
                        value={ price }
                        onChange={ (e) => setPrice(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">avg_rating</label>
                    <input 
                        className="avg_rating"
                        type="number"
                        placeholder="avg_rating"
                        value={ avg_rating }
                        onChange={ (e) => setName(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">summary</label>
                    <input 
                        className="summary"
                        type="text"
                        placeholder="summary"
                        value={ summary }
                        onChange={ (e) => setSummary(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">isVeg</label>
                    <input 
                        className="isVeg"
                        type="text"
                        placeholder="isVeg"
                        value={ isVeg }
                        onChange={ (e) => setIsVeg(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <label className="label">inStock</label>
                    <input 
                        className="inStock"
                        type="text"
                        placeholder="inStock"
                        value={ inStock }
                        onChange={ (e) => setInStock(e.target.value) }
                    />
                </div>
 
                <div className="field">
                    <button className="button is-primary">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditProduct