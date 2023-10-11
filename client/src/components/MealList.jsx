import MealCard from "./MealCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function MealList() {
  return (
    <Container maxWidth="md">
      <Grid container>
        <MealCard />
      </Grid>
    </Container>
  );
}
