import React from 'react';
import { useEffect, useState } from 'react';
import axios from 'axios';
import Product from '../components/Product';
import data from '../data';
import MessageBox from '../components/MessageBox';
import LoadingBox from '../components/LoadingBox';
export default function HomeScreen() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error,setError] = useState(false);
  useEffect(() => {

    const fecthData = async () => {
       try {
        setLoading(true);
        const { data } = await axios.get('/api/products');
        setLoading(false);
        setProducts(data);
       } catch (error) {
         setError(error.message);
         setLoading(false);
       }
     
    };
    fecthData();
  }, []);

  return (
    <div>
      {loading? (<LoadingBox></LoadingBox>)
      :error ? (<MessageBox variant = 'danger'>{error}</MessageBox>)
      : (<div className="row center">
      {data.products.map((product) => (
        <Product key={product._id} product={product}></Product>
      ))}
    </div>)}
      
     
       </div>
     );
   }