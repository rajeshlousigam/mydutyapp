import React from 'react';

export const initialState = {
  modalState: {visible: false, title: ''},
};

export const reducer = (state, action) => {
  const {type, modalState, callback} = action;

  switch (type) {
    case 'modalState':
      return {...state, modalState};

    default:
      return state;
  }
};

export const Context = React.createContext(null);
// state: initialState,
// dispatch,
