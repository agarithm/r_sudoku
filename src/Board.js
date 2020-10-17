import React from 'react';
import Grid from './Grid';

class Board extends React.Component {
	state = {
		board: "................................................................................."
	}

	constructor(){
		super();
		this.newBoard = this.newBoard.bind(this);
		this.hint = this.hint.bind(this);
		this.hollywood = this.hollywood.bind(this);

	}

	hint(hollywood=false){
		fetch("https://metapult.com/wp-json/h_sudoku/v1/hint/"+this.state.board)
		.then((response) => response.json())
		.then((response) => {
				let hint = response.state;
				let newState = "";
				for(let i = 0; i < 81;i++) newState += hint[i]==="." ? this.state.board[i] : hint[i];
				this.setState({board: newState})
				if(hollywood===true && newState.includes('.'))setTimeout(()=>this.hint(hollywood),1)
				}
				)

	}

	hollywood() {
		this.hint(true);
	}

	newBoard(){
		fetch("https://metapult.com/wp-json/h_sudoku/v1/new")
		.then((response) => response.json())
		.then((response) => this.setState({board: response.state}))
	}

	componentDidMount() {
		this.newBoard();
	}

	render() {
		return (
			<div>
			<table className="sudoku-board"><tbody>
				<tr>
					<td><Grid grid={0} board={this.state.board} /></td>
					<td><Grid grid={1} board={this.state.board} /></td>
					<td><Grid grid={2} board={this.state.board} /></td>
				</tr>
				<tr>
					<td><Grid grid={3} board={this.state.board} /></td>
					<td><Grid grid={4} board={this.state.board} /></td>
					<td><Grid grid={5} board={this.state.board} /></td>
				</tr>
				<tr>
					<td><Grid grid={6} board={this.state.board} /></td>
					<td><Grid grid={7} board={this.state.board} /></td>
					<td><Grid grid={8} board={this.state.board} /></td>
				</tr>
			</tbody></table>
			<div>
			<button onClick={this.newBoard}>New</button>
			<button onClick={this.hint}>Hint</button>
			<button onClick={this.hollywood}>Hollywood</button>
			</div>
			<div>
			{this.state.board}
			</div>
			</div>
		);
	}
}


export default Board;
