import "wowjs/css/libs/animate.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import HomeScreen from "./components/HomeScreen/HomeScreen";
import ScrollToTopButton from "./components/ScrollToTopButton/index";
import Footer from "./components/Footer/Footer";
import PlanScreen from "./components/PlanScreen/PlanScreen";
import ReportScreen from "./components/ReportScreen/ReportScreen";
import NotFound from "./components/NotFound";
import Contractor from "./components/ContractorScreen/Contractor";
import ContactScreen from "./components/ContactScreen/ContactScreen";
import AboutScreen from "./components/AboutScreen/AboutScreen";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<HomeScreen />} />
          <Route exact path="/Plan" element={<PlanScreen />} />
          <Route exact path="/Report" element={<ReportScreen />} />
          <Route exact path="/Contractor" element={<Contractor />} />
          <Route exact path="/Contact" element={<ContactScreen />} />
          <Route exact path='/About' element={<AboutScreen/>}/>
          <Route path="*" element={<NotFound />} />
        </Routes>
        {/* <ScrollToTopButton/> */}
        <Footer />
      </BrowserRouter>
    </>
  );
};

export default App;
