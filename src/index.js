import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { store } from './redux/contacts/store';
import { BrowserRouter } from 'react-router-dom';
import App from 'components/App';
import { GlobalStyle } from 'GlobalStyle';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
        <GlobalStyle />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
