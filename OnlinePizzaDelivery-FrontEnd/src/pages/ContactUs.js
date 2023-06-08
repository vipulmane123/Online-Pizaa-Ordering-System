import React from "react";
// import "../../node_modules/bootstrap/dist/css/bootstrap.css";

// import Dipak from "../img/Dipak.jpg";
// import Pramod from "../img/Pramod.jpg";
// import Janhavi from "../img/Janhavi.jpg";
// import Vrushali from "../img/Vrushali.jpg";

function ContactUs() {
  return (
    <>
      <div>
        <div className="container shadow bordered" style={{margin:"100px"}}>
          {/* <img
            className="contact-us-container"
            src="../img/bgimage.jpg"
            alt="bgimg"
            style={{ width: "100vh", height: "100vh" }}
          /> */}
          <div style={{padding:"100px", border:"1px black solid"}}>
          <h1>Contact Us</h1>
          <p>Online Pizza Store</p>
            Email: pizzastore@gmail.com<br></br>
            Phone: 9860123456<br></br>
            Address: Hinjewadi, Phase-2, Pimpri, India<br></br>
          </div>
        </div>
      </div>
    </>
  );
}

export default ContactUs;
