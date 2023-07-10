"use client";
import { TextField } from "@mui/material";
import { DateField } from "@mui/x-date-pickers/";
import { LocalizationProvider } from "@mui/x-date-pickers/";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en";

const Resume = () => {
  return (
    <main>
      <div>
        <h3>Please enter your information below:</h3>
        <TextField id="outlined-basic" label="First Name" variant="outlined" />
        <TextField id="outlined-basic" label="Last Name" variant="outlined" />
        <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
          <DateField label="Basic date field" />
        </LocalizationProvider>
        <TextField id="outlined-basic" label="Occupation" variant="outlined" />
        <TextField
          id="outlined-basic"
          label="Phone Number"
          variant="outlined"
        />
        <TextField id="outlined-basic" label="Email" variant="outlined" />
      </div>
    </main>
  );
};

export default Resume;
