import React, { Component } from 'react';
import './UsersList.css';
import axios from 'axios';

class UsersList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: '',
		};

		this.removeFromArray = this.RemoveFromArray.bind(this);
	}

	RemoveFromArray(e) {
		let index = e.target.value;
		let array = this.state.users;
		console.log('idx', index);
		if (index !== -1) {
			console.log(+index, 1);
			array.splice(+index, 1);
			this.setState({ users: array });
		}
		return false;
	}

	componentDidMount() {
		let saveThis = this;

		axios.get('http://ppswtest.azurewebsites.net/api/values')
			.then(function (response) {
				console.log('response', response.data)
				saveThis.setState({users: response.data});
			})
			.catch(function (error) {
				console.log(error);
			});
	}

	render() {
		let users;
		let saveThis = this;

		if (this.state.users.length > 0) {
			users = this.state.users.map(function (user, index) {
				return (
					<div key={index}
					     className={`user-item
							${user.Status === 'Assured' ? 'bg-green' : ''}
							${user.Status === 'In Progress' ? 'bg-aqua' : ''}
							${user.Status === 'Non-Complient' ? 'bg-red' : ''}
							${user.Status === 'Pending' ? 'bg-gray' : ''}`}>

						<h3>{user.Shipper}}</h3>
						<p>B.O.L.: {user.BOL}</p>
						<p>Phone: {user.Phone}</p>
						<p>Email: {user.Email}</p>
						<br/>
						<p>Driver: {user.Driver}</p>
						<p>Phone: {user.DriverPhone}</p>
						<div className="actions-list">
							<button className="edit-btn"/>
							<button onClick={saveThis.removeFromArray} value={index} className="remove-btn"/>
						</div>
					</div>

				);
			});
		}

		return (
			<div className="users-list">
				{users}
			</div>
		);

	}
}

export default UsersList;
