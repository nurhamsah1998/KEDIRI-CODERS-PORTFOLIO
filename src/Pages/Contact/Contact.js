import React from "react";
import { Box, Button, Typography } from "@mui/material";
import { blue, grey } from "@mui/material/colors";
import EmailIcon from "@mui/icons-material/Email";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Contact() {
  return (
    <Box>
      <Box sx={{ width: "100%", mt: 5 }}>
        <Box sx={{ maxWidth: "330px", mx: "auto" }}>
          <img
            width="100%"
            src="/svg-UNDRAW/undraw_personal_email_re_4lx7.svg"
            alt="Hero"
          />
        </Box>
        <Typography mt={1} textAlign="center" fontSize={34} color={grey[800]}>
          Jangan ragu untuk menghubungi kami
        </Typography>
        <Typography textAlign="center" fontSize={15} color={grey[800]}>
          Hubungi kami melalui email ataupun nomor whatsapp, kami akan merespon
          secepat mungkin
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: 5,
            justifyContent: "center",
            mt: 2,
            mb: 5,
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <EmailIcon sx={{ color: blue[500] }} />
            <Typography color={grey[800]}>nur.hamsah.cash@gmail.com</Typography>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
            <WhatsAppIcon sx={{ color: blue[500] }} />
            <Typography color={grey[800]}>+6281213221343</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Contact;
