const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>The Mamo Blog</h1>
      <div className="link">
        <a href="/">Home</a>
        <a
          href="create"
          style={{
            color: "whit",
            backgroundColor: "#f1356d",
            borderRadius: "8px",
          }}
        >
          New Blog
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
