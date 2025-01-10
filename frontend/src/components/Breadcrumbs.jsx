import { useState, useEffect } from 'react';
import axios from 'axios';
import { Link, useLocation, useMatch } from 'react-router';
import '../styles/Breadcrumbs.css';

const Breadcrumbs = () => {
    const location = useLocation();
    const categoryMatch = useMatch({
        path: '/category/:categoryId',
        end: false,
    });
    const recipeMatch = useMatch({
        path: '/category/:categoryId/recipes/:recipeId',
        end: true,
    });
    const pathnames = location.pathname.split('/').filter((x) => x);

    const [categoryName, setCategoryName] = useState('');
    const [recipeName, setRecipeName] = useState('');

    useEffect(() => {
        if (categoryMatch) {
            axios
                .get(
                    `http://127.0.0.1:8000/api/categories/${categoryMatch.params.categoryId}`
                )
                .then((response) => {
                    setCategoryName(response.data.name);
                })
                .catch((err) =>
                    console.error('Ошибка загрузки категории:', err)
                );
        }

        if (recipeMatch) {
            axios
                .get(
                    `http://127.0.0.1:8000/api/recipes/${recipeMatch.params.recipeId}`
                )
                .then((response) => {
                    setRecipeName(response.data.title);
                })
                .catch((err) => console.error('Ошибка загрузки рецепта:', err));
        }
    }, [categoryMatch, recipeMatch]);

    return (
        <nav>
            <div className="breadcrumbs-container">
                <div className="breadcrumbs-item">
                    <Link to="/">Главная страница</Link>{' '}
                    {pathnames.length > 0 && ' > '}
                </div>
                {categoryMatch && (
                    <div className="breadcrumbs-item">
                        <Link
                            to={`/category/${categoryMatch.params.categoryId}`}
                        >
                            {categoryName}
                        </Link>
                        {recipeMatch && ' > '}
                    </div>
                )}
                {recipeMatch && (
                    <div className="breadcrumbs-item">{recipeName}</div>
                )}
            </div>
        </nav>
    );
};

export default Breadcrumbs;
