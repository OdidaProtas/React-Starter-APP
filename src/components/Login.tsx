import InputAdornment from "@mui/material/InputAdornment";
import TextField from "@mui/material/TextField";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import LockIcon from "@mui/icons-material/Lock";
import { useHistory } from "react-router";
export default function Login() {
  const { push } = useHistory();
  const handleSubmit = (e: any) => {
    e.preventDefault();
    push(`/dashboard`)
  };
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
      }}
    >
      <form onSubmit={handleSubmit}>
        <TextField
          sx={{ mb: 2 }}
          size="small"
          required
          placeholder="username"
          type="text"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircleIcon />
              </InputAdornment>
            ),
          }}
        />
        <br />
        <TextField
          required
          size="small"
          placeholder="username"
          type="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockIcon />
              </InputAdornment>
            ),
          }}
        />
        <br />
        <button type="submit" style={{ marginTop: "10px" }}>
          Login
        </button>
      </form>
    </div>
  );
}
