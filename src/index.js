import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Movies from './components/Movies';
import { MovieDb } from 'moviedb-promise';
import Nav from './components/Nav';
const db = new MovieDb(process.env.REACT_APP_API_KEY);
ReactDOM.render(
  <React.StrictMode>
    <Nav/>
    <Movies db={db}/>
  </React.StrictMode>,
  document.getElementById('root')
);
