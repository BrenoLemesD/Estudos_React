import { useState, useEffect } from "react";
import "./App.css";

// 4 - custom hook
import { useFetch } from "./hooks/useFetch";

const url = "http://localhost:3000/products";

function App() {
  const [products, setProducts] = useState([]);

  // 4 - custom
  const { data: items } = useFetch;

  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  // 1- Fetching data
  //useEffect(() => {
  //async function fetchData() {
  //const res = await fetch(url);
  // const data = await res.json();
  // setProducts(data); // Updating state with fetched data
  //  }

  //  fetchData(); // Calling the function to fetch data
  //}, []);

  // 2 - Add products
  const handleSubmit = async (e) => {
    e.preventDefault(); // Preventing default form submission

    const product = {
      name,
      price,
    };

    const res = await fetch(url, {
      // Fixed typo here
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(product),
    });

    const addedProduct = await res.json();
    // 3 - Dynamic loading
    setProducts((prevProducts) => [...prevProducts, addedProduct]);
    setName("");
    setPrice("");
  };

  return (
    <>
      <div className="app">
        <h1>Lista de produtos: </h1>
        <ul>
          {items &&
            items.map((product) => (
              <li key={product.id}>
                {product.name} - R${product.price}
              </li>
            ))}
        </ul>
        <div className="add-product">
          <form onSubmit={handleSubmit}>
            <label>
              Nome:
              <input
                type="text"
                value={name}
                name="name"
                onChange={(e) => setName(e.target.value)}
              />
              Preço:
              <input
                type="number"
                value={price}
                name="price"
                onChange={(e) => setPrice(e.target.value)}
              />
            </label>
            <input type="submit" value="criar produto" />
          </form>
        </div>
      </div>
    </>
  );
}

export default App;
