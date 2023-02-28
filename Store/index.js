import publications from './publication/slice';

import {configureStore} from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    publications,
  },
});

export default store;
