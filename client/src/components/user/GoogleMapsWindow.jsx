import Box from "@mui/material/Box";

export default function GoogleMapsWindow() {
  return (
    <Box sx={{ width: "100%", maxWidth: 400 }}>
      <div
        style={{
          position: "relative",
          overflow: "hidden",
          paddingTop: "100%", // 1:1 Aspect Ratio
        }}
      >
        <iframe
          title="Google Maps"
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            width: "100%",
            height: "100%",
            border: 0,
          }}
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.536839444791!2d-48.491761750285505!3d-1.452207794766009!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x92a48fbb2f7a4c3f%3A0xf187162e00e9831c!2sCasa%20de%20Elna%20Restaurante!5e0!3m2!1spt-BR!2sbr!4v1697849571396!5m2!1spt-BR!2sbr"
          allowFullScreen
        />
      </div>
    </Box>
  );
}
