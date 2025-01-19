import React, { Component } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
import {Box} from '@mui/material'
import MyCarousel from "./myCarousel";
class Home extends Component {
  state = {
    courses: [],
  };
  async componentDidMount() {
    const response = await axios.get("/");
    console.log({ response });
  }
  render() {
    return (
      <>

          <MyCarousel/>
<Box
sx={{
  display:"grid",
  gridTemplateColumns:"repeat(3,1fr)",
  gap:"16px",
  height:"100vh"

}}
>
<Box sx={{borderRadius:"8px"}}>
<Typography>
  Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque nobis libero fugit quam, totam, reprehenderit praesentium, perspiciatis quasi rem nam dolorum eius. Et ipsa quibusdam maxime consequatur porro quam nam!
</Typography>
</Box>
<Box sx={{borderRadius:"8px"}}>
<Typography>
  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus nobis nam provident libero delectus obcaecati, autem aut? Odio quisquam ad, veniam quaerat asperiores ab nostrum totam! Nihil voluptatibus recusandae commodi!
</Typography>
</Box>
<Box sx={{borderRadius:"8px"}}>
<Typography>
  s1
</Typography>
</Box>
</Box>
      </>
    );
  }
}
export default Home;
