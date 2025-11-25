import { useEffect, useState } from "react";

type Recipe = {
  id: number;
  name: string;
  image: string;
  difficulty: string;
  cuisine: string;
};

const RecipeList1 = () => {
  const [recipe, setRecipe] = useState<Recipe[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRecipes = async () => {
    try {
      const response = await fetch(`https://dummyjson.com/recipes`);
      if (!response.ok) {
        throw new Error("Failed to fetch recipes");
      }
      const data = await response.json();
      setRecipe(data.recipes);
      setLoading(false);
    } catch (error: any) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRecipes();
  }, []);

  if (loading == true) {
    return (
      <div className="text-center container">
        <h1 className="text-danger">Loading recipes...</h1>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container text-center">
        <h1 className="text-danger">Error : {error}</h1>
      </div>
    );
  }

  return (
    <div>
      <h1 className="text-danger fw-bold mb-4">Recipes List</h1>
      {/* <button className="btn btn-success mb-4" onClick={fetchRecipes}>
        View Recipes
      </button> */}
      <div className="row">
        {recipe.map((reci) => (
          <div className="col-md-4 mb-2" key={reci.id}>
            <div className="card h-100">
              <img src={reci.image} alt={reci.name} className="card-img-top" />
              <div className="card-body">
                <h4 className="card-title">{reci.name}</h4>
              </div>
              <div className="card-footer">
                {reci.cuisine}
                <p className="card-footer">{reci.difficulty}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default RecipeList1;
