import React from "react";
import Cocktail from '../components/Cocktail';

export default function CocktailList({ cocktails, loading }) {
  if (loading) {
    return <h2 className="section-title">Loading...</h2>
  }

  if (cocktails.length === 0) {
    return <h2 className="section-title">No cocktails found</h2>
  }

  return <section className="section">
    <h2 className="section-title">cocktails</h2>
    <div className="cocktails-center">
      {cocktails.map((item,index)=>{
        return <Cocktail key={item.id} {...item} />
      })}
    </div>
  </section>
}
