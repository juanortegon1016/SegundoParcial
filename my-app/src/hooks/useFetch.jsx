import React from "react";
import { useState, useEffect } from "react";


export const useFetch = (url) => {
	const [data, setData] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(null);

	useEffect(() => {
		const fetchData = async () => {
			try {
				const response = await fetch(url);
				const json = await response.json();
				setData(json);
				setIsLoading(false);
			} catch (error) {
				setIsLoading(false);
				setError(error);
			}
		};
		fetchData();
	}, [url]);

	return { data, isLoading, error };
};
