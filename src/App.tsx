import { Provider } from "react-redux";
import AddCase from "./pages/AddCase";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import store from "./redux/store";
import Navbar from "./components/Navbar";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ListCases from "./pages/ListCases";

const router = createBrowserRouter([
  {
    path: "/",
    element: <ListCases />,
  },
  {
    path: "/add",
    element: <AddCase />,
  },
]);

function App() {
  return (
    <Provider store={store}>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <Navbar />
        <div style={{ marginTop: 64 }}>
        <RouterProvider router={router} />
        </div>
      </LocalizationProvider>
    </Provider>
  );
}

export default App;
