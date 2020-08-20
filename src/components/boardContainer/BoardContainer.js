import React from 'react';

import Board from '../Board/Board';

import boardsData from '../../helpers/data/boardData';
import authData from '../../helpers/data/authData';

class BoardContainer extends React.Component {
  state = {
    boards: [],
  }

  componentDidMount() {
    boardsData.getBoardsbyUid(authData.getUid())
      .then((boards) => this.setState({ boards }))
      .catch((err) => console.error('get boards broke!!, err'));
  }

  render() {
    const { boards } = this.state;

    const boardCard = boards.map((board) => <Board key={board.id} board={board}/>);

    return (
      <div className="card-columns">
        {boardCard}
      </div>
    );
  }
}

export default BoardContainer;
