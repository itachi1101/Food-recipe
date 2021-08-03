import React from 'react';
import style from './recipe.module.css';
const Recipe = ({title, calories, image, ingredients}) => {
    return (
        <div className={`${style.recipe}`}>
            <h1 className={style.font}>{title.toUpperCase()}</h1>
            <ol> {
                ingredients.map(ingredient => (
                    <li>{
                        ingredient.text
                    }</li>
                ))
            } </ol>
            <p className={style.calories}>CALORIES:- <span>{calories}</span></p>
            <img className={style.image} src={image}
                alt=""></img>

        </div>
    );
}
export default Recipe;

