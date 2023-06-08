
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useHistory, Link } from 'react-router-dom';
import AdminNav from '../AdminNav';

function OfferDisplayComponent()
{
    // super();
    // this.name = name;
    // this.discount = discount;
    // this.valid_upto = valid_upto;
    // this.valid_from = valid_from;
    // this.code = code;
    // this.terms_conditions = terms_conditions;
    var [userName, setUserName] = useState("");
    const [allOffer, setAllOffer] = useState([
        {
            id: "",
            name: "",
            discount:"" ,
            valid_upto:"" ,
            valid_from: "",
            code: "",
            terms_conditions: ""
        }
    ]);
    var history = useHistory();

    
    useEffect(()=>{
        getOffers();
    }, []);

    var getOffers=async()=>{
        try{
        axios.get("http://localhost:8080/pizzadelivery/offers").then((res) =>{
            
        setAllOffer(res.data)
        console.log("This is Offer");
        console.log(res.data)
         })
        }catch(e){
            console.log(e)
        }
    }

    var  Remove=(no)=>{
        axios.delete(`http://localhost:8080/pizzadelivery/offer/${no}`);
        var filterOffer = allOffer.filter((offer)=>{
                                    return (offer.id != no);
                                });
        setAllOffer(filterOffer);
    }



    var Logout = ()=>{
        sessionStorage.removeItem("isLoggedIn");
        sessionStorage.removeItem("userName");
        history.push("/ShopingCart");
    }

    return(
        <div>
            <AdminNav/>
        <div class="container mt-4">
        <div style={{float: "right"}}>
        {/* <button type="button" class="btn btn-outline-info"> */}
        <a href="/addoffer" className="btn btn-info">ADD OFFER</a>
        {/* <Link to={`/OfferComponent`}>ADD OFFER</Link>
 </button> */}
 Welcome {" "} {userName} {" "}
 <button className='btn btn-primary' 
         onClick={Logout}>
     Log out
 </button>
</div>
<figure class="text-center"><h1>MY ALL OFFERS</h1></figure>
            <div className="row">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>id</th>
                            <th>name</th>
                            <th>discount</th>
                            <th>valid_upto</th>
                            <th>valid_from</th>
                            <th>code</th>
                            <th>terms_conditions</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            allOffer.map((offer)=>{
                                return(
                                    <tr key = {offer.id}>
                                    <td>{offer.id}</td>
                                    <td>{offer.name}</td>
                                    <td>{offer.discount}</td>
                                    <td>{offer.valid_upto}</td>
                                    <td>{offer.valid_from}</td>
                                    <td>{offer.code}</td>
                                    <td>{offer.terms_conditions}</td>
                                    <td>
                                    <button className='btn btn-danger'
                                                onClick=
                                                    {
                                                    ()=>{
                                                            Remove(offer.id)
                                                        }
                                                    }>
                                                    Delete
                                                </button>
                                    </td>
                                    <td>
                                    <button type="button" class="btn btn-outline-warning">
                                    <Link to={`/editoffer/${offer.id}`}>Edit</Link>
                                                </button>
                                    </td>
                                </tr>
                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </div>
    </div>
    )
}

export default OfferDisplayComponent;