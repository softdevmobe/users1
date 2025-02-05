import React from "react";
import Carousel from "react-material-ui-carousel";
import { Paper, Button, Typography } from "@mui/material";

function HomeCarousel() {
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
        {
            name: "عکس 4",
            description: "این توضیحات عکس سوم است.",
            image: "/images/pic4.jpg",
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
        <Paper style={{ textAlign: "center", padding: "10px" ,borderTop: "1px solid #ddd",}}>
            <img
                src={item.image}
                alt={item.name}
                style={{ width: "100%", maxHeight: "250px", objectFit: "contain"}}
            />
            <Typography variant="h6" style={{ marginTop: "3px" }}>
                {item.name}
            </Typography>
            <Typography variant="body2" style={{ margin: "3px 0" }}>
                {item.description}
            </Typography>
            {/* <Button variant="contained" color="primary">
                مشاهده بیشتر
            </Button> */}
        </Paper>
    );
}

export default HomeCarousel;