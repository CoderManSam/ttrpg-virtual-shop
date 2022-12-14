import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const UserForm = ({ handleSubmit, handleChange }) => {
  return (
    <form className="user-form" onSubmit={handleSubmit}>
      <TextField
        className="user-form-input"
        label="Username"
        variant="outlined"
        name="username"
        onChange={handleChange}
        required
      />
      <TextField
        className="user-form-input"
        type="password"
        label="password"
        variant="outlined"
        name="password"
        onChange={handleChange}
        required
      />
      <Button id="user-submit-button" type="submit" variant="contained">
        Submit
      </Button>
    </form>
  );
};

export default UserForm;