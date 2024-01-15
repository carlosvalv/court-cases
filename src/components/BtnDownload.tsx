import { Button } from "@mui/material";
import { useSelector } from "react-redux";
import { AppStore } from "../redux/store";
import { Case } from "../types/case";

function BtnDownload() {
  const stateCases = useSelector((store: AppStore) => store.cases);

  const handleDownload = () => {
    const fileContent = stateCases
      .map((c: Case) => `${c.customerName}, ${c.startDate}, ${c.isFinished}`)
      .join("\n");

    const blob = new Blob([fileContent], { type: "text/plain" });

    const link = document.createElement("a");
    link.href = URL.createObjectURL(blob);
    link.download = "cases.txt";
    link.click();
  };

  return (
    <Button
      onClick={() => {
        handleDownload();
      }}
      variant="contained"
    >
      Download Cases
    </Button>
  );
}

export default BtnDownload;
