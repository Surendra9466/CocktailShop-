import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";

export default function SingleCocktail() {
  const [loading, setLoading] = useState(false);
  const [cocktail, setCocktail] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`);
      const data = await response.json();
      console.log(data);
      if (data.drinks) {
        const { strDrink: name, strDrinkThumb: image, strAlcoholic: info,
          strCategory: category, strGlass: glass, strInstructions: instructions,
          strIngredient1, strIngredient2,
          strIngredient3, strIngredient4, strIngredient5 } = data.drinks[0];

        const ingredients = [strIngredient1, strIngredient2, strIngredient3, strIngredient4, strIngredient5];

        const newCocktail = { name, image, category, instructions, glass, ingredients, info };
        setCocktail(newCocktail);

      } else {
        setCocktail(null);
      }
      setLoading(false);
    }
    fetchData();
  }, [id]);

  if (loading) {
    return <h2 className="section-title">Loading...</h2>
  }

  if (!cocktail) {
    return <h2 className="section-title">
      No cocktail found
    </h2>
  }
  else {
    const { name, image, category, instructions, glass, ingredients, info } = cocktail;
    return (
      <section className="section cocktail-section">
        <Link to="/" className="btn btn-primary">Home</Link>
        <h2 className="section-title">{name}</h2>
        <div className="drink">
          <img src={image} alt={name} />
          <div className="drink-info">
            <p>name : {name}</p>
            <p>category : {category}</p>
            <p>info: {info}</p>
            <p>glass: {glass}</p>
            <p>instructions: {instructions}</p>
            <p>
              ingredients : {
                ingredients.map((item, index) => {
                  return item ? <span key={index}>{item}</span> : null;
                })
              }
            </p>
          </div>
        </div>
      </section>
    )
  }
}
