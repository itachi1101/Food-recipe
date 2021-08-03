import React, { useEffect, useState } from "react";
import Recipe from './recipe';
import './App.css';

const App = () => {
  const AppId = "bbc2d13a";
  const ApiKey = "8ea2cd007dcb1824510fe4962f869b5b";
  const [recipes, setRecipies] = useState([]);
  const [search, setSearch] = useState('');
  const [query, setQuery] = useState('mango');
  useEffect(() => {
    const getRecipies = async () => {

      const response = await fetch(`https://api.edamam.com/search?q=${query}&app_id=${AppId}&app_key=${ApiKey}`);
      const data = await response.json();
      // console.log(data);
      setRecipies(data.hits);
    };
    getRecipies();
  }, [query]);


  const updateSearch = e => {
    setSearch(e.target.value);
  }
  const getSearch = e => {
    e.preventDefault();
    setQuery(search);
    setSearch('');
  }
  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form" >
        <input className="search-bar" type="text" value={search} onChange={updateSearch} />
        <button className="search-button" type="submit">Search</button>
      </form>
      <div className="recipies">
      {recipes.map(recipe => (
        <Recipe key={recipe.recipe.url} title={recipe.recipe.label} calories={recipe.recipe.calories} image={recipe.recipe.image} ingredients={recipe.recipe.ingredients}/>
      ))}
      </div>
    </div>
  );
}

export default App;
