import AddArticle from './components/AddArticle';
import ArticleList from './components/ArticleList';

import './App.css';

export default function App() {
	return (
		<div className="App">
			<h1>Learning Lab</h1>
			<hr />
			<AddArticle />
			<hr />
			<ArticleList />
		</div>
	);
}
