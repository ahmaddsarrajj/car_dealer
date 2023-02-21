import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import './card.css'

export default function CardItem(props) {
  return (
    <Card sx={{ maxWidth: 345 }} className="card">
      <CardMedia
        sx={{ height: 140 }}
        image="/assets/car-1300629__340.webp"
        title="car"
      />
      <CardContent>
              <Typography className="title" gutterBottom variant="h5" component="div">
                Car Name
              </Typography>
        <table>
          <tr>
            <td >
              <Typography variant="body2" color="text.secondary">
                Miles
              </Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography variant="body2" color="text.secondary">
                Model
              </Typography>
            </td>
            <td>
              <Typography variant="body2" color="text.secondary">
                Type
              </Typography>
            </td>
          </tr>
          <tr>
            <td>
              <Typography variant="body2" color="text.secondary">
                Cylinder
              </Typography>
            </td>
            <td>
              <Typography variant="body2" color="text.secondary">
                Country
              </Typography>
            </td>
          </tr>
        </table>
      </CardContent>
      <CardActions>
        <Button size="small">Learn More</Button>
      </CardActions>
    </Card>
  );
}
