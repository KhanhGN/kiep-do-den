import React from 'react';
import { Spinner } from './components/spinner/spinner.component';
import { Button } from './components/button/button.component';
import './App.css';

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			spinners: ['a1', 'a1', 'a1'],
		};
	}

	spin = (ms) => {
		return new Promise((resolve) => {
			setTimeout(() => {
				this.setState({
					spinners: this.state.spinners.map(() => 'a' + this.randomInt(1, 6)),
				});
				resolve();
			}, ms);
		});
	};

	roll = async () => {
		for (let i = 0; i < this.randomInt(2, 10) * 5 + 10; i++) {
			await this.spin(40 * Math.sqrt(i + 1));
		}
	};

	randomInt = (min, max) => {
		return Math.floor(Math.random() * (max - min + 1) + min);
	};

	render() {
		return (
			<div className="App">
				<header>
					<h1>KIẾP ĐỎ ĐEN</h1>
					<h6>Còn thở là còn gỡ</h6>
				</header>
				<div className="spin-wrapper">
					{this.state.spinners.map((spinner, index) => (
						<Spinner className={spinner} key={index}></Spinner>
					))}
				</div>
				<Button name={'roll'} method={this.roll}></Button>
			</div>
		);
	}
}

export default App;
