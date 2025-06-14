import React from "react";
import TextField from "@mui/material/TextField";
import { Grid, Typography } from "@mui/material";
import MenuItem from "@mui/material/MenuItem";

import FilledInput from "@mui/material/FilledInput";

import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";

import FormControl from "@mui/material/FormControl";

function Product() {
  return (
    <>
      <Typography variant="h5" component="h5">
        Choose Your Product
      </Typography>
      <Grid container mt={2} spacing={2}>
        <Grid item xs={12}>
          <TextField
            id="outlined-select-currency"
            select
            label="Select"
            defaultValue="EUR"
            helperText="Please select your currency"
            fullWidth
          >
            {currencies.map((option) => (
              <MenuItem key={option.value} value={option.value}>
                {option.label}
              </MenuItem>
            ))}
          </TextField>
        </Grid>
        <>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Quantity"
              variant="outlined"
              type="number"
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <FormControl fullWidth>
              <TextField
                label="Total amount"
                disabled
                defaultValue="RS - 120"
              />
            </FormControl>
          </Grid>
        </>
      </Grid>
    </>
  );
}

export default Product;
