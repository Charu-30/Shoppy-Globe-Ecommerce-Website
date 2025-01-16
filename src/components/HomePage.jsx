import bg from '../assets/bg.jpg';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock, faMapPin, faShippingFast, faUndo } from '@fortawesome/free-solid-svg-icons';
import TrendingProducts from './TrendingProducts';
import { useEffect, useState } from 'react';
import useFetch from '../utils/useFetch';
import { Link } from 'react-router-dom';

function HomePage(){
    const [categories, setCategories]= useState([]);
    const {data: products, error, loading}= useFetch("https://dummyjson.com/products");

    // console.log(products);

        useEffect(()=>{
            if(products && products.length>0){
                const categoryList= [...new Set(products.map((product)=> product.category))];
                setCategories(categoryList);
            }
        },[products]);

        if(loading){
            return <div> Loading...</div>
        }
    
        if(error){
            return <div>Error in loading data: {error}</div>
        }
    return(
        <div>
            {/* Hero Section */}
            <div className="relative min-h-screen w-full bg-cover bg-center flex pt-36 justify-center px-4 text-center "
                style={{backgroundImage: `url(${bg})`}}>
                    <div className='absolute inset-0 bg-opacity-5 backdrop-blur-sm'></div>
                    <div className='relative p-6 rounded-lg max-w-6xl'>
                        <h1 className=' font-bold text-red-950 text-center text-4xl sm:text-5xl lg:text-6xl font-serif italic'>Welcome to Shoppy Globe</h1>
                        <div className='text-center text-pink text-xl sm:text-2xl lg:text-3xl font-semibold font-serif mt-4'>Your Ultimate Shopping Destination!</div>
                        <p className='text-center text-black font-medium mt-16 sm:text-lg md:text-xl lg:text-2xl px-4'>"Discover a world of exciting products at unbeatable prices. 
                            Whether you're shopping for the latest trends, everyday essentials, or exclusive deals.<br/> 
                            Shoppy Globe is here to make your shopping experience delightful and seamless.<br/> Start exploring now!"
                        </p>
                        <button className='mt-12 bg-red-900 hover:bg-red-950 px-6 py-2 text-white rounded-md font-semibold text-sm sm:text-base '>
                            <Link to="/productlist">SHOP NOW</Link>
                        </button>
                    </div>
            </div>

            {/* Categories Section */}
            <div className='py-8 bg-gray-200'>
                <div className='font-bold text-center text-red-950 font-serif text-3xl sm:text-4xl italic mb-8'>
                    Categories On Demand
                </div>
                <div  className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mx-auto px-4'>
                    {categories.map((category)=>(
                        <div key={category} className='relative h-64 hover:scale-105'>
                            <Link to="/productlist" state={{category: category}}>
                                <img src={`src/assets/${category}.jpg`} 
                                alt={category}
                                className='w-full h-full object-cover rounded-lg' 
                            />
                            <button className='absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 text-lg sm:text-xl lg:text-2xl text-white font-bold rounded'>
                                {category.toUpperCase()}
                            </button>
                            </Link>
                        </div>
                    ))}
                </div>
            </div>

            {/* Trending Products Section */}
            <TrendingProducts/>

            {/* Features Section */}
            <div className='flex flex-wrap gap-6 bg-gray-100 py-8 justify-center'>
                <div className='flex flex-col items-center text-center max-w-xs'>
                    <FontAwesomeIcon icon={faLock} size= "2x" color='purple' />
                    <h1 className='font-semibold italic font-serif text-lg sm:text-xl mt-2'>Secure Payments</h1>
                    <p className='text-gray-700 text-sm sm:text-base'>Shop with confidence knowing that your transactions are safeguarded.</p>
                </div>
                <div className='flex flex-col items-center text-center max-w-xs'>
                    <FontAwesomeIcon icon={faShippingFast} size="2x" color='purple'/>
                    <h1 className='font-semibold italic font-serif text-lg sm:text-xl mt-2'>Free Shipping</h1>
                    <p className='text-gray-700 text-sm sm:text-base'>Shopping with no extra charges – savor the liberty of complimentary shipping on every order.</p>
                </div>
                <div className='flex flex-col items-center text-center max-w-xs'>
                    <FontAwesomeIcon icon={faUndo} size='2x' color='purple'/>
                    <h1 className='font-semibold italic font-serif text-lg sm:text-xl mt-2'>Easy Returns</h1>
                    <p className='text-gray-700 text-sm sm:text-base'>With our hassle-free Easy Returns, changing your mind has never been more convenient.</p>
                </div>
                <div className='flex flex-col items-center text-center max-w-xs'>
                    <FontAwesomeIcon icon={faMapPin} size='2x' color='purple'/>
                    <h1 className='font-semibold italic font-serif text-lg sm:text-xl mt-2'>Order Tracking</h1>
                    <p className='text-gray-700 text-sm sm:text-base'>Stay in the loop with our Order Tracking feature – from checkout to your doorstep.</p>
                </div>
            </div>
        </div>
    )
}

export default HomePage;