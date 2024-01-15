import { useState } from "react";
import { Case } from "../types/case";
import { Button, TextField } from "@mui/material";

function AddCase() {
  const [newCase, setNewCase] = useState<Case>();

  const renderSubpage = () => {
    return (
      <TextField
        id="outlined-basic"
        label="Name"
        variant="outlined"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setNewCase({ ...newCase, customerName: e.target.value })
        }
      />
    );
  };

  return (
    <div>
      <h1>Add a new court case to the system</h1>
      <div>{renderSubpage()}</div>
      <Button onClick={()=>{}} variant="outlined" disabled>Send</Button>
    </div>
  );
}

export default AddCase;
