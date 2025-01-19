import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";

function MyCarousel() {
    const items = [
        {
            name: "عکس اول",
            description: "این توضیحات عکس اول است.",
            image: "/images/pic1.jpg",
        },
        {
            name: "عکس دوم",
            description: "این توضیحات عکس دوم است.",
            image: "/images/pic2.jpg",
        },
        {
            name: "عکس سوم",
            description: "این توضیحات عکس سوم است.",
            image: "/images/pic3.jpg",
        },
    ];

    return (
        <Carousel>
            {items.map((item, index) => (
                <Item key={index} item={item} />
            ))}
        </Carousel>
    );
}

function Item({ item }) {
    return (
        <Paper style={{ textAlign: "center", padding: "20px" }}>
            <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", maxHeight: "300px", objectFit: "contain"}}
            />
            <Typography variant="h5" style={{ marginTop: "10px" }}>
                {item.name}
            </Typography>
            <Typography variant="body1" style={{ margin: "10px 0" }}>
                {item.description}
            </Typography>
            <Button variant="contained" color="primary">
                مشاهده بیشتر
            </Button>
        </Paper>
    );
}

export default MyCarousel;