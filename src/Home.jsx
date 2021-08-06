const Home = () => {
  const handleClick = (e) => {
    console.log("hello mamo", e);
  };
  //only e.target is available for buttons
  const handleClickAgain = (name, e) => {
    console.log("hello" + name, e.target);
  };
  return (
    <div className="home">
      <h2>Homepage</h2>
      <button onClick={handleClick}>Click</button>
      <button onClick={(e) => handleClickAgain("mamo", e)}>
        Click me again
      </button>
    </div>
  );
};

export default Home;
