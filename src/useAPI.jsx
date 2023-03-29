import { useState, useEffect } from 'react';
import axios from 'axios';

const useAPI = (endpoint) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		getData();
	}, []);

	const getData = async () => {
		const response = await axios.get(endpoint);
		setData(response.data);
		console.log('get data:', response.data);
	};
	return data;
};

export default useAPI;
