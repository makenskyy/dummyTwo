import React from 'react';
import { Button } from 'bootstrap';
import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, FETCH_USERS } from './store/userReducer';


function App() {

  const users = useSelector(state => state.userReducer.users);
  const dispatch = useDispatch();

  return (
    <div className="App">
      <button onClick={() => dispatch({ type: FETCH_USERS })}>Import all users</button>
      {users.map(user => {
        <h1>{user.name}</h1>
      })}
      <h1>{users.length}</h1>
      <h1>{count}</h1>
    </div>
  );
}

export default App;
