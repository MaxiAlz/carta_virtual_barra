import { AppBar, Box, Toolbar, Typography } from "@mui/material";
import React from "react";

const styles = {
  tittle: {
    fontFamily: "Bebas Neue",
    fontSize: "1.5rem",
    color: "white",
  },
  appBar: {
    backgroundColor: "#8800CE",
  },
};
const NavegationBar = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed" style={styles.appBar}>
        <Toolbar variant="dense">
          <Typography
            variant="h6"
            component="div"
            style={styles.tittle}
          >
            🍾  VAMO CHUPA CARTA VIRTUAL
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavegationBar;
