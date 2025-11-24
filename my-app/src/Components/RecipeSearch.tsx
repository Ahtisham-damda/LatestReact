type Recipe = {
    id:number;
    name:string;
    serving:number;
    cuisine:string;
    difficulty:string;
    image:string;
}

import { useEffect, useState } from "react";

const RecipeSearch = () =>{

    const[searchTerm, setSearchTerm] = useState<string>("");
     const [recipes, setRecipes] = useState<Recipe[]>([]);
     const [error, setError] = useState<string | null>(null);



    const fetchRecipes = async () =>{
        try{
                  const apiUrl = `https://dummyjson.com/recipes/search?q=${searchTerm}`;
                  
        const response = await fetch(apiUrl);
        if(!response.ok ){
            throw new Error('Network response was not ok')
        }
        const data = await response.json();
        setRecipes(data.recipes);
        }catch(error:any){
            setError(error.message);
        }
        
    };

    useEffect(() => {
        fetchRecipes();
    },[]);

   

    if(error){
        return(
            <div className="text-center">{error}
            <h1 className="text-danger font-bold"></h1>
        </div>
        )
    }
    
    return(
        <div>
            <h1 className="fw-bold text-danger mb-4">Recipes (search)</h1>

            <div className="d-flex mb-5">
                <input type="text" className="form-control mx-2" placeholder="Search Recipes (e.g. Pizz, Chicken, Soup)..." onChange={(event)=> setSearchTerm(event.target.value)} value={searchTerm} />
                <button className="btn btn-primary" onClick={()=> fetchRecipes()} > Search </button>
            </div>

            <div className="row">
                {recipes.map((recipe) => (
                    <div className="col-md-4 mb-3" key={recipe.id}>
                        <div className="card h-100">
                            <img src={recipe.image} alt={recipe.name} className="card-img-top"/>

                            <div className="card-body">
                                <h4 className="card-title">{recipe.name}</h4>
                                <p className="card-body">{recipe.difficulty}</p>
                            </div>
                            <div className="card-footer">View Details</div>
                        </div>
                    </div>
                ))}
            </div>

        </div>
    )
}
export default RecipeSearch;