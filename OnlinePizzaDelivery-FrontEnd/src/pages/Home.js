import axios from 'axios';
import React, { useEffect, useState } from 'react'
import '../App.css';
import ProductCard from '../layout/ProductCard';
import NavBar from '../layout/NavBar';

function Home() {
    const [products, setProducts] = useState([])
    const [selected, setSelected] = useState([])
    const [catId, setCatId] = useState(0);
    const [filteredList,setFilteredList] = useState(products);

    console.log("Filtered List")
    console.log(filteredList)    

    useEffect(()=>{
        loadProducts();
        console.log("List of products: ")
        console.log(products)
    },[]);

    const loadProducts= async ()=>(
        
        await axios.get("http://localhost:8080/pizzadelivery/pizzas").then((res)=>{
            setProducts(res.data)
            console.log("Inside loadProducts")
            console.log("res.data")
            console.log(res.data)
            console.log("res")
            console.log(res)
            console.log("products")
            console.log(products)
        })
    );

    useEffect(()=>{
        // setFilteredList(catId==0?(products):(products.filter(item => item.pizzaCategory.id=={catId})));
        if(catId!=0){
        setFilteredList(products.filter(i=>i.pizzaCategory.id==catId))
        console.log("FilteredList in use effect")
        console.log(filteredList)
        }else{
            setFilteredList(products)
        }
    })

  return (
    <div className='main-area'>
        <NavBar selectCat={setCatId}/>
        {
            filteredList.map((product)=>{
                return(
                    <div>
                        <ProductCard product={product}/>
                    </div>
                )
            }) 
        }
    </div>
  )
}

export default Home