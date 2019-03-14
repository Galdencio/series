import React from 'react';
import Router from './Router';

import { Provider } from 'react-redux';
import store from './store';

const SeriesApp = prop => (
    <Provider store={store}>
        <Router />
    </Provider>
);

export default SeriesApp;