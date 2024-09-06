import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CreateUser = () => {
	const [firstName, setFirstName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');

	const [loadder, setLoadder] = useState(false);

	const navigate = useNavigate();

	async function createUser(e) {
		e.preventDefault();
		console.log('hello');
		setLoadder(true);
		try {
			const res = await fetch('https://dummyjson.com/users/add', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					firstName,
					middleName,
					lastName,
					age,
					email,
				}),
			});
			const createdUser = await res.json();
			console.log(createdUser);
		} catch (err) {
			console.log(err);
		}
		setLoadder(false);
		alert(
			'User is created succesfully with this details',
			firstName,
			lastName,
			middleName,
			age,
			email
		);
		navigate('/');
	}

	return (
		<>
			<div className='px-3 md:px-16'>
				<h2 className='text-2xl my-5'>Create User</h2>
				<form onSubmit={createUser}>
					<label htmlFor='firstName'>First Name</label>
					<input
						id='firstName'
						type='text'
						name='firstName'
						value={firstName}
						onChange={(e) => setFirstName(e.target.value)}
						className='block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-4'
					/>
					<label htmlFor='middleName'>Middle Name</label>
					<input
						id='middleName'
						name='middleName'
						type='text'
						value={middleName}
						onChange={(e) => setMiddleName(e.target.value)}
						className='block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-4'
					/>
					<label htmlFor='lastName'>Last Name</label>
					<input
						id='lastName'
						type='text'
						name='lastName'
						value={lastName}
						onChange={(e) => setLastName(e.target.value)}
						className='block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-4'
					/>
					<label htmlFor='age'>Age</label>
					<input
						id='age'
						type='text'
						name='age'
						value={age}
						onChange={(e) => setAge(e.target.value)}
						className='block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-4'
					/>
					<label htmlFor='email'>Email</label>
					<input
						id='email'
						type='text'
						name='email'
						value={email}
						onChange={(e) => setEmail(e.target.value)}
						className='block rounded-md border-0 py-1.5 pl-7 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 mt-2 mb-4'
					/>
					<button
						type='submit'
						className='bg-sky-600 text-white px-5 py-1.5 rounded-md shadow-sm'
						disabled={loadder ? true : false}
					>
						{loadder ? 'Submitiing...' : 'Submit'}
					</button>
				</form>
			</div>
		</>
	);
};

export default CreateUser;
