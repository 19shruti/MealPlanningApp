import React, { useState, useEffect } from "react";
export default function Meal({ meal }) {
  const [imageURL, setImageURL] = useState("");
  useEffect(
    () => {
      fetch(
        `https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=234df877100a4ae0b183c067f0be6ecd&includeNutrition=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setImageURL(data.image);
        })
        .catch(() => {
          console.log("error");
        });
    },
    [meal.id] //tell useeffect to triger anytime receipy changes
  );
  return (
    <article>
      <h1>{meal.title}</h1>
      <img src={imageURL} alt="receipt" />
      <ul>
        <li>Preparation time:{meal.readyInMinutes}minutes</li>
        <li>Number of serving:{meal.servings}</li>
      </ul>
      <a href={meal.sourceUrl}>Go to Recipe</a>
    </article>
  );
}
