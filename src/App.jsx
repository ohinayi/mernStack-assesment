import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavBar from "./navBar";
import Home from "./home";
function App() {
  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/" element={<Home />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
