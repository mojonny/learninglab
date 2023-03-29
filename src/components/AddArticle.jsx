import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addToArticles } from '../features/labSlice';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';

const AddArticle = () => {
	const dispatch = useDispatch();
	const [article, setArticle] = useState({
		title: '',
		problem: '',
		solution: '',
		description: '',
		imageUrl: '',
	});

	const onChangeHandler = (e) => {
		setArticle({
			...article,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = async (event) => {
		const newArticle = {
			id: uuidv4(),
			title: article.title,
			problem: article.problem,
			solution: article.solution,
			description: article.description,
			imageUrl: article.imageUrl,
		};
		event.preventDefault();

		await axios.post(
			'https://learning-lab-json-server.vercel.app/articles/',
			newArticle
		);
		dispatch(addToArticles(newArticle));
	};

	return (
		<div>
			<div
				className="form-container"
				style={{
					display: 'flex',
					flexDirection: 'column',
					textAlign: 'left',
					gap: '0.5rem',
				}}
			>
				Title:
				<input
					type="text"
					name="title"
					placeholder="Add Title"
					autoComplete="off"
					value={article.title}
					onChange={onChangeHandler}
				/>
				<label>Image URL:</label>
				<input
					type="text"
					name="imageUrl"
					placeholder="Add Image URL"
					autoComplete="off"
					value={article.imageUrl}
					onChange={onChangeHandler}
				/>
				<label>Problem:</label>
				<input
					type="text"
					name="problem"
					placeholder="Add Problem"
					autoComplete="off"
					value={article.problem}
					onChange={onChangeHandler}
				/>
				<label>Solution:</label>
				<input
					type="text"
					name="solution"
					placeholder="Add Solution"
					autoComplete="off"
					value={article.solution}
					onChange={onChangeHandler}
				/>
				<label>Description:</label>
				<textarea
					type="text"
					name="description"
					placeholder="Add Description"
					autoComplete="off"
					value={article.description}
					onChange={onChangeHandler}
				/>
				<button type="submit" onClick={handleSubmit}>
					Add Article
				</button>
			</div>
		</div>
	);
};

export default AddArticle;
