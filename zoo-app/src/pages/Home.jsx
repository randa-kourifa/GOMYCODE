import axios from "axios";
import React, { useEffect, useState } from "react";
import AnimalCard from "../components/AnimalCard";
import AnimalForm from "../components/AnimalForm";
import Counter from "../components/Counter";
import classes from "./Home.module.css";
export default function Home() {
  const [isLoading, setIsLoading] = useState(false);
  const [myanimals, setmyanimals] = useState([]);

  console.log("before the component mount");
  const AddAnimal = async (e) => {
    e.preventDefault(); //form
    const CloudinaryUrl = "https://api.cloudinary.com/v1_1/down3tmkx/upload";
    const myimage = e.target.image.files[0];
    const formData = new FormData();
    formData.append("file", myimage);
    formData.append("upload_preset", "rbrquree");
    const response = await axios.post(CloudinaryUrl, formData);
    const newAnimal = {
      name: e.target.name.value,
      description: e.target.description.value,
      image: response.data.secure_url,
    };
    const responseServer = await axios.post(
      "https://zoo-api-nhvk.onrender.com/animals/add",
      newAnimal
    );
    setmyanimals(...myanimals, newAnimal);
    console.log(response.data.secure_url);
  };
  useEffect(() => {
    const getAnimals = async () => {
      const res = await axios.get("https://zoo-api-nhvk.onrender.com/animals");
      setmyanimals(res.data);
    };
    getAnimals();
  }, []);
  return (
    <div>
      <Counter />
      <h1>The Zoo</h1>
      <p>Add Your Animal</p>
      <AnimalForm AddAnimal={AddAnimal} />
      {!isLoading && (
        <div className={classes.animalsWrapper}>
          {myanimals.map((animal, i) => (
            <AnimalCard key={i} animal={animal} />
          ))}
        </div>
      )}
    </div>
  );
}
