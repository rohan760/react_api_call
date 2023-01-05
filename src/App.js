import "./App.css";
import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";
import axios from "axios";

const baseURL = "https://jsonplaceholder.typicode.com/users";

function App() {
  const [users, setUsers] = useState("not found");
  const [value, setValue] = useState("");

  const handleClick = async (_e) => {
    const res = await axios.get(baseURL);
    let userData = res.data;

    let usernames = [];
    for (let i in userData) usernames.push(userData[i].username);
    setUsers(usernames.filter((user) => user.includes(value)));
    console.log(users);
  };

  return (
    <div className="App">
      <Stack spacing={2} direction="row">
        <TextField
          label="type username"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <Button variant="contained" color="secondary" onClick={handleClick}>
          get username
        </Button>
        <div>{users}</div>
      </Stack>
    </div>
  );
}

export default App;
