import { useState } from "react";
import Navbar from "./components/Navbar";
import Textarea from "./components/Textarea";
import swal from 'sweetalert';
import About from "./components/About";
import Footer from "./components/Footer";
import {
  BrowserRouter as Router,
  Route,
  Routes
} from "react-router-dom";
function App() {

  // These all are using stateHooks
  const [mode, setbgMode] = useState("bg-gray-300") //This shows initially light mode is enabled
  const [textColor, setTextColor] = useState("text-gray-800") //This is the second useState which is used to control the text color of the navbar
  const [svgColor, setSvgColor] = useState("fill-gray-800")
  const [bodyColor, setBodyColor] = useState("bg-gray-200")
  const toggleMode = () => {
    if (mode === "bg-gray-300" && textColor === "text-gray-800") {
      setTextColor("text-gray-200");
      setbgMode("bg-gray-800");
      setBodyColor("bg-gray-700")
      setSvgColor("fill-gray-300")
      swal({
        title: "Dark Mode enabled!",
        icon: "success",
      });
    }
    else {
      setTextColor("text-gray-800");
      setBodyColor("bg-gray-200")
      setSvgColor("fill-gray-800")
      setbgMode("bg-gray-300");
      swal({
        title: "Light Mode enabled!",
        icon: "success",
      });
    }
  }
  return (
    <>
      <Router>
        {/* // Here title="MyHeading" is a kind of props which is basically a property */}
        {/* // Props can be anything like string, boolean, object etc..  */}

        <Navbar svgColor={svgColor} txtColor={textColor} toggleMode={toggleMode} bgMode={mode} title=" TextEditor" firstLink="Home" secondLink="About" />
        {/* //This Navbar is imported from Navbar.js which is in the components folder */}
        {/* // <Navbar /> //If we will not send no prop then the default values of the props will be shown in our site */}

        <Routes>
          <Route exact path="/about" element={<About txtColor={textColor} bodyColor={bodyColor} bgMode={mode} />}>
          </Route>
          <Route exact path="/" element={<Textarea txtColor={textColor} bodyColor={bodyColor} bgMode={mode} tHeading="Try TextEditor Now!" />}>
          </Route>
        </Routes>
      </Router>
      <Footer txtColor={textColor} bgMode={mode} />
    </>
  );
}

export default App;
