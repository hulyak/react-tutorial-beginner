const FoodRecipe = () => {
	const [ search, setSearch ] = useState('');
	const [ query, setQuery ] = useState('');
	const [ isLoading, setIsLoading ] = useState(false);

	const [ results, setResults ] = useState([]);

	const APP_ID = '563ef9b6';
	const APP_KEY = 'a6adea137d5513370559c5fc6f3f3a91';

	const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`;

	useEffect(
		() => {
			async function fetchData() {
				try {
					setIsLoading(true);
					const response = await fetch(url);
					const json = await response.json();
					console.log({ json });
					setResults(
						json.data.hits.map((recipe) => {
							return recipe.label;
						})
					);
					setResults(query);
				} catch (error) {
					console.log(error);
				}
			}
			// console.log({ query });
			// don't run when page loads
			if (query !== '') {
				fetchData();
			}
		},
		[ query ]
	);

	function onSubmit(e) {
		e.preventDefault();
		// console.log(search);
		// query the search term
		setQuery(search);
	}
	return (
		<div>
			<h1>Food Recipe App </h1>
			<form onSubmit={onSubmit}>
				<input
					value={search}
					onChange={(e) => setSearch(e.target.value)}
					type="text"
					placeholder="Search for recipes"
				/>
				<button type="submit" className="btn">
					Search
				</button>
			</form>
			<br />
			{isLoading ? <h1>Give me recipes... </h1> : results.map((item) => <h3 key={item.uri}>{item}</h3>)}
		</div>
	);
};

export default FoodRecipe;

// https://api.edamam.com/search?q=chicken&app_id=563ef9b6&app_key=a6adea137d5513370559c5fc6f3f3a91
