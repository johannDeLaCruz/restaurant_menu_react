import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";
import LogoutIcon from "@mui/icons-material/Logout";

const LogoutButton = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <Button
      variant="contained"
      color="info"
      onClick={handleLogout}
      sx={{ width: 220 }}
      startIcon={<LogoutIcon />}
    >
      Logout
    </Button>
  );
};

export default LogoutButton;
