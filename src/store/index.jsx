import { configureStore } from '@reduxjs/toolkit';
import labReducer from '../features/labSlice';

export default configureStore({
	reducer: {
		articles: labReducer,
	},
});
