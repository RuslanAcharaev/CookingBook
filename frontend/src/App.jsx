import { BrowserRouter as Router, Routes, Route } from 'react-router';
import Header from './components/Header.jsx';
import Breadcrumbs from './components/Breadcrumbs.jsx';
import HomePage from './pages/HomePage.jsx';
import CategoryPage from './pages/CategoryPage.jsx';
import RecipePage from './pages/RecipePage.jsx';
import './styles/App.css';

function App() {
    return (
        <Router>
            <div className="app-container">
                <Header />
                <Breadcrumbs />
                <Routes>
                    <Route path="/" element={<HomePage />} />
                    <Route
                        path="/category/:categoryId"
                        element={<CategoryPage />}
                    />
                    <Route
                        path="/category/:categoryId/recipes/:recipeId"
                        element={<RecipePage />}
                    />
                </Routes>
            </div>
        </Router>
    );
}

export default App;
