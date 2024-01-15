import { AppBar, Toolbar, Typography } from "@mui/material";
import BtnDownload from "./BtnDownload";

function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          Court cases
        </Typography>
        <BtnDownload />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
