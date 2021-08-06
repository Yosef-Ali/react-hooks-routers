import { useState } from "react";

const Home = () => {
  const [name, setName] = useState("mamo");
  const [age, setAge] = useState(37);

  const handleClick = (e) => {
    setName("Lili");
    setAge(30);
  };

  return (
    <div className="home">
      <h2>Homepage</h2>
      <p>
        {name} is {age} years old
      </p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default Home;
