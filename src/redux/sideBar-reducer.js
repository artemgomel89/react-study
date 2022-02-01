const initialState = {
  friends: [
    { id: 1, name: 'Sasha' },
    { id: 2, name: 'Ivan' },
    { id: 3, name: 'Kate' },
  ],
};

const sideBarReducer = (state = initialState, action) => {
  return state;
};

export default sideBarReducer;
