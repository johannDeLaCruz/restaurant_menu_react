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
    <Box component="footer" sx={{ width: "100%", backgroundColor: "primary.main" }}>
      <Container maxWidth="md">
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Logo />
          </Grid>
          <Grid item container xs={12} md={6} spacing={4}>
            <Grid item xs={6}>
              <Typography variant="subtitle1">Endereço:</Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Av.Nazaré 649 Entre Quintino e Rui Barbosa"
                    secondary="Estacionamento Rotativo ao lado do antigo Bradesco (Largo do Redondo)"
                  />
                </ListItem>
                <Typography variant="subtitle1">Contato</Typography>
                <ListItem>
                  <ListItemText primary="(91) 3121-6162" />
                </ListItem>
              </List>
            </Grid>
            <Grid item container xs={6} direction={"column"}>
              <Typography variant="subtitle1">
                Horário de Funcionamento:
              </Typography>
              <List>
                <ListItem>
                  <ListItemText
                    primary="Segunda a Sexta"
                    secondary="11:30 - 15:00"
                  />
                </ListItem>
                <ListItem>
                  <ListItemText
                    primary="Sábado a Domingo"
                    secondary="Fechado"
                  />
                </ListItem>
              </List>
            </Grid>
          </Grid>
          <Grid item xs={12} md={6}>
            <GoogleMapsWindow />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
