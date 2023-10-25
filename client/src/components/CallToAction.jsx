import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import InstagramIcon from "@mui/icons-material/Instagram";
import Stack from "@mui/material/Stack";
import Link from "@mui/material/Link";

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
        flexWrap={"wrap"}
      >
        <Link
          href="https://instagram.com/casadeelna"
          target="_blank"
          underline="hover"
        >
          <Typography variant="h5" fontWeight={"bold"}>
            Nos siga no Instagram!
          </Typography>
        </Link>
        <Link
          href="https://instagram.com/casadeelna"
          underline="none"
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <InstagramIcon fontSize="large" />
        </Link>
      </Stack>
    </Box>
  );
}
