export const state = {
  dialogsPage: {
    dialogs: [
      { id: 1, name: 'Sasha' },
      { id: 2, name: 'Ivan' },
      { id: 3, name: 'Grigory' },
      { id: 4, name: 'Stepan' },
      { id: 5, name: 'Katya' },
    ],
    messages: [
      { id: 1, message: 'How are you?' },
      { id: 2, message: 'The weather is great' },
      { id: 3, message: 'ok,i got you' },
      { id: 4, message: 'Keep going, man!' },
      { id: 5, message: 'See you soon' },
    ],
  },
  profilePage: {
    posts: [
      { id: 1, message: 'How are you?', likesCount: 12 },
      { id: 2, message: 'The weather is great', likesCount: 8 },
      { id: 2, message: 'Keep going man', likesCount: 8 },
    ],
  },
  sidebar: {
    friends: [
      { id: 1, name: 'Sasha' },
      { id: 2, name: 'Ivan' },
      { id: 3, name: 'Kate' },
    ],
  },
};

export const addPost = (postMessage) => {
  const newPost = { id: 2, message: postMessage, likesCount: 8 };
  state.profilePage.posts.push(newPost);
};
