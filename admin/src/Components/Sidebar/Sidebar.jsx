import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';
// import add_product_item from '../../assets/Product_Cart.svg';
// import list_product_icon from '../../assets/Product_list_icon.svg';
const Sidebar = () => {
    return (
        <div className='sidebar'>
            <Link to={'/addproduct'} style={{textDecoration:"none"}}>
                <div className='sidebar-item'>
                    <img src='' alt=''/>
                    <p>Add Product</p>
                </div>
            </Link>
            <Link to={'/listproduct'} style={{textDecoration:"none"}}>
                <div className='sidebar-item'>
                    <img src='' alt=''/>
                    <p>Product List</p>
                </div>
            </Link>
            <Link to={'/rentedcars'} style={{textDecoration:"none"}}>
                <div className='sidebar-item'>
                    <img src='' alt=''/>
                    <p>Rented Cars List</p>
                </div>
            </Link>
            <Link to={'/clients'} style={{textDecoration:"none"}}>
                <div className='sidebar-item'>
                    <img src='' alt=''/>
                    <p>Clients List</p>
                </div>
            </Link>
        </div>
    );
}

export default Sidebar;
