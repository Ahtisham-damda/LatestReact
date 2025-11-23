import { useState, useEffect } from "react";

type Recipe = {
  id: number;
  name: string;
  image: string;
  cuisine: string;
  cookTimeMinutes: number;
  ingredients: string[];
};

export default function RecipeList() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  const fetchRecipes = async () => {
    const response = await fetch("https://dummyjson.com/recipes");
    const data = await response.json();
    setRecipes(data.recipes);
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  return (
    <div className="container mb-4">
      <h2 className="text-primary mb-3">Recipe List</h2>

      <div className="row">
        {recipes.map((recipe) => (
          <div className="col-md-4 col-sm-6 mb-4" key={recipe.id}>
            <div className="card shadow">
              <img
                src={recipe.image}
                alt={recipe.name}
                className="card-img-top"
                style={{ height: "200px", objectFit: "cover" }}
              />

              <div className="card-body">
                <h5 className="card-title">{recipe.name}</h5>

                <p className="card-text">
                  <strong>Cuisine:</strong> {recipe.cuisine}
                </p>

                <p className="card-text">
                  <strong>Cooking Time:</strong> {recipe.cookTimeMinutes} mins
                </p>

                <h6>Main Ingredients:</h6>
                <ul className="small">
                  {recipe.ingredients.slice(0, 4).map((ing, index) => (
                    <li key={index}>{ing}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
