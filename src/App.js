import 'wowjs/css/libs/animate.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import HomeScreen from "./components/HomeScreen/HomeScreen";
import ScrollToTopButton from './components/ScrollToTopButton/index'
import Footer from './components/Footer/Footer';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
        </Routes>
        <ScrollToTopButton/>
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
