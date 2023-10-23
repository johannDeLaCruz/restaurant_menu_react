import Box from "@mui/material/Box";

export default function GoogleMapsWindow() {
  return (
    <Box>
      <iframe
        title="Google Maps"
        width="400"
        height="400"
        style={{ border: 0, padding: 0, margin: 0 }}
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.536839444791!2d-48.491761750285505!3d-1.452207794766009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48fbb2f7a4c3f%3A0xf187162e00e9831c!2sCasa%20de%20Elna%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1697849571396!5m2!1spt-BR!2sbr"
        allowFullScreen
      />
    </Box>
  );
}
