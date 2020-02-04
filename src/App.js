import React, { useState, useEffect } from "react";

function App() {
  const [users, setUsers] = useState([])

  useEffect(() => {
    fetch("/api/users")
      .then(response => response.json())
      .then(json => setUsers(json.users))
  }, [])

  return (
    <div>
      <h1>Users</h1>
      {
        users.length && 
      users.map(user => <div key={user.id}> <p><b>{user.name}</b><br/> <small>{user.email}</small><br/>{user.cpf}</p></div>)
      }
    </div>
  );
}

export default App;
