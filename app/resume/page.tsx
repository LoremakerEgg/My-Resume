"use client";

import styles from "./page.module.scss";
import { TextField } from "@mui/material";
import { DateField } from "@mui/x-date-pickers/";
import { LocalizationProvider } from "@mui/x-date-pickers/";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { Grid } from "@mui/material";
import "dayjs/locale/en";

const Resume = () => {
  const value = (e: any) => {
    console.log(e.target.value);
  };
  return (
    <main>
      <div className={styles.title}>
        <h3>Please enter your information below:</h3>
      </div>
      <Grid container direction={"column"} spacing={2} marginLeft={2}>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="First Name"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Last Name"
            variant="outlined"
            onChange={value}
          />
        </Grid>{" "}
        <Grid item>
          <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
            <DateField label="Basic date field" />
          </LocalizationProvider>
        </Grid>{" "}
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Occupation"
            variant="outlined"
          />
        </Grid>{" "}
        <Grid item>
          <TextField
            id="outlined-basic"
            label="Phone Number"
            variant="outlined"
          />
        </Grid>
        <Grid item>
          <TextField id="outlined-basic" label="Email" variant="outlined" />
        </Grid>
        <Grid item>
          <button
            type="submit"
            onClick={(e) => {
              console.log(e);
            }}
          >
            Submit
          </button>
        </Grid>
      </Grid>
    </main>
  );
};

export default Resume;
