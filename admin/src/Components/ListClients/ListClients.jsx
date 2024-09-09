import React, { useEffect, useState } from 'react';
import './ListClients.css'
import remove_icon from '../../assets/cross_icon.png'
const ListClients = () => {

    const [allClients,setAllClients] = useState([]);

    const fetchInfo = async ()=>{
        await fetch('http://localhost:4004/user')
        .then((resp)=>resp.json())
        .then((data)=>{setAllClients(data)})
    }

    useEffect(()=>{
        fetchInfo();
    },[])

    const remove_user = async(id)=>{
        await fetch(`http://localhost:4004/user/${id}`,{
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
        <div className='list-clients'>
            <h1>Clients List</h1>
            <div className='listclients-format-main'>
                <p>Firstname</p>
                <p>Lastname</p>
                <p>Phonenumber</p>
                <p>Email</p>
                <p>Remove</p>
            </div>
            <div className='listclients-allproducts'>
                <hr/>
                {allClients.map((product,index)=>{
                    return<>
                        <div key={product._id} className='listclients-format-main listclients-format'>
                            {/* <img className='listclients-product-icon' src={product.image} alt=''/> */}
                            <p>{product.firstname}</p>
                            <p>{product.lastname}</p>
                            <p>{product.phonenumber}</p>
                            <p>{product.email}</p>
                            <img onClick={()=>{remove_user(product._id)}} className='listclients-remove-icon' src={remove_icon} alt=''/>
                        </div>
                        <hr/>
                    </>
                })}
            </div>
        </div>
    );
}

export default ListClients;
