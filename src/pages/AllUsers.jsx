import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const AllUsers = () => {
	const [users, setUsers] = useState([]);
	const [loadder, setloadder] = useState(false);

	async function deleteUser(index) {
		try {
			/* deleting user */
			const res = await fetch(`https://dummyjson.com/users/${index}`, {
				method: 'DELETE',
			});
			const deletedUser = await res.json();
			console.log(deletedUser);
		} catch (err) {
			console.log(err);
		}
	}

	useEffect(() => {
		const fetchAllUsers = async () => {
			setloadder(true);
			const res = await fetch('https://dummyjson.com/users');
			const data = await res.json();
			setUsers(data.users);
			setloadder(false);
		};
		fetchAllUsers();
	}, []);

	//if loadder is tru then we show spinner
	if (loadder) {
		return <div>Loadding...</div>;
	}

	return (
		<div className='px-3 md:px-16'>
			<h1 className='text-center text-2xl my-5'>User Management System</h1>
			<div className='text-end'>
				<Link to='/create-user'>
					<button className='bg-green-500 rounded-md px-4 py-1 mr-2 mb-2 text-white'>
						Add New User
					</button>
				</Link>
			</div>
			<table className='w-full border-collapse border-[1px] border-slate-500 py-3 mb-10'>
				<thead>
					<tr>
						<th className='border-collapse border-[1px] border-slate-500 py-2 px-1 bg-gray-50'>
							S. No.
						</th>
						<th className='border-collapse border-[1px] border-slate-500 py-2 px-1 bg-gray-50'>
							Name
						</th>
						<th className='border-collapse border-[1px] border-slate-500 py-2 px-1 bg-gray-50'>
							Age
						</th>
						<th className='border-collapse border-[1px] border-slate-500 py-2 px-1 bg-gray-50'>
							Email
						</th>
						<th className='border-collapse border-[1px] border-slate-500 py-2 px-1 bg-gray-50'>
							Modify
						</th>
						<th className='border-collapse border-[1px] border-slate-500 py-2 px-1 bg-gray-50'>
							Delete
						</th>
					</tr>
				</thead>
				<tbody>
					{users?.map((user) => (
						<tr key={user.id}>
							<td className='border-collapse border-[1px] border-slate-500 py-2 px-1'>
								{user.id}
							</td>
							<td className='border-collapse border-[1px] border-slate-500 py-2 px-1'>
								{(user?.firstName === 'undefined'
									? ''
									: user.firstName) +
									' ' +
									(user?.maidenName === 'undefined'
										? ''
										: user.maidenName) +
									' ' +
									(user?.lastName === 'undefined'
										? ''
										: user.lastName)}
							</td>
							<td className='border-collapse border-[1px] border-slate-500 py-2 px-1'>
								{user.age}
							</td>
							<td className='border-collapse border-[1px] border-slate-500 py-2 px-1'>
								{user.email}
							</td>
							<td className='border-collapse border-[1px] border-slate-500 py-2 px-5 text-white text-center'>
								<Link to={`/edit-user/${user.id}`}>
									<button className='bg-sky-600 rounded-md w-full px-3 py-1'>
										Edit
									</button>
								</Link>
							</td>
							<td className='border-collapse border-[1px] border-slate-500 py-2 px-5 text-white text-center'>
								<button
									onClick={() => deleteUser(user.id)}
									className='bg-red-500 rounded-md w-full px-3 py-1'
								>
									Delete
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
		</div>
	);
};

export default AllUsers;
