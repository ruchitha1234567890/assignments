import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Tooltip from "@mui/material/Tooltip";
import Link from "@mui/material/Link";

export default function Header() {
  return (
    <AppBar position="static" sx={{ bgcolor: "#1565c0" }}>
      <Container maxWidth="xl">
        <Toolbar>
          <Link href="/" sx={{ flexGrow: 1 }}>
            <Box
              component="img"
              sx={{ height: 70 }}
              alt="Logo"
              src={require("./order.png")}
              pt={1}
            />
          </Link>

          <Box>
            <Tooltip>
              <IconButton sx={{ p: 0 }}>
                <Avatar
                  alt="Rahul Saha"
                  src="https://media.istockphoto.com/id/1337019071/photo/portrait-of-teenage-boy-stock-photo.jpg?s=612x612&w=0&k=20&c=VVqoYP17U7hl5bVDngkluNd80Jh6KkcnvooM-Y8LDH8="
                />
              </IconButton>
            </Tooltip>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
