import React from 'react';
import { Link } from 'react-router';
import '../styles/RecipeListItem.css';
import PropTypes from 'prop-types';

const RecipeListItem = ({ category, recipe }) => {
    return (
        <Link to={`/category/${category.id}/recipes/${recipe.id}`}>
            <div className="recipe-card">
                <h2>{recipe.title}</h2>
                <p>{recipe.description}</p>
            </div>
        </Link>
    );
};

RecipeListItem.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.number,
    }),
    recipe: PropTypes.shape({
        id: PropTypes.number,
        title: PropTypes.string,
        description: PropTypes.string,
    }),
};

export default RecipeListItem;
