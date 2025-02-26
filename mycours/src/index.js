import React, {createContext} from 'react';
import * as ReactDOMClient from 'react-dom/client';
import './css/main.css'; 
import App from './App';
import Store from "./serverConnect/store/store";


const store = new Store();

export const Context = createContext({
    store,
})

const rootElement = document.getElementById('root');
const root = ReactDOMClient.createRoot(rootElement);

root.render(
    <React.StrictMode value={{store}} >
      <App />
    </React.StrictMode>
  );