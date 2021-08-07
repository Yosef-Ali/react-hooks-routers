import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Mamo Blog</h1>
      <div className="link">
        <Link to="/">Home</Link>
        <Link
          to="/create"
          style={{
            color: "#ffffff",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
            padding: "8px",
          }}
        >
          New Blog
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
