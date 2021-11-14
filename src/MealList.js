// import React from "react";
// import Meal from "./Meal";

// export default function MealList() {
//   return <div>MealList</div>;
// }
import React from "react";
import Meal from "./Meal";
export default function MealList({ mealData }) {
  const nutrients = mealData.nutrients;
  console.log(mealData);
  return (
    <main>
      <section className="nutrients">
        <h1> Macros</h1>
        <ul>
          <li>Calories:{nutrients.calories}</li>
          <li>Carbohydrates:{nutrients.carbohydrates}</li>
          <li>Fat:{nutrients.fat}</li>
          <li>Protein:{nutrients.protein}</li>
        </ul>
      </section>
      <section className="meals">
        {mealData.meals.map((meal) => {
          return <Meal key={meal.id} meal={meal} />;
        })}
      </section>
    </main>
  );

  // return <div> MealList</div>;
}
