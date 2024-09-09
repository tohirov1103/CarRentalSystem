import React from 'react';
import './Admin.css';
import Sidebar from '../Components/Sidebar/Sidebar';
import {Routes, Route} from 'react-router-dom'
import AddProduct from '../Components/AddProduct/AddProduct';
import ListProduct from '../Components/ListProduct/ListProduct';
import ListClients from '../Components/ListClients/ListClients'
import ListRentedCars from '../Components/ListRentedCars/ListRentedCars';
const Admin = () => {
    return (
        <div className='admin'>
            <Sidebar/>
            <Routes>
                <Route path='/addproduct' element={<AddProduct/>}/>
                <Route path='/listproduct' element={<ListProduct/>}/>
                <Route path='/rentedcars' element={<ListRentedCars/>}/>
                <Route path='/clients' element={<ListClients/>}/>
            </Routes>
        </div>
    );
}

export default Admin;
