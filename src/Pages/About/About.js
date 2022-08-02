import React from "react";
import { Box, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";

function About() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return (
    <Box my={10}>
      <Box sx={{ display: "flex", justifyContent: "center", gap: 10 }}>
        <Box sx={{ width: "50%", display: "flex", justifyContent: "flex-end" }}>
          <Box
            sx={{
              height: "600px",
              width: "400px",
              bgcolor: `rgb(${red},${green},${blue})`,
            }}
          ></Box>
        </Box>
        <Box sx={{ width: "50%" }}>
          <Box>
            <Typography mb={5}>NURHAMSAH</Typography>
            <Typography>
              Saya adalah seorang pengembang aplikasi berbasis web dengan
              pengalaman hampir 1 tahun. Et pariatur enim eu quis nisi nulla
              consequat commodo voluptate aute sint nisi et. Anim Lorem veniam
              id qui pariatur fugiat consequat laborum dolore in amet consequat
              duis incididunt. Amet dolore est ex minim esse ullamco proident
              nisi excepteur exercitation sunt dolore. Amet fugiat consectetur
              exercitation ipsum velit.
            </Typography>
            <Typography mt={1}>
              Sunt adipisicing mollit mollit adipisicing. Consequat exercitation
              et et enim cupidatat excepteur id. Reprehenderit eu proident irure
              pariatur cupidatat. Deserunt qui anim nostrud consectetur
              consectetur fugiat culpa mollit dolor. Et officia deserunt do
              ullamco ex dolor. Ea sit duis ullamco anim ipsum nostrud pariatur
              ipsum nulla duis irure. Ipsum adipisicing non ex irure
              reprehenderit ullamco. Sunt adipisicing mollit mollit adipisicing.
              Consequat exercitation et et enim cupidatat excepteur id.
              Reprehenderit eu proident irure pariatur cupidatat. Deserunt qui
              anim nostrud consectetur consectetur fugiat culpa mollit dolor. Et
              officia deserunt do ullamco ex dolor. Ea sit duis ullamco anim
              ipsum nostrud pariatur ipsum nulla duis irure. Ipsum adipisicing
              non ex irure reprehenderit ullamco.
            </Typography>
            <Typography mt={5}>LOREM EPSOM LORIS DELUASA</Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default About;
