import React from 'react';
import AllUsers from './pages/AllUsers';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateUser from './pages/CreateUser';
import EditUser from './pages/EditUser';

const App = () => {
	return (
		<div>
			<BrowserRouter>
				<Routes>
					<Route path='/' element={<AllUsers />} />
					<Route path='/create-user' element={<CreateUser />} />
					<Route path='/edit-user/:id' element={<EditUser />} />
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default App;
