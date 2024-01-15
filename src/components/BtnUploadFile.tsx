import { Button } from "@mui/material";
import React from "react";
import { Case } from "../types/case";
import { v4 as uuidv4 } from "uuid";
import { useDispatch } from "react-redux";
import { replaceCase } from "../redux/states/case";

function UploadFile() {
  const dispatch = useDispatch();
  const inputFileRef = React.useRef<HTMLInputElement>(null);

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const fileInput = event.target;
    const file = fileInput.files && fileInput.files[0];

    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        try {
          const fileContent = e.target?.result as string;
          const newCases: Case[] = fileContent
            .split("\n")
            .map((line) => {
              const [customerName, startDate, isFinished] = line
                .replace("customerName", "")
                .replace("startDate", "")
                .replace("isFinished", "")
                .replaceAll("'", "")
                .replaceAll(":", "")
                .split(", ");
              return {
                id: uuidv4(),
                customerName,
                startDate,
                isFinished: isFinished === "true",
              };
            })
            .filter(
              (c) =>
                c.customerName &&
                c.startDate &&
                typeof c.isFinished === "boolean"
            );
          dispatch(replaceCase(newCases));
          alert("Cases loaded from the file!");
        } catch (error) {
          console.error("Error parsing file:", error);
          alert("Error parsing the file. Please check the file format.");
        }
      };

      reader.readAsText(file);
    }
  };
  return (
    <>
      <input
        ref={inputFileRef}
        style={{ display: "none" }}
        type="file"
        accept=".txt"
        onChange={handleFileUpload}
      />
      <Button
        onClick={() => {
          inputFileRef!.current!.click();
        }}
        variant="outlined"
      >
        Upload File
      </Button>
    </>
  );
}

export default UploadFile;
