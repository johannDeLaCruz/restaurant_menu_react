import ItemCard from "./ItemCard";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid";
import { useState, useEffect } from "react";
import axios from "axios";

export default function ItemList() {
  const [menuItems, setMenuItems] = useState([]);

  useEffect(() => {
    async function fetchMenuItems() {
      try {
        const response = await axios.get("http://localhost:3000/"); // Assuming your backend is running on the same host as your frontend
        setMenuItems(response.data);
      } catch (error) {
        console.error("Error fetching menu items:", error);
      }
    }
    fetchMenuItems();
  }, []);
  return (
    <Container maxWidth="md">
      <Grid container sx={{ paddingBlock: 2 }}>
        {menuItems.map((menuItem) => (
          <ItemCard key={menuItem._id} menuItem={menuItem} />
        ))}
      </Grid>
    </Container>
  );
}
