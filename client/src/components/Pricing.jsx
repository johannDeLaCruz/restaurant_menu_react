import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";

export default function Pricing() {
  return (
    <Stack
      spacing={"0"}
      direction={"column"}
      justifyContent={"center"}
      alignItems={"center"}
      paddingBlock={"3rem"}
    >
      <Typography variant="h6" paragraph fontWeight={"regular"} color={"warning"}>
        Buffet R$ 11,80 a cada 100g
      </Typography>
      <Typography variant="h6" paragraph fontWeight={"regular"}>
        Proteína R$ 15,80 a cada 100g
      </Typography>
    </Stack>
  );
}
