import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { addBoard } from '../actions';
import Board from './Board';
import AddBoardForm from '../components/AddBoardForm';

const Main = ({ boards, addBoard: addBoardFunc }) => (
  <div
    style={{
      display: 'flex',
      flexWrap: 'wrap',
    }}
  >
    {boards.map((board, i) => (
      <Board key={i} index={i} name={board} />
      ))}
    <AddBoardForm addBoard={addBoardFunc} />
  </div>
);

Main.propTypes = {
  boards: PropTypes.arrayOf(PropTypes.string),
  addBoard: PropTypes.func,
};

const mapStateToProps = state => ({
  boards: state.boards
});

const mapDispatchToProps = dispatch => bindActionCreators({
  addBoard,
}, dispatch);

/**
 * creates higher order compnent 'connected' to store
 */
const ConnectedMain = connect(mapStateToProps, mapDispatchToProps)(Main);

export default ConnectedMain;
