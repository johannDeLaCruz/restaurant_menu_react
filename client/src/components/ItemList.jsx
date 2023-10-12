import ItemCard from "./ItemCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";

export default function ItemList() {
  return (
    <Container maxWidth="md">
      <Grid container sx={{paddingBlock: 2}}>
        <ItemCard />
      </Grid>
    </Container>
  );
}
