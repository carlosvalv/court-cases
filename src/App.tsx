import "./App.css";
import AddCase from "./pages/AddCase";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";

function App() {
  return (
    <div className="App">
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AddCase />
      </LocalizationProvider>
    </div>
  );
}

export default App;
