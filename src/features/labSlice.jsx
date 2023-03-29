import { createSlice } from '@reduxjs/toolkit';

export const labSlice = createSlice({
	name: 'article',
	initialState: {
		articles: [],
	},
	reducers: {
		getArticles: (state, action) => {
			state.articles = action.payload;
		},
		addToArticles: (state, action) => {
			const addedArticles = {
				id: action.payload.id,
				title: action.payload.title,
				problem: action.payload.problem,
				solution: action.payload.solution,
				description: action.payload.description,
				imageUrl: action.payload.imageUrl,
			};
			state.articles.push(addedArticles);
		},
		deleteFromArticles: (state, action) => {
			state.articles = state.articles.filter(
				(article) => article.id !== action.payload.id
			);
		},
	},
});

export const { addToArticles, deleteFromArticles, getArticles } =
	labSlice.actions;

export default labSlice.reducer;
