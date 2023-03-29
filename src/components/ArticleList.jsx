import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import ArticleItem from './ArticleItem';
import useAPI from '../useAPI';
import { getArticles } from '../features/labSlice';

const ArticleList = () => {
	const dispatch = useDispatch();
	const { articles } = useSelector((state) => state.articles);

	const endpoint = 'http://localhost:3000/articles/';
	const savedArticles = useAPI(endpoint);

	useEffect(() => {
		{
			dispatch(getArticles(savedArticles));
			console.log('saved articles:', savedArticles);
		}
	}, [savedArticles]);

	return (
		<div className="article-list">
			{articles.map((item) => (
				<ArticleItem key={item.id} article={item} />
			))}
		</div>
	);
};

export default ArticleList;
