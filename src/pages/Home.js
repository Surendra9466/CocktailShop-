import React, { useEffect, useState } from "react";
import CocktailList from "../components/CocktailList";
import SearchForm from "../components/SearchForm";
export default function Home() {
  const [loading, setLoading] = useState(false);
  const [searchTerm, setSearchTerm] = useState('a');
  const [cocktails, setCocktails] = useState([]);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      const response = await fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${searchTerm}`);
      const data = await response.json();
      const { drinks } = data;
      if (drinks) {
        console.log(drinks);
        const newCocktails = drinks.map((drink) => {
          const { idDrink, strDrink, strDrinkThumb, strAlcoholic, strGlass } = drink;
          return {
            id: drink.idDrink,
            name: drink.strDrink,
            image: drink.strDrinkThumb,
            info: drink.strAlcoholic,
            glass: drink.strGlass
          }
        });
        setCocktails(newCocktails);
      } else {
        setCocktails([]);
      }
      setLoading(false);
    }
    fetchData();
  }, [searchTerm])

  return (
    <main>
      <SearchForm setSearchTerm={setSearchTerm} />
      <CocktailList loading={loading} cocktails={cocktails} />
    </main>
  )
}