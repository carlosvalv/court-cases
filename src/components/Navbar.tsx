import { AppBar, Toolbar } from "@mui/material";
import BtnDownload from "./BtnDownload";
import NavMenu from "./NavMenu";

function Navbar() {
  return (
    <AppBar>
      <Toolbar>
        <NavMenu />
        <BtnDownload />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
