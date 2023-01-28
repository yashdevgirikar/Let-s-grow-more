import "./index.css";
import "./App.css";
import { useState } from "react";
function App() {
  const [users, setUsers] = useState([]);
  const [hasError, setHasError] = useState(false);

  const loadusers = () => {
    fetch("https://reqres.in/api/users?page=1")
      .then((response) => response.json())
      .then((result) => setUsers(result.data))
      .catch((err) => setHasError(true));
    prompt("Hello, Enter Your Name to Get Users !");
  };
  return (
    <>
      <header>
        <a href="#" className="logo">
          <span>Hello Everyone !</span>
        </a>

        <button className="btn" onClick={loadusers}>
          GET USERS
        </button>
      </header>

      {users.map((user) => (
        <div className="data">
          <center>
            <table
              classname="table"
              cellPadding="20"
              cellSpacing="20"
              key={user.id}
            >
              <tr>
                <td>
                  <img src={user.avatar}></img>
                </td>
                <td>
                  ID:
                  <br />
                  {user.id}
                </td>
                <td>
                  FIRST_NAME:
                  <br />
                  {user.first_name}
                </td>
                <td>
                  LAST_NAME:
                  <br />
                  {user.last_name}
                </td>
                <td>
                  EMAIL:
                  <br />
                  {user.email}
                </td>
                <td></td>
              </tr>
            </table>
          </center>
        </div>
      ))}
    </>
  );
}

export default App;
