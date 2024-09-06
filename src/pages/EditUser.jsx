import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const CreateUser = () => {
	const { id } = useParams();

	const [firstName, setFirstName] = useState('');
	const [middleName, setMiddleName] = useState('');
	const [lastName, setLastName] = useState('');
	const [age, setAge] = useState('');
	const [email, setEmail] = useState('');

	const [loadder, setLoadder] = useState(false);

	const navigate = useNavigate();

	async function editUser(e) {
		e.preventDefault();
		console.log('hello');
		setLoadder(true);
		try {
			/* updating lastName of user with id 2 */
			const res = await fetch(`https://dummyjson.com/users/${id}`, {
				method: 'PUT' /* or PATCH */,
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({
					firstName,
					lastName,
					middleName,
					age,
					email,
				}),
			});
			const editedUser = await res.json();
			console.log(editedUser);
		} catch (err) {
			console.log(err);
		}
		setLoadder(false);
		alert(
			'User Edited successfully',
			firstName,
			lastName,
			middleName,
			age,
			email
		);
		navigate('/');
	}

	useEffect(() => {
		async function getUserDetails() {
			try {
				const res = await fetch(`https://dummyjson.com/users/${id}`);
				const data = await res.json();
				setFirstName(data.firstName);
				setLastName(data.lastName);
				setMiddleName(data.middleName);
				setAge(data.age);
				setEmail(data.email);
			} catch (err) {
				console.log(err);
			}
		}
		getUserDetails();
	}, []);

	return (
		<>
			<div className='px-3 md:px-16'>
				<h2 className='text-2xl my-5'>Edit User</h2>
				<form onSubmit={editUser}>
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
