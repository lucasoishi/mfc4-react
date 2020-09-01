import * as React from "react";
import { getUsers } from "./../api/users";
import { Table } from "react-bootstrap";

const headers = ["id", "avatar", "email", "first_name", "last_name"];

export const UserTable = () => {
  const [users, setUsers] = React.useState([]);

  React.useEffect(() => {
    getUsers().then(setUsers);
  }, []);

  return (
      <Table>
        <thead>
          <tr>
            {headers.map((key) => (<th key={key}>{key.toUpperCase()}</th>))}
          </tr>
        </thead>

        <tbody>
          {users.map(({ id, email, first_name, last_name, avatar }) => (
              <tr key={id}>
                <td>{id}</td>
                <td>
                  {" "}
                  <img src={avatar}></img>
                </td>
                <td>{email}</td>
                <td>{first_name}</td>
                <td>{last_name}</td>
              </tr>
            )
          )}
        </tbody>
      </Table>
  );
};
