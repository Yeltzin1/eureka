import React from 'react'
import { products } from '../../data/products';
import { Imagecards_2 } from './Imagecards_2';


export const Imagecards = () => {

    const prodObj=products;
    const numeros= [1,2,3,4,5]
    
    //console.log(prodObj.map(num=>num.name))
    return (
        <div className="album py-5 ">
            <div className="container text-center">
                <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 g-3">

                    {
                    prodObj.map(product=>{
                         //return   <p>{product.name}</p>
                         
                     return <Imagecards_2 product={product} key={product.id}/>
                    })
                    }
                
                </div>
            </div>
        </div>
    )
}
