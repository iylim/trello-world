// to use less strings
// const types = {
//   ADD_CARD: 'ADD_CARD'
// }
// type: types.ADD_CARD

// add a card (action creator)
export const addCard = (text, boardIndex) => ({
  // returns action
  type: 'ADD_CARD',
  text,
  boardIndex
});

// remove a card
export const removeCard = id => ({
  type: 'REMOVE_CARD',
  id
});

// transfer a card
export const transferCard = (id, destinationBoardIndex) => ({
  type: 'TRANSFER_CARD',
  id,
  destinationBoardIndex
});

// add a board to end of array
export const addBoard = name => ({
  type: 'ADD_BOARD',
  name
});

// remove a board at certain index
export const removeBoard = id => ({
  type: 'REMOVE_BOARD',
  id
});