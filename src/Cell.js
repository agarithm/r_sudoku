import React from 'react';

class Cell extends React.Component {
	state = {
		idx: 0,
		x: 0,
		y: 0,
	}

	componentDidMount() {
		let x = 0;
		let y = 0;
		let i = 0;

		let gx = Math.floor(this.props.grid % 3)*3;
		let gy = Math.floor(this.props.grid / 3)*3;

		x = gx + this.props.col;
		y = gy + this.props.row;

		i = x + 9*y

		this.setState({idx: i, x: x, y: y});
	}

	render() {
		return (
			<td>
			{this.props.board[this.state.idx]==="." ? '' : this.props.board[this.state.idx]}
			</td>
		);
	}
}


export default Cell;
