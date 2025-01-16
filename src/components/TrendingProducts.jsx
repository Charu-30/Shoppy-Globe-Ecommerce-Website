import { Link } from "react-router-dom";
import useFetch from "../utils/useFetch";

function TrendingProducts(){
    const {data: products, error, loading}= useFetch("https://dummyjson.com/products");
    const trendingProducts=Array.isArray(products)?products.slice(0,5):[];

    if(loading){
        return <div>Loading...</div>
    }

    if(error){
        return <div>Error: {error}</div>
    }

    return(
        <div className="flex flex-col items-stretch py-4">
            <h1 className="text-4xl text-red-950 italic font-serif font-bold text-center">Trending Now</h1>
            {trendingProducts.length>0?(
            <div className="grid grid-cols-2 md:grid-cols-5 md:gap-4">
                {trendingProducts.map((product)=>(
                    <div className="flex flex-col mx-auto text-center rounded-xl hover:scale-105 mb-8" key={product.id}>
                        <Link to={`/product/${product.id}`}>
                            <img src={product.images[0]} alt="" className="w-60 h-60" />
                            <div className="">
                                <h2 className="text-sm font-medium">{product.title}</h2>
                                <p className="font-medium">${product.price}</p>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            ): (
                <p>No trending products available</p>
            )}
        </div>
    )
}

export default TrendingProducts;