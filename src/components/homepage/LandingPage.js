import React from "react";
import Appbar from "./appbar/index";
import Banner from "./banner/index";
import AppDrawer from "./drawer/index";
import { Container, Typography, Box, Stack, Grid, Button } from "@mui/material";
//import Products from './products/index'
import Footer from "./footer";
import Promotions from "./promotion";
import { UIProvider } from "./context";
import { ThemeProvider } from "@mui/system";
import theme from "../style/theme";

export default function LandingPage() {
  return (
    <ThemeProvider theme={theme}>
      <Container
        disableGutters
        maxWidth="xl"
        sx={{
          background: "#fff",
        }}
      >
        <Stack>
          <UIProvider>
            <Appbar />
            <Banner />
            <Promotions />
            {/* <Box display="flex" justifyContent="center" sx={{ p: 4 }}>
              <Typography variant="h4">Our Products</Typography>
            </Box> */}
            <Footer />
            <AppDrawer />
            {/* <Products/>  */}
          </UIProvider>
        </Stack>
      </Container>
    </ThemeProvider>
  );
}
