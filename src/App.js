import React from 'react';
import { Button } from 'bootstrap';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { importUsers } from './store/userReducer';


function App() {

  const users = useSelector(state => state.importedUsersReducer.users);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch(importUsers())}>Import all users</button>
    </div>
  );
}

export default App;
