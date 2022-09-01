import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import App from './components/App/App';
import store from './store';

const st = store();
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  < BrowserRouter>
   <Provider store={st.store}>
    <PersistGate loading={null} persistor={st.persistor}>
      <App />
    </PersistGate>
   </Provider>
  </BrowserRouter>
);
