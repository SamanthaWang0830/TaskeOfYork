import { Route, Routes } from "react-router-dom";
import Navigation from "./pages/navigation";
import Home from "./pages/home";
import FindRestaurants from "./pages/findRestaurants";
import SpareFood from "./pages/spareFood";
import StudentsPicks from "./pages/studentsPicks";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Login from "./pages/Login/LoginPage";

const App = () => {
  return (
    <div>
      <Header/>
      <Login/>
    {/* // <Routes>
    //   <Route path="/" element={<Navigation />}>
    //     <Route index element={<Home />} />
    //     <Route path="findRestaurants" element={<FindRestaurants />} />
    //     <Route path="sparefood" element={<SpareFood />} />
    //     <Route path="sparefood" element={<SpareFood />} />
    //     <Route path="studentspicks" element={<StudentsPicks />} />
    //   </Route>
    // </Routes> */}
      <Footer/>
    </div>
    
  );
};

export default App;
