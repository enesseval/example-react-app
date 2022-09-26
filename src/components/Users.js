import axios from "axios";
import { useEffect, useState } from "react";
import { Route, Routes, NavLink, Outlet } from "react-router-dom";

import User from "./User";

function Users() {
  const [loading, setLoading] = useState(true);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios("https://jsonplaceholder.typicode.com/users")
      .then((res) => setUsers(res.data))
      .finally(() => setLoading(false));
  }, []);

  return (
    <div>
      <nav>
        <h2>Users</h2>
        {loading && <div>Loading...</div>}
        <ul>
          {users.map((user) => (
            <NavLink
              style={({ isActive }) => {
                return {
                  display: "block",
                  color: isActive ? "red" : "",
                };
              }}
              key={user.id}
              to={`/users/${user.id}`}
            >
              {user.name}
            </NavLink>
          ))}
        </ul>
      </nav>
      <Outlet />

      <Routes>
        <Route path="/:id" element={<User />} />
      </Routes>
    </div>
  );
}

export default Users;
