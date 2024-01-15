import { Provider } from "react-redux";
import AddCase from "./pages/AddCase";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import store from "./redux/store";
import Navbar from "./components/Navbar";

function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <div style={{ marginTop: 64 }}>
          <AddCase />
        </div>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
