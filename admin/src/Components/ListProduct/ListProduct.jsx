import React, { useEffect, useState } from 'react';
import './ListProduct.css'
import remove_icon from '../../assets/cross_icon.png'
const ListProduct = () => {

    const [allcars,setAllCars] = useState([]);

    const fetchInfo = async ()=>{
        await fetch('http://localhost:4004/cars')
        .then((resp)=>resp.json())
        .then((data)=>{setAllCars(data)})
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    const remove_car = async(id)=>{
        await fetch(`http://localhost:4004/cars/${id}`,{
            method:'DELETE',
            headers:{
                Accept : 'application/json',
                'Content-Type':'application/json',
            },
            body: JSON.stringify({id:id})
        })
        await fetchInfo();
    }

    return (
        <div className='list-product'>
            <h1>All Cars List</h1>
            <div className='listproduct-format-main'>
                <p>Cars</p>
                <p>Name</p>
                <p>Price</p>
                <p>Availability</p>
                <p>Remove</p>
            </div>
            <div className='listproduct-allproducts'>
                <hr/>
                {allcars.map((product,index)=>{
                    return<>
                        <div key={product.id} className='listproduct-format-main listproduct-format'>
                            <img className='listproduct-product-icon' src={product.image} alt=''/>
                            <p>{product.name}</p>
                            <p>${product.price}</p>
                            <p>{((product.available).toString()).toUpperCase()}</p>
                            <img onClick={()=>{remove_car(product.id)}} className='listproduct-remove-icon' src={remove_icon} alt=''/>
                        </div>
                        <hr/>
                    </>
                })}
            </div>
        </div>
    );
}

export default ListProduct;
