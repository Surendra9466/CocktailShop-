import React, { useRef } from "react";

export default function SearchForm({ setSearchTerm }) {
  const searchValue = useRef("");
  const searchCocktail = () => { 
    setSearchTerm(searchValue.current.value);
  }
  // const searchCocktail = (e) => { }

  return <section className="section">
    <h2 className="section-title">search cocktails</h2>
    <form className="form search-form" >
      <div className="form-control">
        <label htmlFor="name">
          search your favorite cocktail
        </label>
        <input type="text" name="name" id="name" onChange={searchCocktail} ref={searchValue}/>
      </div>
    </form>
  </section>;
}
