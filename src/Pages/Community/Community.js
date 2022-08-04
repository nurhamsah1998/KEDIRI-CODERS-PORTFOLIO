import React from "react";
import { TextField, Box, Button, Typography } from "@mui/material";
import { Formik, Form } from "formik";

function Community() {
  return (
    <Box my={10}>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box sx={{ maxWidth: "30%" }}>
          <img
            width="100%"
            src="/svg-UNDRAW/undraw_personal_email_re_4lx7.svg"
            alt="Hero"
          />
        </Box>
        <Box sx={{ width: "30%" }}>
          <Formik>
            {({ values, getFieldProps }) => (
              <Form>
                <Box>
                  <Typography>Username</Typography>
                  <TextField fullWidth />
                  <Typography mt={3}>Password</Typography>
                  <TextField type="password" fullWidth />
                </Box>
                <Button sx={{ mt: 3 }} fullWidth variant="contained">
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

export default Community;
