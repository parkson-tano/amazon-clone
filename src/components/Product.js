import React, { useEffect, useState } from 'react'
import axios from 'axios'

function Product(props) {
   const [product, setProduct] = useState("");
  const options = {
    method: "GET",
    url: "https://amazon-products1.p.rapidapi.com/bestseller",
    params: { country: "US", categoryId: "165793011" },
    headers: {
      "X-RapidAPI-Key": "5faa52bf0bmshc514d81e102214dp174eddjsn474b0a61cce1",
      "X-RapidAPI-Host": "amazon-products1.p.rapidapi.com",
    },
  };
  
  useEffect(() => {
    axios
      .request(options)
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.error(error);
      });
  }, [])
    const products = Object.entries(product).map(([key, value]) => {
          <li key={key}>
            <p>{value.title}</p>
            <img src={value.image} />
          </li>}
    )
    console.log(product)
  return (
    <div>
      <p>RESULTS</p>
    </div>
  );
}

export default Product