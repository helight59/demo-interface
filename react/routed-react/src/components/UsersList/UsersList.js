import React, { Component } from 'react';
import './UsersList.css';

class UsersList extends Component {
	constructor(props) {
		super(props);

		this.state = {
			users: this.props.users
		};



		this.removeFromArray = this.RemoveFromArray.bind(this);
	}

	RemoveFromArray(e) {
		let index = e.target.value;
		let array = this.state.users;
		console.log('idx', index)
		if (index != -1) {
			console.log(+index, 1)
			array.splice(+index, 1);
			this.setState({users: array});
		}
		return false;
	}

	render() {
		let users;
		let saveThis = this;

		if (this.state.users.length > 0) {
			users = this.state.users.map(function (item, index) {
				return (
					<div key={index}
						className={`user-item
							${item.admin ? 'bg-green' : ''}
							${item.manager ? 'bg-aqua' : ''}
							${item.superman ? 'bg-red' : ''}`}>

						<h3>{item.name}</h3>
						<p>Phone: {item.phone}</p>
						<p>Email: {item.email}</p>
						<br/>
						<p>Driver: {item.driver}</p>
						<p>Phone: {item.phoneDriver}</p>
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
