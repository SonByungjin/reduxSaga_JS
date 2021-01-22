import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import Main from './components/main/Main';
import Limit from './components/Limit/Limit';
import {rootSaga} from './sagas';
import {store, sagaMiddleware} from './store';

sagaMiddleware.run(rootSaga);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Limit />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

