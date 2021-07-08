import { useState } from "react";
import Box from "@material-ui/core/Box";
import { TextField, Button } from "@material-ui/core";

import { useStyles } from "./profile.styles";

const Profile = () => {
  const defaultUser = {
    username: "Username",
    firstName: "",
    lastName: "",
    email: "email@email.com",
    password: "",
    confirmPassword: "",
  };
  const [user, setUser] = useState(defaultUser);
  const classes = useStyles();

  const handleTextFieldChange = (e) => {
    e.preventDefault();
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Changes Saved");
  };

  const handleClick = (e) => {
    e.preventDefault();
    setUser(defaultUser);
    alert("Changes discarded");
  };

  return (
    <Box className={classes.form__container}>
      <form className={classes.form} autoComplete="off" onSubmit={handleSubmit}>
        <TextField
          InputLabelProps={{ shrink: true }}
          className={classes.input}
          name="username"
          id="standard-basic"
          label="Username"
          required
          onChange={handleTextFieldChange}
          value={user.username}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          className={classes.input}
          name="firstName"
          id="standard-basic"
          label="First Name"
          onChange={handleTextFieldChange}
          value={user.firstName}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          className={classes.input}
          name="lastName"
          id="standard-basic"
          label="Last name"
          onChange={handleTextFieldChange}
          value={user.lastName}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          className={classes.input}
          name="email"
          id="standard-basic"
          type="email"
          label="Email"
          onChange={handleTextFieldChange}
          required
          value={user.email}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          className={classes.input}
          name="password"
          id="standard-basic"
          type="password"
          label="Password"
          onChange={handleTextFieldChange}
          required
          value={user.password}
        />
        <TextField
          InputLabelProps={{ shrink: true }}
          className={classes.input}
          name="confirmPassword"
          id="standard-basic"
          type="password"
          label=" Confirm Password"
          onChange={handleTextFieldChange}
          required
          value={user.confirmPassword}
        />
        <Box className={classes.buttons__container}>
          <Button variant="contained" color="primary" type="submit">
            Save
          </Button>
          <Button variant="contained" color="secondary" onClick={handleClick}>
            Cancel
          </Button>
        </Box>
      </form>
    </Box>
  );
};

export default Profile;
