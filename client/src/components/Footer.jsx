import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import Logo from "../components/Logo";
import GoogleMapsWindow from "../components/GoogleMapsWindow";

export default function Footer() {
  return (
    <Box
      component="footer"
      sx={{
        width: "100%",
        backgroundColor: "primary.main",
        color: "primary.contrastText",
      }}
    >
      <Container maxWidth="md">
        <Box sx={{ pt: 4, pb: 1 }}>
          {" "}
          <Logo />
        </Box>
        <Grid container spacing={3}>
          <Grid item container xs={12} md={6} spacing={2}>
            <Grid item xs={6}>
              <List>
                <Typography variant="h6">Endereço:</Typography>
                <ListItem>
                  <ListItemText
                    primary="Av.Nazaré 649"
                    secondary=" Entre Quintino e Rui Barbosa. Estacionamento Rotativo ao lado do antigo Bradesco (Largo do Redondo)"
                  />
                </ListItem>
                <Typography variant="h6">Contato</Typography>
                <ListItem>
                  <ListItemText primary="(91) 3121-6162" />
                </ListItem>
              </List>
            </Grid>
            <Grid item container xs={6} direction={"column"}>
              <List>
                <Typography variant="h6">Horário de Funcionamento:</Typography>
                <ListItem>
                  <ListItemText
                    primary="Segunda a Sexta:"
                    secondary="11:30 - 15:00"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Sábado a Domingo:"
                    secondary="Fechado"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6} >
            <GoogleMapsWindow />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
