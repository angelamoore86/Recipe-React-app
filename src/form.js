import {useState} from 'react';
import { useNavigate } from 'react-router-dom';


export function AddRecipe( { handleSubmit }) {
const navigate = useNavigate();

const [recipe, setRecipe] = useState({
    name: "",
    ingredients: "",
    directions: "",
    description: "",
    image: ""
  });
  const submitRecipe = (e) => {
    e.preventDefault();
    handleSubmit(recipe);
    navigate('/');
    setRecipe({
        name: "",
        ingredients: "",
        directions: "",
        description: "",
        image: "",
    });
   
  };
    return (
        <div>
            <form onSubmit={submitRecipe}>
                <div>
                    <label>Recipe Name: </label>
                    <input type="text" value={recipe.name}
                    onChange={ (e) => setRecipe({...recipe, name: e.target.value })}></input>
                </div>
                <div>
                    <label>Ingredients: </label>
                    <textarea type="text" value={recipe.ingredients}
                    onChange={ (e) => setRecipe({...recipe, ingredients: e.target.value })}/>
                </div>
                <div>
                    <label>Directions: </label>
                    <textarea value={recipe.directions}
                    onChange={ (e) => setRecipe({...recipe, directions: e.target.value })}/>
                </div>
                <div>
                    <label>Description: </label>
                    <textarea value={recipe.description}
                    onChange={ (e) => setRecipe({...recipe, description: e.target.value })}/>
                </div>
                <div>
                    <label>Select Image File: </label>
                    <input type="file" value={recipe.image}
                    onChange={ (e) => setRecipe({...recipe, image: e.target.value })}></input>
                </div>
                <button type='submit'>Add Recipe</button>
            </form>
        </div>
    )
}
export default AddRecipe;