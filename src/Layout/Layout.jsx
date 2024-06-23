import { Outlet, Link } from "react-router-dom";
import './Layout.css';

export default function Layout(){
  return (
    <>
      <header className = "site-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Add">Add</Link>
          </li>
          <li>
            <Link to="/Delete">Delete</Link>
          </li>
          <li>
            <Link to="/Retrieve">Retrieve</Link>
          </li>
          <li>
            <Link to="/Update">Update</Link>
          </li>
        </ul>
      </nav>
      </header>

      <Outlet />
    </>
  )
};

