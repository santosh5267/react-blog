 import './App.css';
 import { BrowserRouter, Route, Routes } from 'react-router-dom';
 import NavBar from './NavBar';
import homePage from './pages/homepage';
import About from './pages/About';
import ArticleListPage from './pages/ArticleListPage'
import ArticlePage from './pages/ArtilcePage';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <NavBar />
       <div id="page-body">
        <Routes>
          <Route path="/" element= {<homePage />} />
          <Route path="/about" element= {<About />} />
          <Route path="/articles" element= {<ArticleListPage />} />
          <Route path="/articles/:articleId" element= {<ArticlePage />} />

          
        </Routes>
        
        </div>

    </div>
    </BrowserRouter>
  );
}

export default App;
