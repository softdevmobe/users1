import { Typography } from "@mui/material";

const CustomInput = ({name,value,label,onChange ,type="text"}) => {
    return (  <div className="mb-3">
        <Typography htmlFor={name}>{label}:</Typography>
        <input
          onChange={onChange}
          // value={value}
          id={name}
          name={name}
          // className="form-control"
          type={type}
          {...(type !== "file" && {value})}
        />
      </div>);
}
 
export default CustomInput;