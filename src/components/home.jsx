import React, { Component } from "react";
import axios from "axios";
import Typography from "@mui/material/Typography";
class Home extends Component {
  state = {
    courses: [],
  };
  async componentDidMount() {
    const response = await axios.get("/");
    console.log("{ response }");
  }
  render() {
    return (
      <>
        <Typography variant="h6">
Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum fugit, repellendus nihil unde odio, rem deleniti corrupti optio non, magnam voluptate. Soluta ipsum veritatis voluptatibus, error ex itaque pariatur ipsam.
        </Typography>
        <Typography variant="h3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit atque possimus modi qui veniam omnis perferendis
          temporibus nisi? Enim perspiciatis velit aut eaque optio modi incidunt. Quis at ex nesciunt?
        </Typography>
        <Typography variant="h2">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi quisquam nihil soluta ipsam incidunt ducimus
          deserunt sunt fugiat reiciendis earum quae neque minus ex ea pariatur assumenda, laborum consequuntur
          corrupti!
        </Typography>
      </>
    );
  }
}
export default Home;
