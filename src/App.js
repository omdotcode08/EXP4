import React, { useState, useEffect } from "react";

function App() {
  const [dogImage, setDogImage] = useState("");

  const fetchDog = () => {
    fetch("https://dog.ceo/api/breeds/image/random")
      .then((response) => response.json())
      .then((data) => setDogImage(data.message))
      .catch((error) => console.error("Error fetching dog image:", error));
  };

  useEffect(() => {
    fetchDog(); // Fetch a dog image on first load
  }, []);

  return (
    <div style={{ textAlign: "center", marginTop: "20px" }}>
      <h2>Random Dog Image 🐶</h2>
      {dogImage && <img src={dogImage} alt="Random Dog" width="300" />}
      <br />
      <button onClick={fetchDog} style={{ marginTop: "10px", padding: "10px" }}>
        Get Another Dog 🐕
      </button>
    </div>
  );
}

export default App;
