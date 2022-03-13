import HomePage from './components/HomePage';
import CategoryPage from './components/CategoryPage'
import AuthorPage from './components/AuthorPage';
import {Routes, Route} from 'react-router-dom';
import ContentPage from './components/ContentPage';

function App() {
  return (
    <div>
    <Routes>
      <Route path="/post/:postId" element={<ContentPage />} />
      <Route path="/category/:categoryId" element={<CategoryPage />} />
      <Route path="/author/:authorId" element={<AuthorPage />} />
      <Route path="/" element={<HomePage />} />
    </Routes>
    </div>
  );
}

export default App;
