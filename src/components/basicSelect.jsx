import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function BasicSelect(props) {
  const [index, setIndex] = React.useState("");

  const handleChange = (event) => {
    setIndex(event.target.value);
  };

  return (
    <Box sx={{ minWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">sheets</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={index}
          label="sheets"
          onChange={handleChange}
        >
          {props.result.map((item) => {
            return <MenuItem key={item.index} value={item.index}>{item.value}</MenuItem>;
          })}
        </Select>
      </FormControl>
    </Box>
  );
}
