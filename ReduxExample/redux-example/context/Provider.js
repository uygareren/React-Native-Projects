import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from '@reduxjs/toolkit'; // Redux Toolkit'den configureStore import ediliyor

import reducers from './reducers'; // reducers'larınızı buraya import edin
import initialStore from './store'; // İlk durumunuzu buraya import edin

const store = configureStore({
  reducer: reducers, // rootReducer burada belirtilmeli
  preloadedState: initialStore, // İlk durumu burada belirtebilirsiniz
});

const UserProvider = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default UserProvider;
