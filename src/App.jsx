import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import ProtectedPage from "./components/ProtectedPage";

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<ProtectedPage><Home /></ProtectedPage>}></Route>
      <Route path="/login" element={<Login />}></Route>
      <Route path="/register" element={<Register />}></Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
