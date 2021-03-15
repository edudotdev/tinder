import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import './App.css';
import Form from './components/Form';
import Cards from './components/Cards';

function App() {
	//	const [status, setStatus] = useState(0);
	

	return (
		<Router>
			<div>
				<Switch>
					<Route path='/register'>
						<Form />
					</Route>
					<Route path='/'>
						<Cards />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
