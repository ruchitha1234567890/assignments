import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";

export default function Foot() {
  return (
    <>
      <Typography
        mt={2}
        mb={2}
        px={{ xs: 2, sm: 4, md: 20 }}
        variant="p"
        component="p"
        textAlign="center"
        mx={{ xs: "20px", sm: "20px" }}
      >
        By using the Order Express V23 platform, you agree to abide by the
        following terms and conditions. The platform is provided for the purpose
        of facilitating the ordering process. Users are responsible for
        providing accurate and up-to-date information while placing orders.
      </Typography>

      <Box
        display="flex"
        justifyContent="center"
        alignItems="center"
        sx={{
          backgroundColor: "#1565c0",
        }}
        py={3}
        component="footer"
        mt={8}
      >
        <Typography
          variant={{ xs: "body2", sm: "body2", md: "h6" }}
          align="center"
          sx={{ color: "#ffffff" }}
          mx={{ xs: "20px", sm: "20px" }}
        >
          Order Xpress V23 |{" Copyright © "}
          <Link
            color="inherit"
            href="https://www.rajarshisamaddar.com"
            sx={{ textDecoration: "none" }}
          >
            <b>Rajarshi Samaddar</b>
          </Link>{" "}
          {new Date().getFullYear()}
          {"."}
        </Typography>
      </Box>
    </>
  );
}
