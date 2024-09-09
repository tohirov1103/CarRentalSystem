import React, { useState } from "react";
import "./AddProduct.css";

const AddProduct = () => {
  const [image, setImage] = useState(false);
  const [productDetails, setProductDetails] = useState({
    name: "",
    image: "",
    year: "",
    color: "",
    fuelType: "",
    numOfseats: "",
    price: "",
  });
  const changeHandler = (e) => {
    setProductDetails({ ...productDetails, [e.target.name]: e.target.value });
  };
  const imageHandler = (e) => {
    setImage(e.target.files[0]);
  };

  const Add_Car = async () => {
    console.log(productDetails);
    let responseData;
    let product = productDetails;

    let formData = new FormData();
    formData.append("product", image);

    await fetch("http://localhost:4004/upload", {
      method: "POST",
      headers: {
        Accept: "application/json",
      },
      body: formData,
    })
      .then((resp) => resp.json())
      .then((data) => {
        responseData = data;
      });

    if (responseData.success) {
      product.image = responseData.image_url;
      console.log(product);
      await fetch("http://localhost:4004/cars", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(product),
      })
        .then((resp) => resp.json())
        .then((data) => {
          data.success ? alert("Product Added") : alert("Failed");
        });
    }
  };

  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Car name</p>
        <input
          value={productDetails.name}
          onChange={changeHandler}
          type="text"
          name="name"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Car price for rent</p>
          <input
            value={productDetails.price}
            onChange={changeHandler}
            type="text"
            name="price"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Car year</p>
          <input
            value={productDetails.year}
            onChange={changeHandler}
            type="text"
            name="year"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Car number of seats</p>
          <input
            value={productDetails.numOfseats}
            onChange={changeHandler}
            type="text"
            name="numOfseats"
            placeholder="Type here"
          />
        </div>
        <div className="addproduct-itemfield">
          <p>Car fuel type</p>
          <input
            value={productDetails.fuelType}
            onChange={changeHandler}
            type="text"
            name="fuelType"
            placeholder="Type here"
          />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Car color</p>
        <input
          value={productDetails.color}
          onChange={changeHandler}
          type="text"
          name="color"
          placeholder="Type here"
        />
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img
            src={image ? URL.createObjectURL(image) : ""}
            alt=""
            className="addproduct-thumnail-img"
          />
        </label>
        <input
          onChange={imageHandler}
          type="file"
          name="image"
          id="file-input"
          hidden
        />
      </div>
      <button
        onClick={() => {
          Add_Car();
        }}
        className="addproduct-btn"
      >
        ADD
      </button>
    </div>
  );
};

export default AddProduct;
