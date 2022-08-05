import React from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";
import { grey } from "@mui/material/colors";

function CommunityLogin() {
  return (
    <Box sx={{ my: { lg: 10, xl: 10, md: 10, xs: 1 } }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-evenly",
        }}
      >
        <Box
          sx={{
            maxWidth: { lg: "60%", xl: "60%", md: "60%", xs: "100%" },
            display: "flex",
            gap: 3,
          }}
        >
          <Box
            sx={{
              maxWidth: "70%",
              display: { lg: "block", xl: "block", md: "none", xs: "none" },
            }}
          >
            <img
              width="100%"
              src="/svg-UNDRAW/undraw_people_re_8spw.svg"
              alt="Hero"
            />
          </Box>
          <Box
            sx={{
              maxWidth: {
                lg: "50%",
                xl: "50%",
                md: "70%",
                xs: "100%",
              },
              display: { lg: "block", xl: "block", md: "block", xs: "none" },
            }}
          >
            <Typography variant="h5" color={grey[800]}>
              Selalu Terhubung
            </Typography>
            <Typography mt={2}>
              Consequat cupidatat cillum enim non cillum occaecat eu pariatur do
              elit occaecat aute. Cillum esse ipsum consectetur ullamco duis qui
            </Typography>
            <Typography variant="h5" mt={2} color={grey[800]}>
              Tetap Produktif
            </Typography>
            <Typography mt={2}>
              minim magna duis voluptate exercitation fugiat ut fugiat. Laboris
              sit ex occaecat occaecat exercitation nostrud reprehenderit aute.
              Ullamco ut occaecat sint exercitation nulla duis do officia cillum
              aliqua velit sint excepteur. Exercitation ad irure sunt culpa
            </Typography>
          </Box>
        </Box>
        <Box sx={{ width: { lg: "30%", xl: "30%", md: "30%", xs: "100%" } }}>
          <Formik
            initialValues={{
              username: "",
              password: "",
            }}
            onSubmit={(value) => {
              localStorage.setItem("accessToken", "accessToken");
              window.location.reload();
            }}
          >
            {({ values, getFieldProps }) => (
              <Form>
                <Typography
                  mb={1}
                  fontSize={14}
                  sx={{
                    display: {
                      lg: "none",
                      xl: "none",
                      md: "none",
                      xs: "block",
                    },
                  }}
                >
                  Consequat cupidatat cillum enim non cillum occaecat eu
                  pariatur do elit occaecat aute. Cillum esse ipsum consectetur
                  ullamco duis qui
                </Typography>
                <Typography variant="h3">Login</Typography>

                <Box mt={2}>
                  <Typography>Username</Typography>
                  <TextField {...getFieldProps("username")} fullWidth />
                  <Typography mt={3}>Password</Typography>
                  <TextField
                    {...getFieldProps("password")}
                    type="password"
                    fullWidth
                  />
                </Box>
                <Button
                  type="submit"
                  sx={{ mt: 3 }}
                  fullWidth
                  variant="contained"
                >
                  Login
                </Button>
              </Form>
            )}
          </Formik>
        </Box>
      </Box>
    </Box>
  );
}

export default CommunityLogin;
