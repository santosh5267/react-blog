
import ArticlesList from '../components/ArticlesList'
import articles from './article-content';

const ArticleListPage = () => {

    return (
        //react fragment
        <>
            <h1>Articles</h1>
            <ArticlesList articles={articles} />

        </>
    );
}
export default ArticleListPage;