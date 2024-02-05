import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Navbar from "./components/Navbar";
import Page404 from "./components/Page404";
import User from "./components/User";
import Filter from "./Pages/Filter";
import Contact from "./Pages/Contact";
import Programming from "./components/Programming";
import Designing from "./components/Designing";
import Login from "./components/Login";
import Protected from "./components/Protected";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Protected Component={Home} />}></Route>
        <Route path="/login" element={<Login />}></Route>

        <Route path="/about" element={<About></About>}></Route>
        <Route path="/filter" element={<Filter></Filter>}></Route>
        <Route path="/contact" element={<Contact></Contact>}>
          <Route path="dev" element={<Programming></Programming>}></Route>
          <Route path="design" element={<Designing></Designing>}></Route>
        </Route>
        <Route path="/user/:name" element={<User></User>}></Route>
        <Route path="*" element={<Page404></Page404>}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
