import { Provider } from "react-redux";
import AddCase from "./pages/AddCase";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import store from "./redux/store";

function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <AddCase />
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
