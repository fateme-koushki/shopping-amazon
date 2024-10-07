"use client"
import Product from '@/components/Product';
import { ProductProps } from '@/types';
import axios from 'axios';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react'

function Search() {
  const {params} = useParams();
  
  const [productQuery ,  setProductQuery] = useState([])
  const [products,  setProducts] = useState([])

   useEffect( () => { 
    const fetchData = async () => {  
      try {  
        const response = await axios.get(`http://localhost:3000/products`).then((res)=>  res.data) 
        if(response){
          setProductQuery(response)
          const res = productQuery.filter((p)=> p?.query == params )
          setProducts(res)
    } 
      } catch (error) {  
        console.error('Error fetching data:', error);  
      }  
    };  
   
  }, [params]); 
  return (
    
    <div>
     
      {products.length != 0 &&
        products?.length > 0 && (
          <div  className='w-full grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-5 m-3 '>
            {
              products?.map((product : ProductProps)=> (
                <Product key={product?.id}  product={product} />

              ))
            }
          </div>
        ) 
        
      }
    </div>
  )
}

export default Search
