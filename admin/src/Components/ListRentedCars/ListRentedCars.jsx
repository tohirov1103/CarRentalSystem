import React, { useEffect, useState } from "react";
import "./ListRentedCars.css";
import remove_icon from "../../assets/cross_icon.png";
const ListRentedCars = () => {
    const [rentedCars, setRentedCats] = useState([]);

    useEffect(() => {
      const fetchInfo = async () => {
        try {
          const response = await fetch('http://localhost:4004/cars/rented');
          const rentals = await response.json();
          const rentalsWithData = await Promise.all(
            rentals.map(async (rental) => {
              const res = await fetch(`http://localhost:4004/rentals/${rental._id}`, {
                headers: {
                  'Content-Type': 'application/json'
                }
              });
              const populatedRental = await res.json();
              return populatedRental;
            })
          );
          setRentedCats(rentalsWithData);
        } catch (error) {
          console.error(error);
        }
      };
    
      fetchInfo();
    }, []);

  // const remove_car = async(id)=>{
  //     await fetch(`http://localhost:4004/cars/${id}`,{
  //         method:'DELETE',
  //         headers:{
  //             Accept : 'application/json',
  //             'Content-Type':'application/json',
  //         },
  //         body: JSON.stringify({id:id})
  //     })
  //     await fetchInfo();
  // }

  return (
    <div className="list-cars">
      <h1>All Cars List</h1>
      <div className="listcars-format-main">
        <p>Cars</p>
        <p>Name</p>
        <p>Price</p>
        <p>User Name</p>
        <p>Phone Number</p>
      </div>
      <div className="listcars-allproducts">
        <hr />
        {rentedCars.map((rentedCar) => (
          <div
            key={rentedCar._id}
            className="listcars-format-main listcars-format"
          >
            <img
              className="listcars-product-icon"
              src={rentedCar.car.image}
              alt=""
            />
            <p>{rentedCar.car.name}</p>
            <p>${rentedCar.car.price}</p>
            <p>{rentedCar.user.firstname}</p>
            <p>{rentedCar.user.phonenumber}</p>
            {/* <img
              onClick={() => remove_car(rentedCar._id)}
              className="listcars-remove-icon"
              src={remove_icon}
              alt=""
            /> */}
          </div>
        ))}
        <hr />
      </div>
    </div>
  );
};

export default ListRentedCars;
