import Header from "./components/Header";
import HeaderTitle from "./components/HeaderTitle";
import Greeting from "./components/Greeting";
import "./css/index.css";
import Post from "./components/Post";

function App() {
  return (
    <div className="App">
      <Header />
      <HeaderTitle />
      <Greeting />
      <Post />
    </div>
  );
}

export default App;
