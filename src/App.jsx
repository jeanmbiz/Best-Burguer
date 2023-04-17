import { ToastContainer } from "react-toastify";
import "./App.css";
import Dashboard from "./components/Dashboard/Dashboard";
import 'react-toastify/dist/ReactToastify.min.css'

const App = () => (
  <div>
    <Dashboard />
    <ToastContainer/>
  </div>
);

export default App;
