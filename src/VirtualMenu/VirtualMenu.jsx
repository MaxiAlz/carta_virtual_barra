import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Box,
  Typography,
  Button,
  Snackbar,
  Alert,
} from "@mui/material";
import { productsInMenu } from "../utils/Products";

const { drinks, beers, sales, whithoutAlcoholDrinks } = productsInMenu;

const styles = {
  fontBold: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  tittles: {
    fontFamily: "Bebas Neue",
    fontSize: "1.8rem",
    color: "#8800CE",
  },
  prices: {
    fontFamily: "Bebas Neue",
    fontSize: "1.5rem",
    color: "#8800CE",
  },
  tableContainer: {
    margin: "2rem 0",
  },
  textAliasBlack: {
    fontFamily: "Bebas Neue",
    fontSize: "1.8rem",
    color: "black",
  },
};
const VirtualMenu = () => {
  const [openSnacker, setOpenSnacker] = useState(false);

  function copyToClipboard() {
    const texto = "vamo.chupa";
    navigator.clipboard.writeText(texto); // copia el texto al portapapeles
    setOpenSnacker(true);
  }
  return (
    <>
      <Box sx={{ padding: "1rem", marginTop: "1.5rem" }}>
        <TableContainer component={Paper} style={styles.tableContainer} sx={{}}>
          <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <span style={styles.tittles}>MEDIDAS 🍹 </span>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {drinks.map((drink) => (
                <TableRow key={`${drink.name}+${drink.price}`}>
                  <TableCell component="th" scope="row" width={"70%"}>
                    <span style={styles.fontBold}>
                      {drink.name.toUpperCase()}
                    </span>
                    {" " + " " + drink.size.toUpperCase()}
                  </TableCell>
                  <TableCell align="right" style={styles.prices}>
                    $ {drink.price.toLocaleString("es-AR")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <span style={styles.tittles}>CERVEZAS 🍻</span>
                </TableCell>
                <TableCell align="right">
                  {/* <span>PRECIOS</span> */}
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {beers.map((beer) => (
                <TableRow key={`${beer.name}+${beer.price}`}>
                  <TableCell component="th" scope="row" width={"70%"}>
                    <span style={styles.fontBold}>
                      {beer.name.toUpperCase()}
                    </span>
                    {" " + " " + beer.size.toUpperCase()}
                  </TableCell>
                  <TableCell align="right" style={styles.prices}>
                    $ {beer.price.toLocaleString("es-AR")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell style={{ paddingRight: "0" }}>
                  <span style={styles.tittles}>SIN ALCOHOL🥤</span>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {whithoutAlcoholDrinks.map((soda) => (
                <TableRow key={`${soda.name}+${soda.price}`}>
                  <TableCell component="th" scope="row" width={"70%"}>
                    <span style={styles.fontBold}>
                      {soda.name.toUpperCase()}
                    </span>
                    {" " + " " + soda.size.toUpperCase()}
                  </TableCell>
                  <TableCell align="right" style={styles.prices}>
                    $ {soda.price.toLocaleString("es-AR")}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TableContainer component={Paper} style={styles.tableContainer}>
          <Table sx={{ maxWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>
                  <span style={styles.tittles}>PROMOS 💥</span>
                </TableCell>
                <TableCell align="right"></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {sales.map((sale) => (
                <TableRow key={`${sale.name}+${sale.price}`}>
                  <TableCell component="th" scope="row" width={"70%"}>
                    <span style={styles.prices}>{sale.amount}</span>
                    <span
                      style={styles.fontBold}
                    >{` x ${sale.name.toUpperCase()}`}</span>
                    {" " + " " + sale.size.toUpperCase()}
                  </TableCell>
                  <TableCell align="right" style={styles.prices}>
                    {`$ ${sale.price.toLocaleString("es-AR")}`}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Box>
      <Box
        sx={{
          alignItems: "center",
          alignContent: "center",
          marginBottom: "2rem",
        }}
        display="flex"
        flexDirection={"column"}
      >
        <Typography sx={{ padding: "1rem" }}>
          ✏️ Toca para copiar Alias 👇
        </Typography>
        <Button variant="outlined" color="secondary" onClick={copyToClipboard}>
          <span style={styles.textAliasBlack}>VAMO.</span>
          <span style={styles.tittles}>CHUPA</span>
        </Button>
      </Box>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={openSnacker}
        autoHideDuration={6000}
        onClose={() => setOpenSnacker(false)}
      >
        <Alert
          onClose={() => setOpenSnacker(false)}
          severity="success"
          sx={{
            width: "100%",
            backgroundColor: "#E6D4F0",
            marginTop: "3.5rem",
          }}
        >
          <span style={{ fontWeight: "bold", fontSize: "1rem" }}>
            {"¡👌Listo! Pagá tu bebida desde cualquier billetera virtual💱"}
          </span>
        </Alert>
      </Snackbar>
    </>
  );
};

export default VirtualMenu;
