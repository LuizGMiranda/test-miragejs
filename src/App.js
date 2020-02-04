import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("/api/users")
      .then(response => response.json())
      .then(json => setUsers(json.users));

    fetch("/api/products")
      .then(response => response.json())
      .then(json => setProducts(json.products));
  }, []);

  return (
    <div>
      <h2>Users</h2>
      <h3>Utilizando Factory e Faker</h3>
      {users.length &&
        users.map(user => (
          <div key={user.id}>
            {" "}
            <p>
              <b>{user.name}</b>
              <br /> <small>{user.email}</small>
              <br />
              {user.cpf}
            </p>
          </div>
        ))}
      <hr />
      <h2>Products - JSON</h2>
      <h3>Utilizando JSON</h3>
      {products.length &&
        products.map(product => (
          <div key={product.id}>
            <p>
              {product.title} - {product.price}
            </p>
          </div>
        ))}
    </div>
  );
}

export default App;
