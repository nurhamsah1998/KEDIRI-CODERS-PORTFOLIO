import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { blue, deepOrange, grey } from "@mui/material/colors";

function Home() {
  return (
    <Box>
      <Box mb={10} mt={5}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            gap: 5,
            alignItems: "center",
          }}
        >
          <Box>
            <Typography color={grey[800]} fontSize={55} fontWeight={600}>
              Hello,
            </Typography>
            <Typography fontSize={45} color={grey[800]} fontWeight={700}>
              Perkenalkan Nama Saya Nurhamsah,
            </Typography>
            <Box>
              <Typography fontSize={45} mt={-1} fontWeight={600}>
                <span style={{ color: grey[800] }}>Saya Adalah Seorang </span>
                <span style={{ color: deepOrange[500] }}>Web</span>
                <span style={{ color: blue[500] }}>Developer.</span>
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
      <Typography fontSize={25} textAlign="center" mt={10}>
        Lorem epsum
      </Typography>
      <Box
        my={10}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: 5,
          alignItems: "flex-start",
        }}
      >
        <Box
          sx={{
            maxWidth: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ textAlign: "right" }}>
            <Typography fontSize={45} color={grey[800]} fontWeight={700}>
              Pengerjaan{" "}
              <span style={{ color: deepOrange[500] }}>Professional.</span>
            </Typography>
            <Box>
              <Typography
                fontSize={45}
                mt={-1}
                color={grey[800]}
                fontWeight={600}
              >
                Pengerjaan yang selalu dipantau oleh tim tim yang{" "}
                <span style={{ color: blue[500] }}>berpengalaman.</span>
              </Typography>
              <Typography mt={1}>
                Consequat commodo quis ipsum aliqua consequat amet esse id
                cillum labore nulla voluptate enim. Occaecat ea esse occaecat
                excepteur. Ipsum occaecat officia officia eu dolore aliquip quis
                nulla. Laboris incididunt ea nostrud esse irure. Ut ipsum qui
                excepteur est sit duis commodo esse cillum consequat. Et
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          sx={{
            maxWidth: "50%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography fontSize={45} color={grey[800]} fontWeight={700}>
              Memiliki kualitas baik
            </Typography>
            <Box>
              <Typography
                fontSize={45}
                mt={-1}
                color={grey[800]}
                fontWeight={600}
              >
                serta didukung berbagai channel{" "}
                <span style={{ color: blue[500] }}>Ternama.</span>
              </Typography>
              <Typography mt={1}>
                Consequat commodo quis ipsum aliqua consequat amet esse id
                cillum labore nulla voluptate enim. Occaecat ea esse occaecat
              </Typography>
            </Box>
          </Box>
        </Box>
      </Box>
      <Divider />
    </Box>
  );
}

export default Home;
