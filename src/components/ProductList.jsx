import React, { useEffect } from "react";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import ProductItem from "./ProductItem";
import useFetch from "../utils/useFetch";

function ProductList(){
    const {state} =useLocation();
    const initialCategory= state?.category || "all";
    const [searchText, setSearchText]= useState("");
    const [filteredProducts, setFilteredProducts]= useState([]);
    const [selectedCategory, setSelectedCategory]= useState(initialCategory);

    const {data: products, error, loading}= useFetch("https://dummyjson.com/products");

    // console.log(products);

    const categories= ["all", ...(products ? [...new Set(products.map((product)=> product.category))]: [])];

    function handleSearch(){
        if(products){
            const filterProducts= products.filter(
                (product)=> product.title.toLowerCase().includes(searchText.toLowerCase()));
                setFilteredProducts(filterProducts)
        }
    }

    function filterByCategory(category){
        setSelectedCategory(category);
        if(category==="all"){
            setFilteredProducts(products);
        }else{
            const filtered= products.filter((product)=> product.category===category);
            setFilteredProducts(filtered);
        }
    }
    
    useEffect(()=>{
        if(products){
            if(selectedCategory==='all'){
                setFilteredProducts(products);
            }else{
                const filtered= products.filter((product)=>product.category===selectedCategory);
                setFilteredProducts(filtered);
            }
            
        }
    }, [products, selectedCategory]);

    if(loading){
        return <div> Loading...</div>
    }

    if(error){
        return <div>Error in loading data: {error}</div>
    }

    return(
        <div className="min-h-screen w-full flex flex-col pt-24 px-4 md:px-16 bg-gray-200">
            <div className="flex flex-wrap md:w-auto w-full gap-6 justify-center mb-6">
                {categories.map((category)=>(
                    <button key={category}
                    onClick={()=> filterByCategory(category)}
                    className={`${selectedCategory===category? "bg-red-900": "bg-red-700"} font-semibold hover:scale-105 p-2 rounded-3xl border w-32 text-white`}
                    >
                        {category.charAt(0).toUpperCase()+ category.slice(1)}
                    </button>
                ))}
            </div>

            <div className="text-center">
                <input 
                    type="text" 
                    placeholder="Search Products.."
                    className="p-2 border border-gray-300 rounded mb-4 md:w-96"
                    value={searchText}
                    onChange={(e)=> setSearchText(e.target.value)}
                />
                <button onClick={handleSearch} 
                    className="ml-2 border bg-pink-800 hover:bg-pink-900 text-white p-2 rounded-md">
                        Search
                </button>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 w-full">
                {filteredProducts.map((product)=>(
                    <ProductItem key={product.id} product={product}/>
                ))}
            </div> 
        </div>
    )
}

export default ProductList;