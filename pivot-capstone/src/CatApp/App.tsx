import React, { useState } from "react";
import "./App.css";
import Lottie from "lottie-react";
import CatLottie from "../assets/catImage.json";

export default function App() {
  const [isLoading, setIsLoading] = useState(false);
  const [catImage, setCatImage] = useState(null);
  const [whatCatSays, setWhatCatSays] = useState("");
  const [enterSite, setEnterSite] = useState(false);

  const fetchData = async () => {
    setIsLoading(true);
    try {
      const response = await fetch("https://cataas.com/cat?json=true");
      if (!response.ok) {
        throw new Error("Oops, Something went wrong");
      }
      const data = await response.json();
      
      setCatImage(data.url);
    } catch (error) {
      alert(error.message);
    }
    setIsLoading(false);
  };

  const enterHandler = () => {
    setEnterSite(true);
  };

  if (!enterSite) {
    return (
      <div>
        <h2>Welcome to my Cat app</h2>
        <Lottie animationData={CatLottie} loop={true} />
        <h3>Random cat fact:</h3>
        <button onClick={enterHandler}>Enter Site</button>
      </div>
    );
  }

  return (
    <div>
      <h1>Cat App</h1>
      <p>Press the button to get a cat!!</p>
      <button onClick={fetchData}>
        {isLoading ? "Loading..." : "Meow"}
      </button>

      <input
        type="text"
        value={whatCatSays}
        onChange={(e) => setWhatCatSays(e.target.value)}
        placeholder="What does the cat say?"
      />

      {catImage && (
        <img
          src={catImage}
          alt="A random cat"
          style={{ width: "300px", marginTop: "20px" }}
        />
      )}
    </div>
  );
}

