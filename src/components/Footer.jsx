import { Stack, Typography } from "@mui/material";

const Footer = () => (
  <Stack
    direction="row"
    alignItems="center"
    justifyContent="center"
    p={1}
    sx={{
      background: '#242124',
      position: 'fixed',
      width: '100%',
      bottom: 0
    }}
  >
    <Typography
      className="copyright"
      variant="body2"
      sx={{
        mt: 1.5,
        color: "#fff",
        display: "flex",
        alignItems: "center",
        justifyContent: "center"
      }}
    >
      Copyright © 2024 MyTube
    </Typography>
  </Stack>
);

export default Footer;
