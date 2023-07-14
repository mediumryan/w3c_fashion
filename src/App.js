import Header from "./components/Header";
import HeaderTitle from "./components/HeaderTitle";
import Greeting from "./components/Greeting";
import "./css/index.css";
import Post from "./components/Post";
import Footer from "./components/Footer";
import Modal from "./components/Modal";
import { useState } from "react";

function App() {
  const [modalShow, setModalShow] = useState(false);

  return (
    <div className="App">
      <Header />
      <Modal modalShow={modalShow} setModalShow={setModalShow} />
      <HeaderTitle />
      <Greeting modalShow={modalShow} setModalShow={setModalShow} />
      <Post modalShow={modalShow} setModalShow={setModalShow} />
      <Footer />
    </div>
  );
}

export default App;
