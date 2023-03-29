import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteFromArticles } from '../features/labSlice';
import axios from 'axios';

const ArticleItem = (props) => {
	const dispatch = useDispatch();

	return (
		<div
			className="article-item"
			style={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				margin: '20px',
				border: '2px solid #ffffff',
				borderRadius: '20px',
			}}
		>
			<button
				style={{
					width: '50px',
					margin: 'auto 20px',
					marginTop: '20px',
					marginBottom: '20px',
				}}
				onClick={async () => {
					{
						await axios.delete(
							'https://learning-lab-json-server.vercel.app/articles/' +
								props.article.id
						);
					}

					dispatch(deleteFromArticles(props.article));
				}}
			>
				X
			</button>
			<div className="title-text">
				{' '}
				<h2>Title: {props.article.title}</h2>
			</div>
			<img
				alt="article-pic"
				src={props.article.imageUrl}
				style={{
					height: '250px',
					width: '250px',
					objectFit: 'cover',
					margin: 'auto',
				}}
			/>
			<div
				style={{
					border: '1px solid #ffffff',
					borderRadius: '20px',
					margin: '20px',
					padding: '10px',
					textAlign: 'left',
				}}
			>
				<div className="article-text"> Problem: {props.article.problem}</div>
				<div className="article-text"> Solution: {props.article.solution}</div>
				<div className="article-text">
					Description: {props.article.description}
				</div>
			</div>
		</div>
	);
};

export default ArticleItem;
