import 'wowjs/css/libs/animate.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import HomeScreen from "./components/HomeScreen/HomeScreen";
import ScrollToTopButton from './components/ScrollToTopButton/index'

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
        <ScrollToTopButton/>
      </BrowserRouter>
    </>
  );
};

export default App;
