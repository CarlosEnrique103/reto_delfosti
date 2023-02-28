import {createSlice} from '@reduxjs/toolkit';

let id = 3;

export const publicationSlice = createSlice({
  name: 'publications',
  initialState: {
    data: [
      {
        id: 1,
        title: 'Publication 1',
        description: 'description 1',
        state: false,
      },
      {
        id: 2,
        title: 'Publication 2',
        description: 'description 2',
        state: true,
      },
      {
        id: 3,
        title: 'Publication 2',
        description: 'description 2',
        state: false,
      },
      {
        id: 4,
        title: 'Publication 2',
        description: 'description 2',
        state: true,
      },
    ],
  },
  reducers: {
    addPublication: (state, action) => {
      console.log('se llamo', {action});
      state.data = [
        ...state.data,
        {
          id: ++id,
          title: action.payload.title,
          description: action.payload.description,
          state: false,
        },
      ];
    },
    deletePublication: (state, action) => {
      state.data = [...state.data.filter(todo => todo.id !== action.payload)];
    },
    changeStatePublication: (state, action) => {
      let copyState = [...state.data];
      const findElement = copyState.find(el => el.id === action.payload);
      findElement.state = !findElement.state;
      state.data = [...copyState];
    },
  },
});

export const {addPublication, deletePublication, changeStatePublication} =
  publicationSlice.actions;

export const selectPublications = state => state.publications.data;

export default publicationSlice.reducer;
