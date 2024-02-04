import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import './index.css';
import GlobalStyle from './styles/GlobalStyles/GlobalStyles';
import { Provider } from 'react-redux';
import { store } from './redux/store';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter basename="/car-rental">
      <Provider store={store}>
        <GlobalStyle />
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>
);
