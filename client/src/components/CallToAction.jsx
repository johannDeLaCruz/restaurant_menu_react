import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

export default function CallToAction() {
  return (
    <Box
      py={5}
      sx={{
        backgroundImage: 'url("/public/bgPattern.svg")',
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <Typography variant="h5" textAlign={"center"}>Nos siga no Instagram!</Typography>
      
    </Box>
  );
}
