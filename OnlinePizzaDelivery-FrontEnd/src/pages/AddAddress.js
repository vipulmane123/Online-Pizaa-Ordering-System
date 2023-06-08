import { useState, useEffect } from 'react'
import axios from "axios";
import { useHistory, useParams } from 'react-router-dom';
 

const AddAddress = () => {
// const [id,setId]=useState('');
const [city,setCity]=useState("");
const [country,setCountry]=useState("");
const [house_no,setHouse_no]=useState("");
const [pincode,setPincode]=useState("");
const [state,setState]=useState("");
const [street,setStreet]=useState("");

    const history = useHistory();
    const { id } = useParams();
 
    const addAddress = async (e) => {
        e.preventDefault(); 
        console.log(id);
        debugger;
        try{
        await axios.post(`http://localhost:8080/pizzadelivery/category`,{
            id:id,
            city: city,
            country: country,
            house_no: house_no,
            pincode:pincode,
            state:state,
            street:street
        }).then((res)=>{
            if(res.data != null){
              debugger;
              alert("address added successfully");
              console.log("address added successfully")
              
            } else {
              alert("Could not be added address");
              console.log("Could not be added address")
        }})
    }catch(e){
        console.log(e);
    } 
        history.push("/addresses");
    }
 
    // useEffect(() => {
    //     getAddressById();
    // }, []);
 

    // const getAddressById = async () => {
    //     debugger;
    //     const response = await axios.get(`http://localhost:8080/pizzadelivery/address/${id}`);
    //     setCity(response.data.city);
    //     setCountry(response.data.country);
    //     setHouse_no(response.data.house_no);
    //     setPincode(response.data.pincode);
    //     setState(response.data.state);
    //     setStreet(response.data.street);
    // }
 
    return (
        <div className='shadow' style={{margin:"70px", padding:"50px"}}>
            <h2>ADD ADDRESS</h2>
            <form onSubmit={ addAddress }>

                <div className="field">
                    <label className="label">City</label>
                    <input 
                        className="city"
                        type="text"
                        placeholder="city"
                        value={ city }
                        onChange={ (e) => setCity(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Country</label>
                    <input 
                        className="country"
                        type="text"
                        placeholder="country"
                        value={ country }
                        onChange={ (e) => setCountry(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">House no</label>
                    <input 
                        className="house_no"
                        type="text"
                        placeholder="house_no"
                        value={ house_no }
                        onChange={ (e) => setHouse_no(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Pincode</label>
                    <input 
                        className="pincode"
                        type="text"
                        placeholder="pincode"
                        value={ pincode }
                        onChange={ (e) => setPincode(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">State</label>
                    <input 
                        className="state"
                        type="text"
                        placeholder="state"
                        value={ pincode }
                        onChange={ (e) => setState(e.target.value) }
                    />
                </div>

                <div className="field">
                    <label className="label">Street</label>
                    <input 
                        className="street"
                        type="text"
                        placeholder="street"
                        value={ state }
                        onChange={ (e) => setStreet(e.target.value) }
                    />
                </div>

                <div className="field">
                    <button className="btn btn-primary">Add Address</button>
                </div>
            </form>
        </div>
    )
}
 
export default AddAddress;