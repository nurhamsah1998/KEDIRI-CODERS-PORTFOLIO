import { Box, Divider, Typography } from "@mui/material";
import React from "react";
import { blue, deepOrange, grey } from "@mui/material/colors";

function Home() {
  return (
    <Box>
      <Box my={20}>
        <Box sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
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
          <Box sx={{ maxWidth: "40%" }}>
            <img
              width="100%"
              src="/svg-UNDRAW/undraw_hello_re_3evm.svg"
              alt="Hero"
            />
          </Box>
        </Box>
      </Box>
      <Divider />
      <Box my={20}>
        {" "}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
          <Box sx={{ maxWidth: "40%" }}>
            <img
              width="100%"
              src="/svg-UNDRAW/undraw_co-working_re_w93t.svg"
              alt="Hero"
            />
          </Box>
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
      </Box>
      <Divider />
      <Box my={20}>
        {" "}
        <Box sx={{ display: "flex", justifyContent: "center", gap: 5 }}>
          <Box>
            <Typography fontSize={45} color={grey[800]} fontWeight={700}>
              Jamal KJDKDJ njdkj DK
            </Typography>
            <Box>
              <Typography
                fontSize={45}
                mt={-1}
                color={grey[800]}
                fontWeight={600}
              >
                Pengerjaan yang{" "}
                <span style={{ color: blue[500] }}>berpengalaman.</span>
              </Typography>
              <Typography mt={1}>
                Consequat commodo quis ipsum aliqua consequat amet esse id
                cillum labore nulla voluptate enim. Occaecat ea esse occaecat
              </Typography>
            </Box>
          </Box>
          <Box sx={{ maxWidth: "40%" }}>
            <img
              width="100%"
              src="/svg-UNDRAW/undraw_relaxing_at_home_re_mror.svg"
              alt="Hero"
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Home;
