import { Box, IconButton, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";

function NavMenu() {
  const [anchorElNav, setAnchorElNav] = React.useState<null | HTMLElement>(
    null
  );

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };
  return (
    <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "flex" } }}>
      <IconButton size="large" onClick={handleOpenNavMenu} color="inherit">
        <MenuIcon />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{
          display: { xs: "block", md: "block" },
        }}
      >
        <a href="/">
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">List</Typography>
          </MenuItem>
        </a>
        <a href="add">
          <MenuItem onClick={handleCloseNavMenu}>
            <Typography textAlign="center">Add</Typography>
          </MenuItem>
        </a>
      </Menu>
    </Box>
  );
}

export default NavMenu;
