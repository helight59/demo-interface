import React, { Component } from 'react';
import logo from './assets/img/logo.png';
import './App.css';
import UsersList from './components/UsersList/UsersList'

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			user: {
				name: 'Nick',
			}
		};
	};

	render() {

		return (
			<div className="wrapper">
				<header>
					<img className="logo" src={logo} alt=""/>
				</header>
				<nav>
					<div>Welcome back, {this.state.user.name}!</div>
					<div className="align-center">
						<button>{' << '}</button>
						October 18, 2017
						<button>{' >> '}</button>
					</div>
					<div>
						<div className="tools-list">
							<button className="add-btn"/>
							<button className="search-btn"/>
							<button className="users-btn"/>
							<button className="settings-btn"/>
							<button className="logout-btn"/>
						</div>
					</div>
				</nav>
				<main>
					<UsersList/>
				</main>
			</div>

		);
	}

}

export default App;
