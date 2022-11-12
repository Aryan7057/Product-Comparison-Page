import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import "./Style/Container.css";

function Container() {
  const [product, setProduct] = useState([]);
  const [data_1, setData_1] = useState({
    id: "",
    name: "",
    price: "",
    rating: ""
  });
  const [data_2, setData_2] = useState({
    id: "",
    name: "",
    price: "",
    rating: ""
  });
  const getDetail = async () => {
    const response = await fetch("/get");
    setProduct(await response.json());
  }
  useEffect(() => {
    getDetail();
  }, [])
  const navigate = useNavigate();
  const navigate_reg = () => {
    navigate('/register');
  };
  const handleClick_1 = (e) => {
    for (let index = 0; index < product.length; index++) {
      if (e.target.value == product[index].id) {
        return setData_1({...product[index]});
      }
    }
  }
  const handleClick_2 = (e) => {
    for (let index = 0; index < product.length; index++) {
      if (e.target.value == product[index].id) {
        return setData_2({...product[index]});
      }
    }
  }
  return (
    <div>
      <div className="reg-button">
        <button onClick={navigate_reg} className="btn btn-primary btn-dark">Go To Product Registration Page</button>
      </div>
      <div className='home-container'>
        <div className="home-container-1">
          <select className="form-select" aria-label="Default select example">
            <option>Open This Select Menu</option>
            {
              product.map((e) => {
                return (
                  <option key={e._id} value={e.id} onClick={handleClick_1}>{e.name}</option>
                )
              })
            }
          </select>
        </div>
        <div className="home-container-2">
          <select className="form-select" aria-label="Default select example">
            <option>Open This Select Menu</option>
            {
              product.map((e) => {
                return (
                  <option key={e._id} value={e.id} onClick={handleClick_2}>{e.name}</option>
                )
              })
            }
          </select>
        </div>
      </div>
      <div className="comparison-container">
        <div className="comparison-container-1">
          <h3>Product ID        :- {data_1.id}</h3>
          <h3>Name Of Product   :- {data_1.name}</h3>
          <h3>Price Of Product  :- {data_1.price}</h3>
          <h3>Rating Of Product :- {data_1.rating}</h3>
        </div>
        <div className="comparison-container-2">
          <h3>Product ID        :- {data_2.id}</h3>
          <h3>Name Of Product   :- {data_2.name}</h3>
          <h3>Price Of Product  :- {data_2.price}</h3>
          <h3>Rating Of Product :- {data_2.rating}</h3>
        </div>
      </div>
    </div>
  )
}

export default Container