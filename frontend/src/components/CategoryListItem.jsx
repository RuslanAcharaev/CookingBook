import React from 'react';
import { Link } from 'react-router';
import '../styles/CategoryListItem.css';
import PropTypes from 'prop-types';

const CategoryListItem = ({ category }) => {
    return (
        <Link to={`/category/${category.id}`}>
            <div
                className="category-card"
                style={{ backgroundImage: `url(${category.image})` }}
            >
                <h2>{category.name}</h2>
            </div>
        </Link>
    );
};

CategoryListItem.propTypes = {
    category: PropTypes.shape({
        id: PropTypes.number,
        name: PropTypes.string,
        image: PropTypes.string,
    }),
};

export default CategoryListItem;
