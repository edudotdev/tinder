import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Form from './components/Form';
import Cards from './components/Cards';

function App() {
	//	const [status, setStatus] = useState(0);
	const [peoples, setPeoples] = useState([]);
	const [category, setCategory] = useState('');
	const [search, setSearch] = useState('');

	const apiConnection = (url = `${process.env.REACT_APP_API_URL}/people`) => {
		fetch(url)
			.then((response) => response.json())
			.then((data) => setPeoples(data.data))
			.catch((e) => console.log(e));
	};

	useEffect(() => {
		apiConnection();
	}, []);

	useEffect(() => {
		fetch(`${process.env.REACT_APP_API_URL}/people?gender=${category}`)
			.then((response) => response.json())
			.then((data) => setPeoples(data.data))
			.catch((error) => console.log(error));
	}, [category]);

	const refresh = (id) => {
		setPeoples((peoples) => peoples.filter((people) => people.idPeople !== id));
	};

	return (
		<Router>
			<div>
				<Switch>
					<Route path='/register'>
						<Form />
					</Route>
					<Route path='/'>
						<Cards
							peoples={peoples}
							setPeoples={setPeoples}
							setCategory={setCategory}
							category={category}
							setSearch={setSearch}
							search={search}
							refresh={refresh}
						/>
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
