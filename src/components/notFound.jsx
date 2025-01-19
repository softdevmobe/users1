import { TextField, Button, Box, Typography } from "@mui/material";
const NotFound = () => {
    return (<>
    <Box
        sx={{
          maxWidth: 400,
          margin: "auto",
          mt: 10,
          mb: 10,
          p: 3,
          border: "1px solid #ddd",
          borderRadius: 2,
          boxShadow: 3,
          textAlign: "center",
          height:"100%"
        }}
      >
        <Typography variant="h5" gutterBottom>
       NotFound
        </Typography>
        </Box>
    </>  );
}
 
export default NotFound;