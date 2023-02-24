import { TextField } from "@mui/material";
import React from "react";

const Test = () => {
  return (
    <div className="m-12 bg-red-500 h-[150px] centering p-12">
      <div className="bg-yellow-500 p-0 ">
        <TextField id="outlined-basic" label="Outlined" variant="outlined" className="mb-6" />
      </div>
    </div>
  );
};

export default Test;
