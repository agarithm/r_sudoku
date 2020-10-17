import React from 'react';
import Cell from './Cell';

class Grid extends React.Component {
	render() {
		return (
			<table className="sudoku-grid"><tbody>
			<tr><Cell grid={this.props.grid} row={0} col={0} board={this.props.board} /><Cell grid={this.props.grid} row={0} col={1} board={this.props.board} /><Cell grid={this.props.grid} row={0} col={2} board={this.props.board} /></tr>
			<tr><Cell grid={this.props.grid} row={1} col={0} board={this.props.board} /><Cell grid={this.props.grid} row={1} col={1} board={this.props.board} /><Cell grid={this.props.grid} row={1} col={2} board={this.props.board} /></tr>
			<tr><Cell grid={this.props.grid} row={2} col={0} board={this.props.board} /><Cell grid={this.props.grid} row={2} col={1} board={this.props.board} /><Cell grid={this.props.grid} row={2} col={2} board={this.props.board} /></tr>
			</tbody></table>
		);
	}
}


export default Grid;
