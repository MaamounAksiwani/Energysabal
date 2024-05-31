import "wowjs/css/libs/animate.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ScrollToTopButton from "./components/ScrollToTopButton/index";
import Favicon from "react-favicon";
import logo from '../src/until/image/send/Group 196.svg'
import Footer from "./components/Footer/Footer";
import PlanScreen from "./components/PlanScreen/PlanScreen";
import ReportScreen from "./components/ReportScreen/ReportScreen";
import NotFound from "./components/NotFound";
import Contractor from "./components/ContractorScreen/Contractor";
import ContactScreen from "./components/ContactScreen/ContactScreen";
import AboutScreen from "./components/AboutScreen/AboutScreen";
import Makeplan from "./components/Makeplan/Makeplan";
import HeatPump from './components/HeatPump/HeatPump'

const App = () => {
  return (
    <>
    <Favicon url={logo}/>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/Plan" element={<PlanScreen />} />
          <Route exact path="/Report" element={<ReportScreen />} />
          <Route exact path="/Contractor" element={<Contractor />} />
          <Route exact path="/Contact" element={<ContactScreen />} />
          <Route exact path='/About' element={<AboutScreen/>}/>
          <Route exact path='/Makeplan' element={<Makeplan/>}/>
          <Route exact path='/HeatPump' element={<HeatPump/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <ScrollToTopButton/> */}
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
