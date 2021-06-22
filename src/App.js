import React from 'react';
import { Button } from 'bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { importUsers, IMPORT_USERS } from './store/userReducer';
import { Table } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {

  const users = useSelector(state => state.userReducer.users);
  const dispatch = useDispatch();

  return (
    <div className={"text-center"}>
      <button onClick={() => dispatch(importUsers())}>Import all users</button>
      <h1>{users.length}</h1>


      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>username</th>
            <th>email</th>
          </tr>
        </thead>

        {users.length > 0 ?
          <tbody>
            {users.map(user => {
              return (
                <tr>
                  <td>{user.id}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.email}</td>
                </tr>)
            })}

          </tbody> : null
        }

      </Table>


    </div>



  );
}

export default App;
