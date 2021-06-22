import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { importUsers, IMPORT_USERS } from './store/userReducer';
import { Table, Form, Row, Col, Button } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
import { postCommentAction } from './store/postReducer';
import { useState } from 'react';

function App() {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [userId, setUserId] = useState("");

  const users = useSelector(state => state.userReducer.users);
  const dispatch = useDispatch();


  const submit = (e) => {
    e.preventDefault();
    dispatch(postCommentAction({ title, body, userId }));
  }

  return (
    <>
      <div className={"row justify-content-center"}>
        <div className="col-auto">
          <h1 className="text-center">Submit form</h1>
          <Form style={{ width: "25rem" }} onSubmit={submit} role="form">
            <Form.Group controlId="userId">
              <Form.Label>User Id</Form.Label>
              <Form.Control type="userId" placeholder="Enter your user ID" value={userId} onChange={(e) => setUserId(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="title">
              <Form.Label>Title</Form.Label>
              <Form.Control type="title" placeholder="Enter your title" value={title} onChange={(e) => setTitle(e.target.value)} />
            </Form.Group>
            <Form.Group controlId="body">
              <Form.Label>Body</Form.Label>
              <Form.Control type="body" placeholder="Enter the text you want to add" value={body} onChange={(e) => setBody(e.target.value)} />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </div>
      </div>
      <p className={"text-center"} style={{ margin: "1rem" }}>In order to check <b>submit form</b>, look console.log</p>

      <hr></hr>
      <h1 className="text-center">Import data</h1>


      <div className={"text-center"}>
        <Button variant="primary" onClick={() => dispatch(importUsers())}>Import all users</Button>
        <h1>{users.length}</h1>
        <div className="row justify-content-center">
          <div className={"col-auto"}>
            <Table striped bordered hover style={{ width: "60rem" }}>
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
        </div>

      </div>
    </>

  );
}

export default App;
