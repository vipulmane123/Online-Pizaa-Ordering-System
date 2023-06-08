import logo from './logo.svg';
import './App.css';
import Header from './Header';
import Footer from './Footer';
import NavBar from './layout/NavBar';
import Login from './pages/Login';
import Register from './pages/Register';
import UserList from './pages/UserList';
import Home from './pages/Home';
import CartBar from './pages/CartBar';
import Cart from './pages/Cart';
import Homepage from './pages/Homepage';
import { Route, Switch } from 'react-router-dom';
import ProtectedRouteComponent from './components/ProtectedRouteComponent';
import AboutUs from './pages/AboutUs';
import Shipping from './pages/Shipping';
import Payment from './pages/Payment';
import OrderSummry from './pages/OrderSummry';
import OrderDetails from './pages/OrderDetails';
import OrdersList from './pages/OrdersList';
import Profile from './pages/Profile';
import ReviewsList from './pages/ReviewsList';
import ProductReviews from './pages/ProductReviews'
import UserReviews from './pages/UserReviews'
import AdminApp from './AdminApp'
import EditAddress from './pages/EditAddress';
import AddAddress from './pages/AddAddress';
import AddReview from './pages/AddReview';
import ContactUs from './pages/ContactUs';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <AdminApp/>
      <div>
          <Switch>
            <Route path = "/" exact component={Homepage}></Route>
            <ProtectedRouteComponent path = "/allPizza"exact component={Homepage}/>
            {/* <ProtectedRouteComponent path = "/order" exact component={OrderComponent}/> */}
            <ProtectedRouteComponent path = "/cart" exact component={Cart}/>
            <ProtectedRouteComponent path = "/user" exact component={UserList}/>
            {/* <ProtectedRouteComponent path = "/ShopingCart" exact component={ShopingCartComponent}/> */}
            <Route path = "/login" exact component={Login}/>
            <Route path = "/register" exact component={Register}/>
            <Route path = "/aboutus" exact component={AboutUs}/>
            <Route path = "/contactus" exact component={ContactUs}/>
            <Route path = "/shipping" exact component={Shipping}/>
            <Route path = "/payment" exact component={Payment}/>
            <Route path = "/order" exact component={OrderSummry}/>
            <Route path = "/order/:id" exact component={OrderDetails}/>
            <Route path = "/profile/:id" exact component={Profile}/>
            <Route path = "/orderbyuser" exact component={OrdersList}/>
            <Route path = "/reviews" exact component={ReviewsList}/>
            <Route path = "/productreview/:id" exact component={ProductReviews}/>
            <Route path = "/userreviews/:id" exact component={UserReviews}/>
            {/* <Route path = "/AllReviews" exact component={ReviewsComponent}/>
            <Route path = "/DisplayReviews" exact component={ReviewDisplayComponent}/>
            <Route path = "/OfferComponent" exact component={OfferComponent}/>
            <Route path = "/OfferDisplayComponent" exact component={OfferDisplayComponent}/> */}
            {/* <Route path = "/MainUiComponent" exact component={MainUiComponent}/> */}
            <ProtectedRouteComponent path = "/editaddress/:id" exact component={EditAddress}/>
            <ProtectedRouteComponent path = "/addaddress" exact component={AddAddress}/>
            <ProtectedRouteComponent path = "/addreview/:id" exact component={AddReview}/>
            
          </Switch>
        </div>
        <Footer/>



    </div>
  );
}

export default App;
