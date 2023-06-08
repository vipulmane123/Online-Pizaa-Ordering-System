import axios from 'axios';
import React ,{ useEffect, useState}from 'react';
// import axios from 'axios'
const AddressModal = ({show,setShow,addressToEdit}) => {
    const [pincode,setPincode]=useState('')
    const [address,setAdress]=useState('')
    const [state,setState]=useState('')
    const [house_no,setHouse_no]=useState('')
    const [city,setCity]=useState('')
    const [country,setCountry]=useState('')
    const [street, setStreet]=useState('')
    const user = sessionStorage.getItem("user");


    useEffect(()=>{
         if(addressToEdit){
           setHouse_no(addressToEdit.house_no)
           setStreet(addressToEdit.street)
           setCity(addressToEdit.city)
           setState(addressToEdit.state)
           setCountry(addressToEdit.country)
           setPincode(addressToEdit.pincode)
         }
    },[addressToEdit])

    // console.log(pinCode)
    // const getPinCode=async()=>{
    // const {data} = await axios.get(`https://api.postalpincode.in/pincode/${415110}`)
    // console.log(data)
    // setData(data)

    // }
    // useEffect(()=>{
    //    getPinCode()
    // },[])

    const handleSubmit=async(e)=>{
        e.preventDefault()
        debugger;
        try{
        await axios.post('http://localhost:8080/pizzadelivery/address', {
          city: city,
          country: country,
          house_no: house_no,
          pincode: pincode,
          state: state,
          street: street,
          user: JSON.parse(user)
        }).then((res) =>
        {
          if(res!=null){
            alert("Address Added Successfully")
          }
        });
      } catch (error) {
        console.error(error);
      }
    
    
      setShow(false)
    }

    const handleUpdateAddress=async(e)=>{
      e.preventDefault()
      
      await axios.put('http://localhost:8080/pizzadelivery/address', {
          id: addressToEdit.id,
          city: city,
          country: country,
          house_no: house_no,
          pincode: pincode,
          state: state,
          street: street,
          user: JSON.parse(user)
        }).then((res) =>
        {
          if(res!=null){
            alert("Address Added Successfully")
          }
        });



    setShow(false)
    }

  return (
  <div className={`black-scree ${show&&'show'}`} onClick={()=>setShow(false)}>
      <div className="address-form" onClick={(e)=>e.stopPropagation()}>
          <form onSubmit={addressToEdit?handleUpdateAddress:handleSubmit} >

              <input onChange={(e)=>setHouse_no(e.target.value)} value={house_no} type="text" name='house_no' placeholder='House No/Name' />
              <input onChange={(e)=>setStreet(e.target.value)} value={street} type="text" name='street' placeholder='Street/Area'/>
              <input onChange={(e)=>setCity(e.target.value)} value={city} type="text" name='city' placeholder='City'/>
              <input onChange={(e)=>setState(e.target.value)} value={state} type="text"  name='state' placeholder='State' />
              <input onChange={(e)=>setCountry(e.target.value)} value={country} type="text"  name='country' placeholder='Country' />
              <input onChange={(e)=>setPincode(Number(e.target.value))} value={pincode} type="text" name='pinCode' placeholder='Pin Code' />
              <div className="submit-btn">
              <button type='submit'>{addressToEdit?'UPDATE ADDRESS':'ADD ADDRESS'}</button>
          </div>
          </form>
         
      </div>

  </div>
  );
};

export default AddressModal;
