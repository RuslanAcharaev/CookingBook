import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';

const RecipePage = () => {
    const { recipeId } = useParams();
    const [recipe, setRecipe] = useState([]);

    useEffect(() => {
        let getRecipe = async () => {
            try {
                axios
                    .get(`http://127.0.0.1:8000/api/recipes/${recipeId}`)
                    .then((response) => {
                        setRecipe(response.data);
                    })
                    .catch((error) => {
                        console.log('Ошибка при запросе: ', error);
                    });
            } catch (error) {
                console.log('Ошибка при получении ответа: ', error);
            }
        };
        getRecipe();
    }, [recipeId]);

    return (
        <div>
            <h2>{recipe.title}</h2>
            <p>{recipe.description}</p>
            <p>{recipe.text}</p>
        </div>
    );
};

export default RecipePage;
