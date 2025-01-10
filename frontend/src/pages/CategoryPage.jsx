import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import axios from 'axios';
import RecipeListItem from '../components/RecipeListItem.jsx';
import '../styles/CategoryPage.css';

const CategoryPage = () => {
    const { categoryId } = useParams();
    const [category, setCategory] = useState(null);
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        let getCategory = async () => {
            try {
                axios
                    .get(`http://127.0.0.1:8000/api/categories/${categoryId}`)
                    .then((response) => {
                        setCategory(response.data);
                    })
                    .catch((error) => {
                        console.log('Ошибка при запросе: ', error);
                    });
            } catch (error) {
                console.log('Ошибка при получении ответа: ', error);
            }
        };
        getCategory();
    }, [categoryId]);

    useEffect(() => {
        let getRecipes = async () => {
            try {
                axios
                    .get(
                        'http://127.0.0.1:8000/api/recipes/?category=' +
                            categoryId
                    )
                    .then((response) => {
                        setRecipes(response.data);
                    })
                    .catch((error) => {
                        console.log('Ошибка при запросе: ', error);
                    });
            } catch (error) {
                console.log('Ошибка при получении ответа: ', error);
            }
        };
        getRecipes();
    }, [categoryId]);

    if (!category) {
        return <div>Загрузка...</div>;
    }

    return (
        <div>
            <h2>Рецепты категории {category.name}:</h2>
            <div className="recipe-list">
                {recipes.map((recipe, index) => (
                    <RecipeListItem
                        key={index}
                        recipe={recipe}
                        category={category}
                    />
                ))}
            </div>
        </div>
    );
};

export default CategoryPage;
