import { BrowserRouter } from "react-router-dom";
import { blue } from "@mui/material/colors";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import Routes from "./router";
import Drawer from "./Drawer/Drawer";

function App() {
  const theme = createTheme({
    palette: {
      primary: {
        main: blue[600],
      },
    },
    typography: {
      fontFamily: "Poppins",
      fontSize: 15,
      fontWeightMedium: 200,
      fontWeightLight: 200,
      fontWeightRegular: 300,
      fontWeightBold: 900,
    },
    components: {
      MuiButton: {
        styleOverrides: {
          root: {
            textTransform: "capitalize",
            "&:hover": {
              background: "",
            },
          },
        },
      },
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={theme}>
        <Drawer>
          <Routes />
        </Drawer>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
