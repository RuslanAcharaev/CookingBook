import React from 'react';
import '../styles/Header.css';
import Logo from '../assets/cooking.svg?react';

const Header = () => {
    return (
        <div className="header-container">
            <Logo className="header-icon" alt="Cooking Book" />
            <h1>Книга рецептов</h1>
        </div>
    );
};

export default Header;
