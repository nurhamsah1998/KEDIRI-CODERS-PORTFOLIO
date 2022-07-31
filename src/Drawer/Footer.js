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

function Footer() {
  return (
    <Box sx={{ bgcolor: blue[700], color: "#fff" }}>
      <Container sx={{ py: 2 }}>
        <Grid container>
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
          <Grid item>
            <Grid container>
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
                  ],
                },
              ].map((item, index) => {
                return (
                  <Grid key={index} item>
                    <Box>
                      <Typography fontWeight={400}>{item.label}</Typography>
                      <Box>
                        {item.menus.map((menu, menuIndex) => (
                          <Typography fontSize={14} mt={-0.5}>
                            {menu.title}
                          </Typography>
                        ))}
                      </Box>
                    </Box>
                  </Grid>
                );
              })}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default Footer;
