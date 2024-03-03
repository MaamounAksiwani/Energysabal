import 'wowjs/css/libs/animate.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";

import HomeScreen from "./components/HomeScreen/HomeScreen";
import ScrollToTopButton from './components/ScrollToTopButton/index'
import Footer from './components/Footer/Footer';
import PlanScreen from './components/PlanScreen/PlanScreen';
import ReportScreen from './components/ReportScreen/ReportScreen';
import NotFound from './components/NotFound';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path='/Plan' element={<PlanScreen/>}/>
          <Route exact path='/Report' element={<ReportScreen/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <ScrollToTopButton/> */}
        <Footer/>
      </BrowserRouter>
    </>
  );
};

export default App;
