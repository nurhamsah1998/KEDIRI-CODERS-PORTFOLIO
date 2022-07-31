import React from "react";
import {
  Container,
  Typography,
  Box,
  Grid,
  TextField,
  Button,
} from "@mui/material";
import { blue, deepOrange } from "@mui/material/colors";
import Link from "@mui/material/Link";

function Footer() {
  return (
    <Box sx={{ bgcolor: blue[700], color: "#fff" }}>
      <Container sx={{ py: 2 }}>
        <Grid
          container
          direction="row"
          justifyContent="space-evenly"
          alignItems="flex-start"
        >
          <Grid item>
            <Typography fontSize={25} fontWeight={700}>
              LOGO
            </Typography>
            <Typography fontSize={17} mt={-1}>
              Nurhamsah coders
            </Typography>
            <Box>
              <Box sx={{ display: "flex", gap: 2, mt: 2 }}>
                <TextField sx={{ bgcolor: "#fff" }} size="small" />
                <Button
                  variant="contained"
                  sx={{ bgcolor: deepOrange[600], fontWeight: 500 }}
                >
                  Submit
                </Button>
              </Box>
            </Box>
            <Typography fontSize={13} mt={1}>
              Selalu terhubung dan mendapatkan informasi terbaru dengan mengirim
              email anda
            </Typography>
          </Grid>
          {[
            {
              label: "Karir",
              menus: [
                {
                  title: "My journey",
                },
                {
                  title: "For learn",
                },
                {
                  title: "My camp",
                },
                {
                  title: "My tempe",
                },
              ],
            },
            {
              label: "Company",
              menus: [
                {
                  title: "UI/UX",
                },
                {
                  title: "Designer",
                },
                {
                  title: "Editors",
                },
                {
                  title: "Code writter",
                },
                {
                  title: "Schema Algorithm",
                },
              ],
            },
            {
              label: "Community",
              menus: [
                {
                  title: "Dialog",
                },
                {
                  title: "Ideas",
                },
                {
                  title: "Information",
                },
              ],
            },
          ].map((item, index) => {
            return (
              <Grid key={index} item>
                <Box>
                  <Typography fontWeight={400}>{item.label}</Typography>
                  <Box>
                    {item.menus.map((menu, menuIndex) => (
                      <Link
                        underline="none"
                        color="inherit"
                        href="#"
                        key={menuIndex}
                      >
                        <Typography fontSize={14}>{menu.title}</Typography>
                      </Link>
                    ))}
                  </Box>
                </Box>
              </Grid>
            );
          })}
        </Grid>
        <Typography textAlign="center" mt={5} fontSize={13} fontWeight={300}>
          Kediri Coders &#169; 2022
        </Typography>
      </Container>
    </Box>
  );
}

export default Footer;
