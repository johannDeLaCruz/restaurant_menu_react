import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import Stack from "@mui/material/Stack";

export default function CallToAction() {
  return (
    <Box
      py={6}
      sx={{
        backgroundImage: 'url("/public/bgPattern.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Stack
        direction="row"
        spacing={1}
        alignItems={"center"}
        justifyContent={"center"}
      >
        <Typography variant="h5" fontWeight={"bold"}>
          Nos siga no Instagram!
        </Typography>
        <InstagramIcon fontSize="large" />
      </Stack>
    </Box>
  );
}
