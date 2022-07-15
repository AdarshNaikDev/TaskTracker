import React from "react";
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
const AddTask = () => {

    return (
        <>
          <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '55ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="Outlined" variant="outlined" />
      <br/>
      <Button variant="outlined">Primary</Button>
      </Box>
    </>
    )

}

export default AddTask;