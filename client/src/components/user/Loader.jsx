import { PropTypes } from "prop-types";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";

export default function Loader({ isLoading }) {
  return (
    <Backdrop open={isLoading} invisible>
      <CircularProgress color="inherit" />
    </Backdrop>
  );
}

Loader.propTypes = {
  isLoading: PropTypes.bool.isRequired,
};
