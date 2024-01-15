import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";

type SelectFinishedProps = {
  onChange(isFinished: boolean): void;
};

function SelectFinished(props: SelectFinishedProps) {
  return (
    <FormControl style={{ flex: 1 }}>
      <InputLabel id="label-select">Finished</InputLabel>
      <Select
        defaultValue=""
        labelId="label-select"
        label="Finished"
        style={{ minWidth: 200 }}
        onChange={(event: SelectChangeEvent) =>
          props.onChange(event.target.value === "true")
        }
      >
        <MenuItem value={"true"}>Yes, the case has already finished</MenuItem>
        <MenuItem value={"false"}>No, the case is still procesing</MenuItem>
      </Select>
    </FormControl>
  );
}

export default SelectFinished;
