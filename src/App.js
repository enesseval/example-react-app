import {
  BrowserRouter as Router,
  Routes,
  Route,
  NavLink,
} from "react-router-dom";
import "./App.css";
import Users from "./components/Users";
import Home from "./components/Home";
import About from "./components/About";
import Error404 from "./components/Error404";

const active = "active";

function App() {
  return (
    <Router>
      <div>
        <h2>Example App</h2>
        <nav>
          <ul>
            <li>
              <NavLink
                className={({ isActive }) => (isActive ? active : undefined)}
                to="/"
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/users">Users</NavLink>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/users/*" element={<Users />} />
          <Route path="*" element={<Error404 />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
