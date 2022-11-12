import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Style/Container.css";

function Container() {
  const [product, setProduct] = useState({
    id: new Date().getTime().toString(),
    name: "",
    price: "",
    rating: ""
  });
  const navigate = useNavigate();
  let productName, productValue;
  const handleChange = (e) => {
    productName = e.target.name;
    productValue = e.target.value;
    setProduct({ ...product, [productName]: productValue });
  }
  const postData = async (e) => {
    e.preventDefault();
    const { id, name, price, rating } = product;
    const res = await fetch("/post", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        id, name, price, rating
      })
    });
    const data = await res.json();
    if (data.status === 422 || !data) {
      window.alert("Registration Failed");
    }
    else {
      window.alert("Successfull Registration");
      navigate("/");
    }
  }
  return (
    <div className='reg-container'>
      <form method='POST'>
        <br />
        <div className="form-floating mb-3">
          {<input type="number" autoComplete='off' className="form-control" name="id" value={product.id} disabled={true} />}
          <label>Product Id</label>
        </div>
        <div className="form-floating mb-3">
          <input type="text" autoComplete='off' className="form-control" name="name" value={product.name} onChange={handleChange} />
          <label>Enter Product Name</label>
        </div>
        <div className="form-floating mb-3">
          <input type="number" autoComplete='off' className="form-control" name="price" value={product.price} onChange={handleChange} />
          <label>Enter Product Price</label>
        </div>
        <div className="form-floating">
          <input type="number" autoComplete='off' min="1" max="5" className="form-control" name="rating" value={product.rating} onChange={handleChange} />
          <label>Enter Product Rating</label>
        </div>
        <br></br>
        <button type="submit" className="btn btn-primary btn-lg" onClick={postData}>Submit Button</button>
      </form>
    </div>
  )
}

export default Container