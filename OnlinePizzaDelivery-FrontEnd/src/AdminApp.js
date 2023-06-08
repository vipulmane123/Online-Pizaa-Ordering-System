
import './App.css';
import HeaderComponent from './adminComponents/HeaderComponent';
import {Route, Switch} from 'react-router-dom'
import PizzasComponent from './adminComponents/PizzasComponent';
import OrderComponent from './adminComponents/OrderComponent';
import CartItemComponent from './adminComponents/CartItemComponent';
import UserComponent from './adminComponents/UserComponent';
import ShopingCartComponent from './adminComponents/ShopingCartComponent';
import Login from './adminComponents/LoginComponent';
import ProtectedRouteComponent from './adminComponents/ProtectedRouteComponent';
import RegistrationComponent from './adminComponents/RegistrationComponent';
import ReviewsComponent from './adminComponents/ReviewsComponent';
import ReviewDisplayComponent from './adminComponents/ReviewDisplayComponent';
import OfferComponent from './adminComponents/OfferComponent';
import OfferDisplayComponent from './adminComponents/OfferDisplayComponent';
import AddProductsComponent from './adminComponents/AddProductsComponent';
import EditProduct from './adminComponents/EditProductComponent';
import EditOrderComponent from './adminComponents/EditOrderComponent';
import EditOfferComponent from './adminComponents/EditOfferComponent';
import DisplayCategoryComponent from './adminComponents/DisplayCategoryComponent';
import EditCategoryComponent from './adminComponents/EditCategoryComponent';
import AdminNav from './AdminNav';
import AddCategoryComponent from './adminComponents/AddCategoryComponent'

function App() {
  return (
        <div>
        <div className="container">
        {/* <HeaderComponent/> */}
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <a href="/Register" className="btn btn-success">Register</a>
        <a href="/adminusers" className="btn btn-success">All Users</a>
        <a href="/adminpizzas" className="btn btn-success">All Product</a>
        <a href="/adminorders" className="btn btn-success">All Order</a>
        <a href="/adminreview" className="btn btn-success">All Reviews</a>
        <a href="/adminofferdisplay" className="btn btn-success">All Offer</a>
        <a href="/displaycategory" className="btn btn-success">All categories</a>
        </div>
        </nav>  */}
        {/* <nav class="navbar navbar-expand-lg bg-body-tertiary">
        <div class="container-fluid">
        <button type="button" class="btn btn-outline-success" onClick={console.log("clicked")}> <Link to={"/home"}>Home</Link> {"     "}</button>
        <button type="button" class="btn btn-outline-success"><Link to={"/Register"}>ADD USER</Link> {"     "}</button>
        <button type="button" class="btn btn-outline-success"> <Link to={"/allPizza"}>Pizza</Link> {"     "}</button>
        <button type="button" class="btn btn-outline-success"> <Link to={"/order"}>Order</Link> {"     "}</button>
        <button type="button" class="btn btn-outline-success"><Link to={"/CartItem"}>Cart</Link> {"     "}</button>
        <button type="button" class="btn btn-outline-success"><Link to={"/User"}>User</Link> {"     "}</button>
        <button type="button" class="btn btn-outline-success"><Link to={"/ShopingCart"}>Shopingcart</Link> {"     "}</button>
        <button type="button" class="btn btn-outline-success"><Link to={"/AllReviews"}>AddReviews</Link> {"     "}</button>
        <button type="button" class="btn btn-outline-success"><Link to={"/DisplayReviews"}>Reviews</Link> {"     "}</button>
        <button type="button" class="btn btn-outline-success"><Link to={"/OfferDisplayComponent"}>offers</Link> {"     "}</button>
        <button type="button" class="btn btn-outline-success"> <Link to={"/DisplayCategoryComponent"}>Category</Link> {"     "}</button>  */}
        {/* <button type="button" class="btn btn-outline-success"> <Link to={"/Login"}>Login</Link> {"     "}</button>   */}
  
            {/* <Link to={"/OfferComponent"}>Offers</Link> {"     "} */}
            
            {/* <Link to={"/AddProductsComponent"}>AddProductsComponent</Link> {"     "} */}
            {/* <Link to={"/updateProduct/:id"}>EditProduct</Link> {"     "} */}
            {/* <Link to={"/EditOrderComponent/:id"}>EditOrderComponent</Link> {"     "}
            <Link to={"/EditOfferComponent/:id"}>EditOfferComponent</Link> {"     "} */}
           
            {/* <Link to={"/EditCategoryComponent"}>EditCategoryComponent</Link> {"     "} */}
           
            
        <div className="container">
          <Switch>
            <Route path = "/adminhome" exact component={PizzasComponent}></Route>
            <ProtectedRouteComponent path = "/adminpizzas"exact component={PizzasComponent}/>
            <ProtectedRouteComponent path = "/adminorders" exact component={OrderComponent}/>
            <ProtectedRouteComponent path = "/admincartitem" exact component={CartItemComponent}/>
            <ProtectedRouteComponent path = "/adminusers" exact component={UserComponent}/>
            {/* <ProtectedRouteComponent path = "/ShopingCart" exact component={ShopingCartComponent}/> */}
            {/* <ProtectedRouteComponent path = "/Login" exact component={Login}/> */}
            <ProtectedRouteComponent path = "/adduser" exact component={RegistrationComponent}/>
            <ProtectedRouteComponent path = "/adminreview" exact component={ReviewsComponent}/>
            <ProtectedRouteComponent path = "/adminreviews" exact component={ReviewDisplayComponent}/>
            <ProtectedRouteComponent path = "/addoffer" exact component={OfferComponent}/>
            <ProtectedRouteComponent path = "/adminofferdisplay" exact component={OfferDisplayComponent}/>
            <ProtectedRouteComponent path = "/adminaddproduct" exact component={AddProductsComponent}/>
            <ProtectedRouteComponent path = "/updateproduct/:id" exact component={EditProduct}/>
            <ProtectedRouteComponent path = "/addproduct" exact component={AddProductsComponent}/>
            <ProtectedRouteComponent path = "/editorder/:id" exact component={EditOrderComponent}/>
            <ProtectedRouteComponent path = "/editoffer/:id" exact component={EditOfferComponent}/>
            <ProtectedRouteComponent path = "/displaycategories" exact component={DisplayCategoryComponent}/>
            <ProtectedRouteComponent path = "/editcategory/:id" exact component={EditCategoryComponent}/>
            <ProtectedRouteComponent path = "/addcategory" exact component={AddCategoryComponent}/>
        </Switch>
        </div>
      </div>
      </div>
  );
}

export default App;
