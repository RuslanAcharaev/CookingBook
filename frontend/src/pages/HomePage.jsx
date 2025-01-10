import React, { useState, useEffect } from 'react';
import axios from 'axios';
import CategoryListItem from '../components/CategoryListItem.jsx';
import '../styles/HomePage.css';

const HomePage = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories();
    }, []);

    let getCategories = async () => {
        try {
            axios
                .get('http://127.0.0.1:8000/api/categories/')
                .then((response) => {
                    setCategories(response.data);
                })
                .catch((error) => {
                    console.log('Ошибка при запросе: ', error);
                });
        } catch (error) {
            console.log('Ошибка при получении ответа: ', error);
        }
    };

    return (
        <div className="homepage-container">
            <h2>Категории рецептов</h2>
            <div className="category-list">
                {categories.map((category, index) => (
                    <CategoryListItem key={index} category={category} />
                ))}
            </div>
        </div>
    );
};

export default HomePage;
