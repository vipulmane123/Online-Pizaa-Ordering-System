import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
import AdminNav from '../AdminNav';
 
const EditOfferComponent = () => {
const [name,setName]=useState("");
const [discount,setDiscount]=useState("");
const[valid_upto,setValid_upto]=useState("");
const[valid_from,setValid_from]=useState("");
const [code,setCode]=useState("");
const [terms_conditions,setTerms_conditions]=useState("");
    const history = useHistory();
    const { id } = useParams();
 
    const updateProduct = async (e) => {
        e.preventDefault(); 
        console.log(id);
        debugger;
    // this.name = name;
    // this.discount = discount;
    // this.valid_upto = valid_upto;
    // this.valid_from = valid_from;
    // this.code = code;
    // this.terms_conditions = terms_conditions;
        await axios.put(`http://localhost:8080/pizzadelivery/offer`,{
            id:id,
            name: name,
            discount: discount,
            valid_upto: valid_upto,
            valid_from: valid_from,
            code: code,
            terms_conditions: terms_conditions,
        });
        history.push("/OfferDisplayComponent");
    }
 
    useEffect(() => {
        getProductById();
    }, []);
 

    const getProductById = async () => {
        debugger;
        const response = await axios.get(`http://localhost:8080/pizzadelivery/offer/${id}`);
    // this.name = name;
    // this.discount = discount;
    // this.valid_upto = valid_upto;
    // this.valid_from = valid_from;
    // this.code = code;
    // this.terms_conditions = terms_conditions;
    debugger;
        setName(response.data.name);
        setDiscount(response.data.discount);
        setValid_upto(response.data.valid_upto);
        setValid_from(response.data.valid_from);
        setCode(response.data.code);
        setTerms_conditions(response.data.terms_conditions);
    }
 
     //form-group
 //form-control
    return (
        <div>
            <AdminNav/>
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
                    <label className="label">discount</label>
                    <input 
                        className="form-control"
                        type="number"
                        placeholder="discount"
                        value={ discount }
                        onChange={ (e) => setDiscount(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">valid_upto</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="valid_upto"
                        value={ valid_upto }
                        onChange={ (e) => setValid_upto(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">valid_from</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="valid_from"
                        value={ valid_from }
                        onChange={ (e) => setValid_from(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">code</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="code"
                        value={ code }
                        onChange={ (e) => setCode(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">terms_conditions</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="terms_conditions"
                        value={ terms_conditions }
                        onChange={ (e) => setTerms_conditions(e.target.value) }
                    />
                </div>
 
                <div className="form-group">
                <button className="btn btn-primary mt-4">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditOfferComponent