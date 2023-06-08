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


const EditOrderComponent = () => {
// const [id,setId]=useState('');
const [totalItems,setTotalItems]=useState("");
const [totalOrderPrice,setTotalOrderPrice]=useState("");
const[orderOreatedOn,setOrderOreatedOn]=useState("");
const[cartOwner,setCartOwner]=useState("");
const[orderItems,setOrderItems]=useState("");
const[placedOn,setPlacedOn]=useState("");
const[status,setStatus]=useState("");
const[address,setAddress]=useState("");
    const history = useHistory();
    const { id } = useParams();
 
    const updateProduct = async (e) => {
        e.preventDefault(); 
        console.log(id);
        debugger;
        await axios.put(`http://localhost:8080/pizzadelivery/order`,{
            id:id,
            totalItems: totalItems,
            totalOrderPrice: totalOrderPrice,
            orderOreatedOn: orderOreatedOn,
            cartOwner: cartOwner,
            // orderItems : orderItems,
            placedOn  : placedOn,
            status  : status,
            // address  : address
        });
        history.push("/order");
    }
 
    useEffect(() => {
        getProductById();
    }, []);
 

    const getProductById = async () => {
        debugger;
        const response = await axios.get(`http://localhost:8080/pizzadelivery/order/${id}`);
        // setId(response.data.id);
        // totalItems: totalItems,
        // totalOrderPrice: totalOrderPrice,
        // orderOreatedOn: orderOreatedOn,
        // cartOwner: cartOwner,
        // orderItems : orderItems,
        // placedOn  : placedOn,
        // status  : status,
        // address  : address
        setTotalItems(response.data.totalItems);
        setTotalOrderPrice(response.data.totalOrderPrice);
        setOrderOreatedOn(response.data.orderOreatedOn);
        setCartOwner(response.data.cartOwner);
       // setOrderItems(response.data.orderItems);
        setPlacedOn(response.data.placedOn);
        setStatus(response.data.status);
       // setAddress(response.data.address);
    }
 
    return (
        <div>
            <AdminNav/>
            <form onSubmit={ updateProduct }>
                <div className="form-group">
                    <label className="label">name</label>
                    <input 
                        className="form-control"
                        type="number"
                        placeholder="totalItems"
                        value={ totalItems }
                        onChange={ (e) => setTotalItems(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">price</label>
                    <input 
                        className="form-control"
                        type="number"
                        placeholder="totalOrderPrice"
                        value={ totalOrderPrice }
                        onChange={ (e) => setTotalOrderPrice(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">orderOreatedOn</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="orderOreatedOn"
                        value={ orderOreatedOn }
                        onChange={ (e) => setOrderOreatedOn(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">cartOwner</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="cartOwner"
                        value={ cartOwner.first_name }
                        onChange={ (e) => setCartOwner(e.target.value) }
                    />
                </div>

                {/* <div className="field">
                    <label className="label">orderItems</label>
                    <input 
                        className="orderItems"
                        type="text"
                        placeholder="orderItems"
                        value={ orderItems }
                        onChange={ (e) => setOrderItems(e.target.value) }
                    />
                </div> */}
 
                <div className="form-group">
                    <label className="label">placedOn</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="placedOn"
                        value={ placedOn }
                        onChange={ (e) => setPlacedOn(e.target.value) }
                    />
                </div>

                <div className="form-group">
                    <label className="label">status</label>
                    <input 
                        className="form-control"
                        type="text"
                        placeholder="status"
                        value={ status }
                        onChange={ (e) => setStatus(e.target.value) }
                    />
                </div>

                {/* <div className="field">
                    <label className="label">address</label>
                    <input 
                        className="address"
                        type="text"
                        placeholder="address"
                        value={ address }
                        onChange={ (e) => setAddress(e.target.value) }
                    />
                </div> */}
 
                <div className="form-group">
                    <button className="btn btn-primary mt-4">Update</button>
                </div>
            </form>
        </div>
    )
}
 
export default EditOrderComponent