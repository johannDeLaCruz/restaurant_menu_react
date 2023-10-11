import ItemCard from "./ItemCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function ItemList() {
  return (
    <Container maxWidth="md">
      <Grid container>
        <ItemCard />
      </Grid>
    </Container>
  );
}
