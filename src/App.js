import React, { useState } from "react"; // import state management
import MealList from "./MealList";

function App() {
  //set two components mealData and setMealData
  const [mealData, setMealData] = useState(null);
  const [calories, setCalories] = useState(2000);

  function getMealData() {
    fetch(
      `https://api.spoonacular.com/mealplanner/generate?apiKey=234df877100a4ae0b183c067f0be6ecd&timeFrame=day&targetCalories=${calories}` //passing api calories from user input
    )
      .then((response) => response.json())
      .then((data) => {
        setMealData(data);
      })
      .catch(() => {
        console.log("error");
      });
  }
  function handlechange(e) {
    setCalories(e.target.value);
  }

  return (
    <div className="App">
      <section className="controls">
        <input
          type="number"
          placeholder="calories (eg. 2000)"
          onChange={handlechange}
        />
        <button onClick={getMealData}>Get Daily Meal</button>
        {mealData && <MealList mealData={mealData} />}
      </section>

      <p> Made by @ShrutiRaj </p>
    </div>
  );
}

export default App;
