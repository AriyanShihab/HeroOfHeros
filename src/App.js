import "./App.css";
import Answer from "./components/Answear/Answer";
import Dashboard from "./components/Dashbord/Dashboard";
import Disclaimer from "./components/Disclaimer/Disclaimer";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";

function App() {
  return (
    <div className="bg-gray-900">
      <Header></Header>
      <Disclaimer></Disclaimer>
      <Dashboard></Dashboard>
      <Answer></Answer>
      <Footer></Footer>
    </div>
  );
}

export default App;
